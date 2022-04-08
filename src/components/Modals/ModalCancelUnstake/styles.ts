import styled from 'styled-components'
import theme from '../../../styles/theme'

import * as ButtonStyles from '../../Button/styles'

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;

  background-color: rgba(0, 0, 0, 0.7);

  z-index: 20;
`

export const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 50rem;

  background-color: rgba(31, 31, 31, 0.8);
  border: 0.15rem solid #ffffff40;
  border-radius: 1rem;

  z-index: 21;
  @media (max-width: 768px) {
    width: 32.8rem;
  }
`

export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 2.4rem;

  background-color: #1f1f1fb8;
  border-bottom: 0.1rem solid #ffffff40;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;

  @media (max-width: 768px) {
    padding: 1.8rem;
  }
`

export const Attention = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 2.4rem;
    height: 2.4rem;
  }

  p {
    margin-left: 1.6rem;

    font-size: ${theme.font.sizes.font18};
    font-weight: ${theme.font.weight.bold};
    letter-spacing: 0.08rem;
  }
`

export const Close = styled.button`
  padding: 0.2rem;

  color: #fff;
  font-size: ${theme.font.sizes.font20};

  background-color: transparent;
  border: none;

  cursor: pointer;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  /* height: 280px; */

  padding: 2.4rem 0;

  background-color: #1f2937;

  @media (max-width: 768px) {
    padding: 1.6rem;
  }

  p {
    max-width: 35rem;
    margin: 0 0 1.6rem;

    text-align: center;
    font-size: ${theme.font.sizes.font16};
    line-height: 150%;
    font-weight: ${theme.font.weight.light};
    letter-spacing: 0.08rem;

    @media (max-width: 768px) {
      font-size: ${theme.font.sizes.font14};
      line-height: 130%;
    }
  }

  span {
    margin-bottom: 1.2rem;

    font-size: ${theme.font.sizes.font20};
  }
`

export const ButtonContainer = styled.div`
  margin-top: 1.6rem;

  ${ButtonStyles.Wrapper} {
    width: 18.3rem;
    height: 4.4rem;

    font-size: ${theme.font.sizes.font18};

    &:first-child {
      margin-right: 1.2rem;
    }

    @media (max-width: 768px) {
      width: 13.8rem;
    }
  }
`
export const Link = styled.a`
  display: flex;
  max-width: 29rem;
  margin: 1.8rem auto 0;

  text-decoration: none;

  cursor: pointer;

  //media max width 560px
  @media (max-width: 560px) {
    margin: 2.4rem auto 7rem;
  }

  a {
    display: flex;
    justify-items: center;

    text-decoration: none;
    font-size: ${theme.font.sizes.font14};
    font-weight: ${theme.font.weight.light};
    color: ${theme.colors.snow};

    transition: 0.15s;

    svg {
      margin-left: ${theme.spacings.space8};
    }

    &:hover {
      color: ${theme.colors.cyan};

      > svg {
        path {
          stroke: ${theme.colors.cyan};
        }
      }
    }
  }
`
