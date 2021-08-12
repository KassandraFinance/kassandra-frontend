import React from 'react'
import BigNumber from 'bn.js'
import { useSelector, RootStateOrAny } from 'react-redux'

import web3 from '../../../utils/web3'

import { BNtoDecimal } from '../../../utils/numerals'
import { HeimCorePool } from '../../../constants/tokenAddresses'

import useBalance from '../../../hooks/useBalance'
import usePoolContract from '../../../hooks/usePoolContract'

import { 
  InputTokensContainer, 
  PayWith, 
  Line, 
  Span,
  SpanLight,
  ImgArrowLong,
  Amount,
  ButtonMax,
  Input,
  Select
} from './styles'


interface IInputEthProps {
  typeAction: string
  supplyHeim: BigNumber
  getArrayTokens: () => void
  investSelected: string
  setInvestSelected: React.Dispatch<React.SetStateAction<string>>
  amountTokenPool: BigNumber
  setAmountTokenPool: React.Dispatch<React.SetStateAction<BigNumber>>
  setInvestHeim: React.Dispatch<React.SetStateAction<BigNumber>>
  setInvestRate: React.Dispatch<React.SetStateAction<BigNumber>>
}

const InputTokens = ({
  typeAction, 
  supplyHeim,
  getArrayTokens,
  amountTokenPool, 
  setAmountTokenPool,
  investSelected,
  setInvestSelected,
  setInvestHeim,
  setInvestRate
}: IInputEthProps) => {
  const [balanceToken, setBalanceToken] = React.useState<BigNumber>(new BigNumber(0))
  const { poolTokens, userWalletAddress } = useSelector((state: RootStateOrAny) => state)
  
  const { getBalanceToken } = useBalance()
  const { 
    calcPoolOutGivenSingleIn, 
    denormalizedWeight, 
    totalDenormalizedWeight, 
    swapFee 
  } = usePoolContract()


  const tokenSelected = poolTokens.filter((token: { address: string }) => {
    if (token.address === investSelected) return token
  })

  const handleBalanceToken = async () => {
    const balance = await getBalanceToken(tokenSelected[0]?.address)
    setBalanceToken(balance)
  }

  const handleCalcPoolOut = async () => {
    if (!tokenSelected[0]?.address) {
      setInvestHeim(new BigNumber(0))
      return
    }
    const denormalized = await denormalizedWeight(HeimCorePool, tokenSelected[0]?.address)
    const totalDenormalized = await totalDenormalizedWeight(HeimCorePool)
    const swap = await swapFee(HeimCorePool)

    const invest = await calcPoolOutGivenSingleIn(
      HeimCorePool, 
      tokenSelected[0]?.balance, 
      denormalized, 
      supplyHeim, 
      totalDenormalized, 
      amountTokenPool, 
      swap
    )

    const investRate = await calcPoolOutGivenSingleIn(
      HeimCorePool, 
      tokenSelected[0]?.balance, 
      denormalized, 
      supplyHeim, 
      totalDenormalized, 
      new BigNumber(10).pow(new BigNumber(18)), 
      swap
    )
    
    setInvestHeim(invest)
    setInvestRate(investRate)
  }

  React.useEffect(() => {
    handleBalanceToken()
  }, [tokenSelected[0]?.address, userWalletAddress])

  React.useEffect(() => {
    handleCalcPoolOut()
  }, [amountTokenPool, investSelected])
  
  return (
    <InputTokensContainer>
      <PayWith>
        <Span>{typeAction}</Span>
        <Select 
          defaultValue={investSelected} 
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setInvestSelected(e.target.value)}
        >
          <option value="">- - - -</option>
          {poolTokens.map((token: { address: string, symbol: string }) =>
            <option key={token.address} value={token?.address}>{token?.symbol}</option>
          )}
        </Select>
        <SpanLight>Balance: {investSelected === '' ? 
          '0.000000'
          :
          BNtoDecimal(balanceToken, new BigNumber(18), 6)}
        </SpanLight>
        <Line />
      </PayWith>
      <ImgArrowLong src="assets/arrow-long-down.svg" alt="" />
      <Amount>
        <Span>Amount</Span>
        <Input
          type="number"
          placeholder="0"
          step="any"
          min="0"
          onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
            // don't allow negative numbers
            if (e.key === '-') {
              e.preventDefault()
            }
            // Blink bug makes the value come empty if pressing the decimal symbol that is not that of the current locale
            else if (e.key === '.' || e.key === ',') {
              // first time value will be ok, if pressing twice it zeroes, we ignore those
              if (e.target.value.length > 0 && e.target.value.search(/[,.]/) === -1) {
                e.target.dataset.lastvalue = e.target.value
              }
            }
            else if (e.key === 'Backspace' || e.key === 'Delete') {
              e.target.dataset.lastvalue = 0
            }
          }}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              getArrayTokens()
              let { value } = e.target

              if (value.length === 0) {
                value = e.target.dataset.lastvalue
              }

              setAmountTokenPool(new BigNumber(web3.utils.toWei(value)))
            }
          }
          value={BNtoDecimal(amountTokenPool, new BigNumber(18), 6)}
        />
        <ButtonMax 
          type="button" 
          onClick={() => setAmountTokenPool(balanceToken)}
        >
          Max
        </ButtonMax>
        <Line />
      </Amount>
    </InputTokensContainer>
  )
}

export default InputTokens