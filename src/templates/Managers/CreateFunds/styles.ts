import styled from 'styled-components'
import theme from '../../../styles/theme'

export const CreateFundContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 6rem;
  padding-left: 6rem;
  padding-right: 6rem;

  > h1 {
    color: #ffffff;
    font-weight: ${theme.font.weight.black};
    font-size: ${theme.font.sizes.font48};
    text-align: center;

    @media (max-width: 1050px) {
      text-align: center;
    }

    @media (max-width: 500px) {
      width: 100%;
      font-weight: 700;
      font-size: ${theme.font.sizes.font24};
      text-align: left;
    }
  }

  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 500px) {
    padding-right: 2rem;
    padding-left: 2rem;
    gap: 2rem;
  }
`

export const CreateFundContent = styled.div`
  position: relative;

  display: flex;
  align-items: center;
  gap: 4rem;

  @media (max-width: 1050px) {
    flex-direction: column;
    justify-content: center;
  }

  @media (max-width: 700px) {
    gap: 1rem;
  }
`

interface INumberButtonProps {
  isActiveImage?: boolean;
}

// prettier-ignore
export const DescriptionContainer = styled.div<INumberButtonProps>`
  width: 42rem;

  @media (max-width: 1050px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
  @media (max-width: 500px) {
    align-items: flex-start;
  }

  > span {
    color: #26dbdb;
    font-weight: ${theme.font.weight.normal};
    font-size: ${theme.font.sizes.font12};
    letter-spacing: 0.3em;
    text-align: center;

    @media (max-width: 1050px) {
      font-size: ${theme.font.sizes.font14};
    }

    @media (max-width: 500px) {
      width: 100%;
      text-align: left;
      font-size: ${theme.font.sizes.font12};
    }
  }

  > h2 {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    height: 7.5rem;
    width: 42rem;
    margin-top: 1.6rem;

    color: #ffffff;
    font-weight: ${theme.font.weight.bold};
    font-size: ${theme.font.sizes.font32};


    animation: ${props =>
      props.isActiveButton
      ? `assetAnim ease 1s both;`
      : `assetAnimm ease 0.4s both;
      `};

    @media (max-width: 1050px) {
      justify-content: center;
      /* width: 100%; */
      text-align: center;
    }

    @media (max-width: 500px) {
      font-size: ${theme.font.sizes.font24};
      align-items: flex-start;
      justify-content: flex-start;
      height: 6rem;
      width: 32rem;
      text-align: left;
    }
  }

  > p {
    /* height: 6rem; */
    width: 42rem;
    height: 8rem;
    margin-top: 1.2rem;
    display: flex;
    align-items: center;
    justify-content: center;

    color: #ffffff;
    font-weight: ${theme.font.weight.light};
    font-size: ${theme.font.sizes.font16};

    animation: ${props =>
      props.isActiveButton
        ? `assetAnim ease 1s both;`
        : `assetAnimm ease 0.4s both;
      `};

    @media (max-width: 1050px) {
      text-align: center;
    }

    @media (max-width: 500px) {
      width: 100%;
      margin-top: 0;

      font-size: ${theme.font.sizes.font14};
      line-height: 2.4rem;
      text-align: left;
    }
  }

  @keyframes assetAnim {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes assetAnimm {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`
export const NumberButtonsContainer = styled.div`
  display: flex;
  gap: 1.2rem;
  margin-bottom: 2.4rem;

  @media (max-width: 1050px) {
    position: absolute;
    bottom: -8rem;

    justify-content: center;
    width: 100%;
  }

  @media (max-width: 430px) {
    position: static;
    margin-top: 4rem;
    order: 4;
  }
`
interface INumberButtonProps {
  isActiveButton?: boolean;
}

// prettier-ignore
export const NumberButton = styled.button<INumberButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 3.2rem;
  width: 3.2rem;
  padding-top: 0.2rem;

  color: ${props => (props.isActiveButton ? `#FFFFFF` : `#8F8F8F`)};
  font-size: ${theme.font.sizes.font20};
  font-weight:${props =>
    props.isActiveButton ? theme.font.weight.medium : theme.font.weight.light};

  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 50%;
  border: ${props =>
    props.isActiveButton
      ? `0.1rem solid rgba(255, 255, 255, 0.08)`
      : `0.1rem solid transparent`};

  cursor: pointer;
`

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 2.4rem;

  @media (max-width: 1050px) {
    width: 100%;
    justify-content: center;
  }

  a {
    margin-right: 3rem;

    @media (max-width: 430px) {
      width: 100%;
      margin-right: 0;
      margin-top: 1rem;
    }
  }
`

export const ButtonsContent = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 430px) {
    position: absolute;
    bottom: -6rem;
  }

  > button {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 4.4rem;
    height: 4.4rem;

    border: 0.1rem solid transparent;
    background-color: #ffffff10;
    border-radius: 50%;

    cursor: pointer;

    :hover {
      border: 0.1rem solid rgba(255, 255, 255, 0.08);
    }
  }

  #arrowRight {
    img {
      transform: rotate(180deg);
    }
  }
`
interface IisActiveImageProps {
  isActiveImage: boolean;
}

// prettier-ignore
export const CreateFundsImageContainer = styled.div<IisActiveImageProps>`
  position: relative;

  display: flex;
  height: 52rem;
  width: 52rem;


  @media (max-width: 600px) {
    width: 100%;
    height: 40rem;
  }

  @media (max-width: 430px) {
    width: 30rem;
    height: 30rem;
  }

  img {
    width: 50rem;
    height: 50rem;

    @media (max-width: 600px) {
      width: 45rem;
      height: 45rem;
    }

    @media (max-width: 500px) {
      width: 40rem;
      height: 40rem;
    }

    @media (max-width: 430px) {
      width: 30rem;
      height: 30rem;
    }
  }

  #ImageFront {
    position: absolute;
    top: 0;
  }
