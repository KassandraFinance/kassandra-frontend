/* eslint-disable prettier/prettier */
import React from 'react'
import Image from 'next/image'
import { useSelector, RootStateOrAny } from 'react-redux'

import { TokenDetails } from '../../store/modules/poolTokens/types'
import { TokenImages } from '../../store/modules/poolImages/types'

import arrow from '../../../public/assets/arrow-select.svg'
import none from '../../../public/assets/coming-soon.svg'

import * as S from './styles'

interface ISelectInputTokensProps {
  poolTokens: TokenDetails[];
  setSwapInAddress: React.Dispatch<React.SetStateAction<string>>;
  tokenDetails: TokenDetails;
}

const SelectInputTokens = ({
  poolTokens,
  setSwapInAddress,
  tokenDetails
}: ISelectInputTokensProps) => {
  const [openOptions, setOpenOptions] = React.useState<boolean>(false)

  const { poolImages }: { poolImages: TokenImages } = useSelector(
    (state: RootStateOrAny) => state
  )

  return (
    <S.SelectToken openOptions={openOptions}>
      <S.Selected
        openOptions={openOptions}
        onClick={() => setOpenOptions(!openOptions)}
      >
        <div className="img">
          <Image
            src={poolImages[tokenDetails?.address] || none}
            alt=""
            width={22}
            height={22}
          />
        </div>
        {tokenDetails?.symbol}
        <div id="arrow-down">
          <Image src={arrow} alt=""  />
        </div>
      </S.Selected>
      {openOptions && (
        <>
          <S.Backdrop onClick={() => setOpenOptions(false)} />
          <S.OptionsContent>
            {poolTokens &&
              poolTokens.map((token: TokenDetails) => (
                <S.Option
                  key={token.symbol}
                  onClick={() => {
                    setSwapInAddress(token.address)
                    setOpenOptions(false)
                  }}
                >
                  <div className="img">
                    <Image
                      src={poolImages[token.address] || none}
                      alt=""
                      width={22}
                      height={22}
                    />
                  </div>
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
