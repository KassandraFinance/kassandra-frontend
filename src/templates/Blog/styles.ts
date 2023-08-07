import { SectionTitle } from '@/components/SectionTitle/styles'
import {
  Input,
  InputBtn,
  InputTextWrapper,
  InputWrapper,
  SubscribeInput
} from '@/components/SubscribeInput/styles'
import { device } from '@/styles/theme'

import styled, { css } from 'styled-components'

export const Background = styled.div`
  position: absolute;
  top: var(--header-height);
  left: 0px;
  right: 0px;
  bottom: 0px;

  z-index: -1;

  background-image: url('/assets/images/backgroundBlog/background.svg');
  background-size: cover;

  @media ${device.tabletLarge} {
    display: none;
  }
`

export const Blog = styled.div`
  ${() => css`
    position: relative;

    max-width: 114rem;
    margin: 0 auto;
  `}
`

export const Hero = styled.section`
  ${() => css`
    position: relative;

    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-inline: 2.4rem;
    padding-top: 20rem;

    @media (max-width: 992px) {
      justify-content: center;
    }
  `}
`

export const HeroBackground = styled.div`
  position: absolute;
  top: -50rem;
  left: 0;
  right: 0;

  max-width: 192rem;
  height: 149rem;

  background-image: url('./assets/images/backgroundHome/background-quase-footer.png');
  background-repeat: no-repeat;
  background-size: auto;
  background-position: center center;

  z-index: -10;

  @media (max-width: 992px) {
    top: -80rem;
    height: 203.6rem;

    background-image: url('./assets/images/backgroundHome/background-quase-footer-90deg.png');
  }
`

export const HeroContent = styled.div`
  ${() => css`
    display: flex;
    flex-direction: column;
    gap: 2.4rem;

    @media (max-width: 992px) {
      align-items: center;

      ${SectionTitle} {
        justify-content: center;
      }

      ${SubscribeInput} {
        display: flex;
        justify-content: center;
        width: 100%;
      }

      ${InputWrapper}, ${InputTextWrapper}, ${Input}, ${InputBtn} {
        height: 5.2rem;
      }
    }
  `}
`

export const TextWrapper = styled.div`
  ${() => css`
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
    max-width: 60rem;

    @media (max-width: 992px) {
      align-items: center;

      text-align: center;
    }
  `}
`

export const ImageWrapper = styled.div`
  ${() => css`
    @media (max-width: 992px) {
      position: absolute;
      top: 30%;

      z-index: -1;
      opacity: 0.4;
    }
  `}
`
