import React from 'react'
import { useSelector, RootStateOrAny } from 'react-redux'

import { TokenDetails } from '../../store/modules/poolTokens/types'

import * as S from './styles'

interface ISelectTokenProps {
  poolTokens: TokenDetails[]
  poolTokensArray?: TokenDetails[] | undefined
  setSwapOutAddress: React.Dispatch<React.SetStateAction<string>>
}

const SelectToken = ({ poolTokens, poolTokensArray, setSwapOutAddress }: ISelectTokenProps) => {
  const [tokenSelected, setTokenSelected] = React.useState<TokenDetails | undefined>(poolTokensArray[0])
  const [openOptions, setOpenOptions] = React.useState<boolean>(false)
  
  // React.useEffect(() => {
  //   setTokenSelected(poolTokensArray[0])
  // }, [poolTokensArray])

  return (
    <S.SelectToken openOptions={openOptions}>
      <S.Selected 
        openOptions={openOptions} 
        onClick={() => setOpenOptions(!openOptions)}
      >
        <img src={tokenSelected?.image || poolTokens[0].image} alt="" />
        {tokenSelected?.symbol || poolTokens[0].symbol}
        <img src="assets/arrow-select.svg" alt="" />
      </S.Selected>
      {openOptions &&
        <>
          <S.Backdrop onClick={() => setOpenOptions(false)} />
          <S.OptionsContent>
            {poolTokensArray && poolTokensArray.map((token: TokenDetails) => 
              <S.Option onClick={() => {
                setTokenSelected(token)
                setOpenOptions(false)
                setSwapOutAddress(token.address)
                }
              }>
                <img src={token.image} alt="" />
                {token.symbol}
              </S.Option>
            )}
          </S.OptionsContent>
        </>
      }
    </S.SelectToken>
  )
}

export default SelectToken
