import React from 'react'
import BigNumber from 'bn.js'
import { useSelector, RootStateOrAny } from 'react-redux'

import { HeimCRPPOOL } from '../../../constants/tokenAddresses'
import { BNtoDecimal } from '../../../utils/numerals'

import useBalance from '../../../hooks/useBalance'
import useConnect from '../../../hooks/useConnect'

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
  swapOutSelected: string
  setSwapOutSelected: React.Dispatch<React.SetStateAction<string>>
}

const InputDefault = ({ 
  title,
  investHeim,
  amountSwapOut,
  swapOutSelected,
  setSwapOutSelected
}: IInputDefaultProps) => {
  const [balanceToken, setBalanceToken] = React.useState<BigNumber>(new BigNumber(0))

  const { poolTokens } = useSelector((state: RootStateOrAny) => state)
  const { getBalanceToken } = useBalance()
  const { userWalletAddress } = useConnect()

  async function handleBalance() {
    if (title === 'Invest') {
      const balance = await getBalanceToken(HeimCRPPOOL)
      setBalanceToken(balance)
    } else {
      const balance = await getBalanceToken(swapOutSelected)
      setBalanceToken(balance)
    }
  }

  React.useEffect(() => {
    handleBalance()
  }, [userWalletAddress, title, swapOutSelected])

  return (
    <InputDefaultContainer>
      <Info>
        <Span>Swap to (estimative)</Span>
        {title === 'Invest' ?
            <Symbol>HEIM</Symbol>
          : 
          <Select 
            defaultValue={swapOutSelected} 
            onChange={(e: any) => setSwapOutSelected(e.target.value)}
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
