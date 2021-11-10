/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'

import { TokenDetails } from '../../store/modules/poolTokens/types'

import * as S from './styles'

interface ISelectInputDefaultProps {
  poolTokensArray: TokenDetails[];
  setSwapOutAddress: React.Dispatch<React.SetStateAction<string>>;
  title: string;
  swapInAddress: string;
}

const SelectInputDefault = ({
  poolTokensArray,
  setSwapOutAddress,
  swapInAddress
}: ISelectInputDefaultProps) => {
  const [tokenSelected, setTokenSelected] = React.useState<
    TokenDetails | undefined
  >(poolTokensArray[0])
  const [openOptions, setOpenOptions] = React.useState<boolean>(false)

  React.useEffect(() => {
    setTokenSelected(poolTokensArray[0])
  }, [swapInAddress])

  return (
    <S.SelectToken openOptions={openOptions}>
      <S.Selected
        openOptions={openOptions}
        onClick={() => setOpenOptions(!openOptions)}
      >
        <img src={tokenSelected?.image} alt="" />
        {tokenSelected?.symbol}
        <img src="assets/arrow-select.svg" alt="" />
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
                    setOpenOptions(false)
                    setSwapOutAddress(token.address)
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

export default SelectInputDefault