/*
  #asdasd {
    ${props =>
      props.isActiveImage
        ? `
        animation: assetAnim ease 3s both;
        -webkit-animation: assetAnim ease 3s both;
        // animation-timing-function: cubic-bezier(0.03, 0.7, 0.43, 1.3);

        @keyframes assetAnim {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
    `
        : `
        animation: assetAnimm ease 0.4s both;
        -webkit-animation: assetAnimm ease 0.4s both;
        // animation-timing-function: cubic-bezier(0.03, 0.7, 0.43, 1.3);
        @keyframes assetAnimm {
          0% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
          100% {
            opacity: 0;
          }
        }
    `}
  } */
`
// interface IisActiveImageProps {
//   isActiveImage: boolean;
// }
// // eslint-disable-next-line prettier/prettier
// export const ImageTest = styled.span<IisActiveImageProps>`
//   /* img {} */

// `

// interface ICreateFundsImageProps {
//   isActiveImage: boolean;
// }

// // eslint-disable-next-line prettier/prettier
// export const CreateFundsImageContent = styled.div`
//   /* display: ${props => (props.isActiveImage ? `flex` : `hidden`)}; */

//   img {
//     /* opacity: ${props => (props.isActiveImage ? `1` : `0`)}; */

//     animation: assetAnim ease 4s both;
//     -webkit-animation: assetAnim ease 4s both;
//     /* animation-timing-function: cubic-bezier(0.03, 0.7, 0.43, 1.3); */
//     /* animation-duration: 4s; */

//     @keyframes assetAnim {
//       0% {
//         opacity: 0;
//       }
//       100% {
//         opacity: 1;
//       }
//     }
//   }
// `

// export const test = styled.div``
// export const test = styled.div``
// export const test = styled.div``
// export const test = styled.div``
// export const test = styled.div``
// export const test = styled.div``
// export const test = styled.div``
