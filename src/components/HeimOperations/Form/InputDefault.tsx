import React from 'react'
import BigNumber from 'bn.js'
import { useSelector, RootStateOrAny } from 'react-redux'

import { HeimCRPPOOL } from '../../../constants/tokenAddresses'
import { BNtoDecimal } from '../../../utils/numerals'

import useBalance from '../../../hooks/useBalance'

import { 
  InputDefaultContainer, 
  Info, 
  Span, 
  SpanLight,
  Select,
  Symbol, 
  Input,
  AmountDefault,
  LineDefault
} from './styles'

interface IInputDefaultProps {
  title: string
  investHeim: BigNumber
  amountSwapOut: BigNumber
  receiveTokenSelected: string
  setReceiveTokenSelected: React.Dispatch<React.SetStateAction<string>>
}

const InputDefault = ({ 
  title,
  investHeim,
  amountSwapOut,
  receiveTokenSelected,
  setReceiveTokenSelected
}: IInputDefaultProps) => {
  const [balanceToken, setBalanceToken] = React.useState<BigNumber>(new BigNumber(0))

  const { poolTokens, userWalletAddress } = useSelector((state: RootStateOrAny) => state)
  const { getBalanceToken } = useBalance()

  async function handleBalance() {
    if (title === 'Invest') {
      const balance = await getBalanceToken(HeimCRPPOOL)
      setBalanceToken(balance)
    } else {
      const balance = await getBalanceToken(receiveTokenSelected)
      setBalanceToken(balance)
    }
  }

  React.useEffect(() => {
    handleBalance()
  }, [userWalletAddress, title, receiveTokenSelected])

  return (
    <InputDefaultContainer>
      <Info>
        <Span>Swap to (estimative)</Span>
        {title === 'Invest' ?
            <Symbol>HEIM</Symbol>
          : 
          <Select 
            defaultValue={receiveTokenSelected} 
            onChange={(e: any) => setReceiveTokenSelected(e.target.value)}
          >
            <option value="">- - - -</option>
            {poolTokens.map((token: { address: string, symbol: string}) =>
              <option key={token.address} value={token?.address}>{token?.symbol}</option>
            )}
          </Select>
        }
        <SpanLight>
          Balance: {balanceToken.toString() === '0' ? 
          '0.000000' 
          : 
          BNtoDecimal(balanceToken, new BigNumber(18), 6)}
        </SpanLight>
      </Info>
      <AmountDefault>
        <Span>Amount</Span>
        <Input 
          type="number" 
          placeholder="0" 
          value={BNtoDecimal(title === 'Invest' ? 
            investHeim 
            : 
            amountSwapOut, new BigNumber(18), 6)} 
          readOnly 
        />
      </AmountDefault>
      <LineDefault />  
    </InputDefaultContainer>
  )
}

export default InputDefault
