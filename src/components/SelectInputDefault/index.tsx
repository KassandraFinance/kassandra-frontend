import React from 'react'
import Image from 'next/image'

import { TokenDetails } from '../../store/modules/poolTokens/types'

import arrow from '../../../public/assets/arrow-select.svg'
import none from '../../../public/assets/coming-soon.svg'

import * as S from './styles'

interface ISelectInputDefaultProps {
  poolTokensArray: TokenDetails[];
  setSwapOutAddress: React.Dispatch<React.SetStateAction<string>>;
  swapInAddress: string;
}

const SelectInputDefault = ({
  poolTokensArray,
  setSwapOutAddress,
  swapInAddress
}: ISelectInputDefaultProps) => {
  // eslint-disable-next-line prettier/prettier
  const [tokenSelected, setTokenSelected] = React.useState<TokenDetails | undefined>(poolTokensArray[0])
  const [openOptions, setOpenOptions] = React.useState<boolean>(false)

  React.useEffect(() => {
    setTokenSelected(poolTokensArray[0])
    setSwapOutAddress(poolTokensArray[0].address)
  }, [swapInAddress])

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
          <Image src={arrow} alt="arrow" />
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
