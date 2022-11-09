import styled from 'styled-components'
import theme from '../../../styles/theme'

export const ChangeAllocationsContainer = styled.section`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-left: 6rem;
  padding-right: 6rem;
  gap: 9rem;

  @media (max-width: 960px) {
    flex-direction: column;
    align-items: center;
    gap: 6rem;
  }

  @media (max-width: 500px) {
    padding-right: 2rem;
    padding-left: 2rem;
  }
`

export const DescriptionContainer = styled.div`
  width: 100%;

  @media (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  > span {
    color: #26dbdb;
    font-weight: ${theme.font.weight.normal};
    font-size: ${theme.font.sizes.font12};
    letter-spacing: 0.3em;

    @media (max-width: 1000px) {
      font-size: ${theme.font.sizes.font14};
      text-align: center;
    }

    @media (max-width: 500px) {
      text-align: left;
    }
  }

  > h1 {
    margin-top: 1.6rem;

    color: #ffffff;
    font-weight: ${theme.font.weight.bold};
    font-size: ${theme.font.sizes.font32};

    @media (max-width: 1000px) {
      text-align: center;
    }

    @media (max-width: 500px) {
      text-align: left;
      font-size: ${theme.font.sizes.font24};
    }
  }

  > p {
    margin-top: 2.4rem;

    @media (max-width: 1000px) {
      text-align: center;
    }

    @media (max-width: 500px) {
      text-align: left;
    }
  }
`

export const GridContainer = styled.div`
  position: relative;
  width: 100%;

  @media (max-width: 1000px) {
    width: 46rem;
  }

  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
  }

  > span {
    position: absolute;
    top: -1rem;
    z-index: -1;

    @media (max-width: 500px) {
      width: 40rem;
    }

    @media (max-width: 400px) {
      width: 30rem;
    }
  }
`

export const TokenContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50rem;
  gap: 3rem;

  @media (max-width: 530px) {
    align-items: center;
    width: 40rem;
    gap: 2rem;
  }

  @media (max-width: 400px) {
    width: 30rem;
    gap: 1.5rem;
  }

  @media (max-width: 340px) {
    width: 25rem;
  }
`

interface IChangeButtonProps {
  isActiveHand: boolean;
}

// prettier-ignore
export const ChangeButtonContent = styled.div<IChangeButtonProps>`
  position: relative;

  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-top: 2.5rem;

  button {
    padding: 2rem 4rem;

    color: #fcfcfc;
    font-weight: ${theme.font.weight.light};
    font-size: ${theme.font.sizes.font20};

    background-color:  transparent;
    border: 0.1rem solid #ffffff;
    border-radius: 0.7rem;

    ${props => (props.isActiveHand ? `animation: ButtonAni 0.4s ease` : ``)};

    @media (max-width: 768px) {
      padding: 1.6rem 3.2rem;
    }

    @media (max-width: 500px) {
      font-size: ${theme.font.sizes.font14};
      padding: 1.3rem 3rem;
    }

    @media (max-width: 400px) {
      padding: 1rem 2.4rem;
    }

    @keyframes ButtonAni {
      0% {
        transform: scale(1);
      }
      50% {
        color: #000;
        background-color:  #fcfcfc;
        transform: scale(0.9);
      }
      100% {
        transform: scale(1);
      }
    }
  }

  > span {
    position: absolute;
    bottom: -3rem;
    right: 0;

    @media (max-width: 500px) {
      right: 1rem;

      img {
        width: 3.8rem;
        height: 3.5rem;
      }
    }

    ${props => (props.isActiveHand ? `animation: imgAni 0.2s ease` : ``)};

    @keyframes imgAni {
      0% {
        transform: scale(1.2);
      }
      100% {
        transform: scale(0.8);
      }
    }
  }

  p {
    height: 4rem;
    padding-top: 2rem;
    margin-right: 2rem;

    color: #2CE878;
    font-weight: ${theme.font.weight.medium};
    font-size: ${theme.font.sizes.font24};
    text-align: center;

    opacity: 0;

    @media (max-width: 500px) {
      font-size: ${theme.font.sizes.font18};
      padding-top: 1rem;
    }

    ${props =>
      props.isActiveHand
        ? `animation: numberTranslate 2s both; animation-delay: 1s;`
        : ``}

    @keyframes numberTranslate {
      0% {
        transform: translateX(0);
        opacity: 1
      }
      70% {
        opacity: 0;
      }
      100% {
        transform: translateX(-10rem);
      }
    }
  }
`

export const ChangeButton = styled.div`
  display: flex;
  justify-content: flex-end;
`

interface ITokenProps {
  TokenValue?: number;
  TokenColor?: string;
}

// prettier-ignore
export const BarContainer = styled.div<ITokenProps>`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 1rem;

  transition: all 600ms ease;

  > span {
    min-width: 2.4rem;
    min-height: 2.4rem;
  }

  img {
    width: 2.4rem;
    height: 2.4rem;

    @media (max-width: 500px) {
      width: 1.8rem;
      height: 1.8rem;
    }
  }

  p {
    color: #ffffff;
    font-weight: ${theme.font.weight.medium};
    font-size: ${theme.font.sizes.font20};
    text-align: end;

    opacity: 0;

    animation: number 1s forwards;
    animation-delay: 1.3s;

    ::after {
      content: '%';
    }

    @media (max-width: 500px) {
      font-size: ${theme.font.sizes.font14};
    }

    @keyframes number {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
  }

  @keyframes fade-in-text {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`

// prettier-ignore
export const TokenBar = styled.div<ITokenProps>`
  height: 2rem;
  width: calc(${props => props.TokenValue}rem/2);

  background-color: ${props => props.TokenColor};
  border-radius: 0.3rem;

  transition: all 2s ease;
  animation: show-bar-one 1.2s 0.1s;
  -webkit-animation: show-bar-one 1.2s 0.1s;
  -moz-animation: show-bar-one 1.2s 0.1s;

  @media (max-width: 500px) {
    width: calc(${props => props.TokenValue}rem/2.5);
    height: 1.6rem;
  }
  @media (max-width: 400px) {
    width: calc(${props => props.TokenValue}rem/3.5);
  }
  @media (max-width: 350px) {
    width: ${props => props.TokenValue};
    height: 1.6rem;
  }

  @keyframes show-bar-one {
    0% {
      width: 0;
    }
    100% {
      width: ${props => props.TokenValue}rem;
    }
  }
`
