import React from 'react'
import { useSelector, RootStateOrAny } from 'react-redux'
import BigNumber from 'bn.js'
import web3 from '../../../utils/web3'

import { HeimCRPPOOL } from '../../../constants/tokenAddresses'
import useERC20Contract from '../../../hooks/useERC20Contract'

import { 
  Input, 
  ImgArrowLong, 
  InputHeimContainer, 
  PayWith,
  Symbol, 
  Span, 
  SpanLight, 
  Amount,
  ButtonMax
} from './styles'
import { BNtoDecimal } from '../../../utils/numerals'

interface IInputHeimProps {
  typeAction: string
  redeem: boolean
  amountHeim: BigNumber
  setAmountHeim: React.Dispatch<React.SetStateAction<BigNumber>>
  getBalanceToken: () => void
  investSelected: string
}

const InputHeim = ({ 
  typeAction,
  redeem,
  amountHeim,
  setAmountHeim,
  getBalanceToken,
  investSelected
}: IInputHeimProps) => {
  const [balanceToken, setBalanceToken] = React.useState<BigNumber>(new BigNumber(0))

  const { userWalletAddress } = useSelector((state: RootStateOrAny) => state)
  const { getBalance } = useERC20Contract()

  React.useEffect(() => {
    (async () => {    
      const balanceTokenSelected = await getBalance(HeimCRPPOOL, userWalletAddress)
      setBalanceToken(balanceTokenSelected)
    })()
  }, [])

  const handleSetTotalBalance = () => {
    setAmountHeim(balanceToken)
  }
  return (
    <InputHeimContainer>
      <PayWith>
        <Span>{typeAction}</Span>
        <Symbol>HEIM</Symbol>
        <SpanLight>Balance: {balanceToken.toString() === '' ? '0.000000' : BNtoDecimal(balanceToken, new BigNumber(18), 6)}</SpanLight>
      </PayWith>
      <ImgArrowLong 
        style={{ backgroundColor: '#030102', padding: '0 24px 14px', marginTop: '44px'}} 
        src={`assets/arrow-long-${redeem ? 'down' : 'up'}.svg`} 
        alt="" 
      />
      <Amount>
        <Span>Total</Span>
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
          onChange={
            (e: React.ChangeEvent<HTMLInputElement>) => {
              getBalanceToken()
              let { value } = e.target

              if (value.length === 0) {
                value = e.target.dataset.lastvalue
              }

              setAmountHeim(new BigNumber(web3.utils.toWei(value)))
            }
          }
          value={BNtoDecimal(amountHeim, new BigNumber(18), 6)}
        />
        <ButtonMax type="button" onClick={handleSetTotalBalance}>Max</ButtonMax>
      </Amount>
    </InputHeimContainer>
  )
}

export default InputHeim
