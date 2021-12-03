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
        <div className="img" id="img-token-selected">
          <Image
            src={tokenDetails?.image || none}
            alt={`${tokenDetails?.symbol}-image`}
            width={22}
            height={22}
          />
        </div>
        {tokenDetails?.symbol}
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
