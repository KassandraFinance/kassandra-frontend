/* eslint-disable prettier/prettier */
import React from 'react'
import Image from 'next/image'

import { TokenDetails } from '../../store/modules/poolTokens/types'

import arrow from '../../../public/assets/arrow-select.svg'
import none from '../../../public/assets/coming-soon.svg'

import * as S from './styles'

interface ISelectInputTokensProps {
  poolTokensArray: TokenDetails[];
  setSwapInAddress: React.Dispatch<React.SetStateAction<string>>;
  title: string;
}

const SelectInputTokens = ({
  poolTokensArray,
  setSwapInAddress,
  title
}: ISelectInputTokensProps) => {
  const [tokenSelected, setTokenSelected] = React.useState<TokenDetails | undefined>(poolTokensArray[0])
  const [openOptions, setOpenOptions] = React.useState<boolean>(false)

  React.useEffect(() => {
    if (tokenSelected?.address) {
      setSwapInAddress(tokenSelected?.address)
    }
  }, [tokenSelected])

  React.useEffect(() => {
    setTokenSelected(poolTokensArray[0])
  }, [title])

  return (
    <S.SelectToken openOptions={openOptions}>
      <S.Selected
        openOptions={openOptions}
        onClick={() => setOpenOptions(!openOptions)}
      >
        <div className="img" id="img-token-selected">
          <Image
            src={tokenSelected?.image || none}
            alt={`${tokenSelected?.symbol}-image`}
            width={22}
            height={22}
          />
        </div>
        {tokenSelected?.symbol}
        <div id="arrow-down">
          <Image src={arrow} alt="arrow"  />
        </div>
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
