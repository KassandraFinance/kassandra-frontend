import React from 'react'
import BigNumber from 'bn.js'
import web3 from '../../../utils/web3'

import { HeimCRPPOOL } from '../../../constants/tokenAddresses'
import useBalance from '../../../hooks/useBalance'

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
  getArrayTokens: () => void
}

const InputHeim = ({
  typeAction,
  redeem,
  amountHeim,
  setAmountHeim,
  getArrayTokens
}: IInputHeimProps) => {
  const [balanceToken, setBalanceToken] = React.useState<BigNumber>(new BigNumber(0))
  const { getBalanceToken } = useBalance()

  React.useEffect(() => {
    (async () => {
      const balance = await getBalanceToken(HeimCRPPOOL)
      setBalanceToken(balance)
    })()
  }, [])

  const handleSetTotalBalance = () => {
    setAmountHeim(balanceToken)
  }
  
  return (
    <InputHeimContainer inputHeim>
      <PayWith inputHeim>
        <Span>{typeAction}</Span>
        <Symbol>HEIM</Symbol>
        <SpanLight>Balance: {balanceToken.toString() === '0' ? '0.000000' : BNtoDecimal(balanceToken, new BigNumber(18), 6)}</SpanLight>
      </PayWith>
      <ImgArrowLong 
        style={{ backgroundColor: '#030102', marginTop: '54px', padding: '0 24px 16px' }} 
        src={`assets/arrow-long-${redeem ? 'down' : 'up'}.svg`} 
        alt="" 
      />
      <Amount inputHeim>
        <Span>Total</Span>
        <Input
          type="number"
          placeholder="0"
          step="any"
          min="0"
          onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
            const target = e.target as HTMLInputElement
            // don't allow negative numbers
            if (e.key === '-') {
              e.preventDefault()
            }
            // Blink bug makes the value come empty if pressing the decimal symbol that is not that of the current locale
            else if (e.key === '.' || e.key === ',') {
              // first time value will be ok, if pressing twice it zeroes, we ignore those
              if (target.value.length > 0 && target.value.search(/[,.]/) === -1) {
                target.dataset.lastvalue = target.value
              }
            }
            else if (e.key === 'Backspace' || e.key === 'Delete') {
              target.dataset.lastvalue = '0'
            }
          }}
          onChange={
            (e: React.ChangeEvent<HTMLInputElement>) => {
              getArrayTokens()
              let { value } = e.target

              if (value.length === 0) {
                value = e.target.dataset.lastvalue as string
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
