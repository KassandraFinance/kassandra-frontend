/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'

import { TokenDetails } from '../../store/modules/poolTokens/types'

import * as S from './styles'

interface ISelectInputTokensProps {
  poolTokensArray: TokenDetails[];
  setSwapInAddress: React.Dispatch<React.SetStateAction<string>>;
  swapOutAddress: string;
}

const SelectInputTokens = ({
  poolTokensArray,
  setSwapInAddress,
  swapOutAddress
}: ISelectInputTokensProps) => {
  const [tokenSelected, setTokenSelected] = React.useState<
    TokenDetails | undefined
  >(poolTokensArray[0])
  const [openOptions, setOpenOptions] = React.useState<boolean>(false)

  React.useEffect(() => {
    if (tokenSelected?.address) {
      setSwapInAddress(tokenSelected?.address)
    }
  }, [tokenSelected])

  React.useEffect(() => {
    setTokenSelected(poolTokensArray[0])
  }, [swapOutAddress])

  return (
    <S.SelectToken openOptions={openOptions}>
      <S.Selected
        openOptions={openOptions}
        onClick={() => setOpenOptions(!openOptions)}
      >
        <img src={tokenSelected?.image} alt="" id="img-token-selected" />
        {tokenSelected?.symbol}
        <img src="assets/arrow-select.svg" alt="" id="arrow-down" />
      </S.Selected>
      {openOptions && (
        <>
          <S.Backdrop onClick={() => setOpenOptions(false)} />
          <S.OptionsContent>
            {poolTokensArray &&
              poolTokensArray.map((token: TokenDetails) => (
                <S.Option
                  key={token.symbol}
                  onClick={() => {
                    setTokenSelected(token)
                    setSwapInAddress(token.address)
                    setOpenOptions(false)
                  }}
                >
                  <img src={token.image} alt="" />
                  {token.symbol}
                </S.Option>
              ))}
          </S.OptionsContent>
        </>
      )}
    </S.SelectToken>
  )
}

export default SelectInputTokens
