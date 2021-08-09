import React from 'react'
import BigNumber from 'bn.js'
import { useSelector, RootStateOrAny } from 'react-redux'
import { BNtoDecimal } from '../../../utils/numerals'

import { 
  InputDefaultContainer, 
  Info, 
  Span, 
  Select,
  Symbol, 
  Input,
  AmountDefault,
  LineDefault
} from './styles'

interface IInputDefaultProps {
  investHeim: any
  title: string
  amountSwapOut: BigNumber
  receiveTokenSelected: string
  setReceiveTokenSelected: React.Dispatch<React.SetStateAction<string>>
}

const InputDefault = ({ 
  title,
  amountSwapOut,
  receiveTokenSelected,
  setReceiveTokenSelected
}: IInputDefaultProps) => {
  const { poolTokens } = useSelector((state: RootStateOrAny) => state)
  

  return (
    <InputDefaultContainer>
      <Info>
        <Span>Swap to (estimative)</Span>
        {title === 'Invest' ?
          <Symbol>HEIM</Symbol>
          :  
          <Select defaultValue={receiveTokenSelected} onChange={(e: any) => setReceiveTokenSelected(e.target.value)}>
            <option value="">- - - -</option>
            {poolTokens.map((token: { address: string, symbol: string}) =>
              <option key={token.address} value={token?.address}>{token?.symbol}</option>
            )}
          </Select>
        }
      </Info>
      <AmountDefault>
        <Span>Amount</Span>
        <Input type="number" placeholder="0" value={BNtoDecimal(amountSwapOut, new BigNumber(18), 6)} readOnly />
      </AmountDefault>
      <LineDefault />  
    </InputDefaultContainer>
  )
}

export default InputDefault
