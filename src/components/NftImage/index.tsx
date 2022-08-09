import React from 'react'

import * as S from './styles'

interface INftImageProps {
  NftUrl: string;
  imageSize: 'medium' | 'large' | 'small';
  openModalNFT?: React.Dispatch<React.SetStateAction<boolean>>;
}

const NftImage = ({ NftUrl, imageSize, openModalNFT }: INftImageProps) => {
  if (imageSize === 'small') {
    return (
      <S.NftImageContainer imageSize={imageSize}>
        <>
          <img src={NftUrl} alt="User NFT image" height="32" width="32" />
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <clipPath id="nftImageSmall">
              <path
                d="M0.654757 18.4417C-0.218252 16.9308 -0.218252 15.0692 0.654757 13.5583L6.21117 3.94171C7.08417 2.43078 8.69757 1.5 10.4436 1.5L21.5564 1.5C23.3024 1.5 24.9158 2.43077 25.7888 3.94171L31.3452 13.5583C32.2183 15.0692 32.2182 16.9308 31.3452 18.4417L25.7888 28.0583C24.9158 29.5692 23.3024 30.5 21.5564 30.5H10.4436C8.69757 30.5 7.08417 29.5692 6.21117 28.0583L0.654757 18.4417Z"
                fill="#C4C4C4"
              />
            </clipPath>
          </svg>
        </>
      </S.NftImageContainer>
    )
  }

  return (
    <>
      <S.NftImageContainer imageSize={imageSize}>
        {imageSize === 'medium' ? (
          <span onClick={() => openModalNFT && openModalNFT(true)}>
            <img src={NftUrl} alt="User NFT image" height="72" width="72" />
            <svg
              width="72"
              height="72"
              viewBox="0 0 96 88"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <clipPath id="nftImageMedium">
                <path
                  d="M1.96427 50.8643C-0.654758 46.328 -0.654758 40.739 1.96427 36.2027L18.6335 7.33077C21.2525 2.79448 26.0927 1.68624e-06 31.3308 1.45727e-06L64.6692 0C69.9073 -2.28955e-07 74.7475 2.79447 77.3665 7.33077L94.0357 36.2027C96.6548 40.739 96.6547 46.328 94.0357 50.8643L77.3665 79.7362C74.7475 84.2725 69.9073 87.067 64.6692 87.067H31.3308C26.0927 87.067 21.2525 84.2725 18.6335 79.7362L1.96427 50.8643Z"
                  fill="#C4C4C4"
                />
              </clipPath>
            </svg>
          </span>
        ) : (
          <>
            <img src={NftUrl} alt="User NFT image" height="125" width="125" />

            <svg
              width="124"
              height="112"
              viewBox="0 0 124 112"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <clipPath id="nftImageLarge">
                <path
                  d="M3.29212 65.4081C-0.0635171 59.596 -0.0635191 52.4352 3.29212 46.623L24.6496 9.63084C28.0052 3.81871 34.2067 0.238283 40.9179 0.238283L83.6328 0.238281C90.3441 0.238281 96.5456 3.8187 99.9012 9.63083L121.259 46.623C124.614 52.4351 124.614 59.596 121.259 65.4081L99.9012 102.4C96.5456 108.212 90.3441 111.793 83.6328 111.793L40.9179 111.793C34.2067 111.793 28.0052 108.212 24.6496 102.4L3.29212 65.4081Z"
                  fill="#C4C4C4"
                />
              </clipPath>
            </svg>
          </>
        )}
      </S.NftImageContainer>
    </>
  )
}

export default NftImage
