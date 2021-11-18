/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'

import { TokenDetails } from '../../store/modules/poolTokens/types'

import * as S from './styles'

interface ISelectInputTokensProps {
  poolTokensArray: TokenDetails[];
  setSwapInAddress: React.Dispatch<React.SetStateAction<string>>;
  tokenDetails: TokenDetails;
}

const SelectInputTokens = ({
  poolTokensArray,
  setSwapInAddress,
  tokenDetails
}: ISelectInputTokensProps) => {
  const [openOptions, setOpenOptions] = React.useState<boolean>(false)

  return (
    <S.SelectToken openOptions={openOptions}>
      <S.Selected
        openOptions={openOptions}
        onClick={() => setOpenOptions(!openOptions)}
      >
        <img src={tokenDetails?.image} alt="" id="img-token-selected" />
        {tokenDetails?.symbol}
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
