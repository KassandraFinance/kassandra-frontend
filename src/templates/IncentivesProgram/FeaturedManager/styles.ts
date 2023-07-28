import styled, { css } from 'styled-components'

export const FeaturedManager = styled.div`
  ${() => css`
    position: relative;
    width: 100%;

    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    margin-top: 16rem;
    padding-inline: 2.4rem;

    @media (max-width: 576px) {
      padding-inline: 0;
    }
  `}
`

export const Line = styled.div`
  ${() => css`
    position: absolute;
    top: -29.8rem;
    right: 50%;

    height: 36rem;
    width: 0.5rem;

    z-index: -1;
  `}
`

export const FeaturedManagerTitleWrapper = styled.div`
  ${() => css`
    position: relative;

    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    width: 81.6rem;
    padding-block: 1.6rem;
    gap: 1.6rem;

    border-radius: 0.8rem;
    text-align: center;

    @media (max-width: 992px) {
      width: 100%;
      padding-inline: 1.6rem;
    }

    p {
      max-width: 70rem;
    }

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;

      border-radius: 0.8rem;
      border: 0.2rem solid transparent;
      background: linear-gradient(93.84deg, #e843c4 0.12%, #0c3ddc 100%)
        border-box;

      -webkit-mask: linear-gradient(#fff 0 0) padding-box,
        linear-gradient(#fff 0 0);
      -webkit-mask-composite: destination-out;
      mask-composite: exclude;
    }
  `}
`

export const FeaturedCardContainer = styled.div`
  ${() => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8rem;

    .get-started {
      width: 18.2rem;
      height: 4rem;
      margin-top: 8rem;
    }
  `}
`

export const FeaturedCardWrapper = styled.div`
  ${() => css`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3.2rem;
    margin-top: 8rem;
    max-width: 124rem;

    text-align: center;

    @media (max-width: 992px) {
      grid-template-columns: 1fr;
    }
  `}
`
