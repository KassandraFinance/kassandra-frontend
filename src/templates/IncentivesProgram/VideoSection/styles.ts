import { FadeInContainer } from '@/components/Animations/FadeIn/styles'
import styled, { css } from 'styled-components'

export const VideoSection = styled.div`
  ${() => css`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    ${FadeInContainer} {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  `}
`

export const VideoSectionTitle = styled.h3`
  ${() => css`
    text-align: center;
  `}
`

export const VideoWrapper = styled.div`
  ${() => css`
    margin-block: 8rem;

    display: flex;
    align-items: center;
    justify-content: center;

    background: linear-gradient(93.84deg, #e843c4 0.12%, #0c3ddc 100%);
    border-radius: 0.4rem;
    padding: 0.1rem;

    width: 1028px;
    height: 536px;

    @media (max-width: 1032px) {
      width: 596px;
      height: 308px;
    }
    @media (max-width: 600px) {
      width: 382px;
      height: 256px;
    }
    @media (max-width: 410px) {
      width: 320px;
      height: 200px;
    }

    iframe {
      border-radius: 0.4rem;
      border: none;

      width: 100%;
      height: 100%;
    }
  `}
`

export const TextWrapper = styled.div`
  ${() => css`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    text-align: center;

    p {
      margin-top: 1.6rem;
      max-width: 59rem;
    }
  `}
`
