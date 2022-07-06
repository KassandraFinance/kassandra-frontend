import React from 'react'
import Image from 'next/image'

import { ITokenDetails } from '../../context/PoolTokensContext'
import { useAppSelector } from '../../store/hooks'

import arrow from '../../../public/assets/utilities/arrow-select-down.svg'
import none from '../../../public/assets/icons/coming-soon.svg'

import * as S from './styles'

interface ISelectInputProps {
  poolTokens: ITokenDetails[];
  setSwapAddress: React.Dispatch<React.SetStateAction<string>>;
  tokenDetails: ITokenDetails;
}

const SelectInputDefault = ({
  poolTokens,
  setSwapAddress,
  tokenDetails
}: ISelectInputProps) => {
  const [openOptions, setOpenOptions] = React.useState<boolean>(false)

  const { poolImages } = useAppSelector(state => state)

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
          <Image src={arrow} alt="" />
        </div>
      </S.Selected>
      {openOptions && (
        <>
          <S.Backdrop onClick={() => setOpenOptions(false)} />
          <S.OptionsContent>
            {poolTokens &&
              poolTokens.map((token: ITokenDetails) => (
                <S.Option
                  key={token.symbol}
                  onClick={() => {
                    setOpenOptions(false)
                    setSwapAddress(token.address)
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

export default SelectInputDefault
