import styled, { css } from 'styled-components'
import theme from '../../../styles/theme'

export const Wrapper = styled.section`
  max-width: 112rem;
  padding: 0 1.6rem;
  margin: 4rem auto;
  margin-top: 20rem;

  position: relative;

  .connector {
    position: absolute;
    align-self: center;
    justify-self: center;

    width: 80rem;
    height: 37.4rem;

    margin-right: 7rem;

    @media (max-width: 1060px) {
      width: 60rem;
    }

    @media (max-width: 850px) {
      width: 56rem;
      margin-right: 6rem;
    }

    @media (max-width: 800px) {
      width: 52rem;
      margin-right: 5rem;
    }

    @media (max-width: 750px) {
      display: none;
    }
  }
`

export const TextWrapper = styled.div`
  p {
    margin-top: 2.4rem;

    line-height: 2.4rem;
    text-align: center;

    @media (max-width: 576px) {
      text-align: left;
    }
  }

  h2 {
    text-align: center;
    @media (max-width: 576px) {
      text-align: left;
    }
  }
`

export const Container = styled.div`
  position: relative;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 3.4rem;

  margin-top: 8rem;

  @media (max-width: 750px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0;
  }
`

export const Vr = styled.div`
  width: 0.2rem;
  height: 4rem;

  background: linear-gradient(0deg, #ffbf00 -0.02%, #e843c4 99.99%);

  @media (min-width: 750px) {
    display: none;
  }
`

export const CommunityTenet = styled.div`
  display: flex;
  gap: 1.6rem;
  align-items: center;

  height: 14.5rem;
  padding: 2.4rem;

  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.04) 0%,
    rgba(255, 255, 255, 0) 100%
  );
  backdrop-filter: blur(1.86rem);
  border-radius: 1.7rem;

  &:nth-child(2) {
    grid-column: 1 / 3;
    grid-row: 1 / 2;
  }

  &:nth-child(4) {
    grid-column: 2 / 4;
    grid-row: 2 / 3;
  }

  &:nth-child(6) {
    grid-column: 3 / 5;
    grid-row: 3 / 4;
    margin-left: -5rem;

    @media (max-width: 750px) {
      margin-left: 0;
    }
  }

  @media (max-width: 870px) {
    height: auto;
  }
`

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 7.2rem;
  height: 7.2rem;

  background: rgba(252, 252, 252, 0.05);
  border-radius: 50%;

  @media (max-width: 870px) {
    width: 4.5rem;
    height: 4.5rem;

    img {
      width: 3rem;
      height: 3rem;
    }
  }
`

interface Caption {
  color?: 'amber' | 'cyan' | 'magenta'
}

// eslint-disable-next-line prettier/prettier
export const Caption = styled.span<Caption>`
  ${({ theme, color }) => css`
    color: ${!!color && theme.colors[color]}};

    font-size: 1.4rem;
    font-weight: ${theme.font.weight.normal};
    line-height: 1.6rem;
    letter-spacing: 0.22rem;
    text-transform: uppercase;

    @media (max-width: 576px) {
      font-size: 1.2rem;
    }
  `}
`

export const CommunityTenetText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;

  flex: 1;

  p {
    text-align: left;

    @media (max-width: 870px) {
      font-size: 1.2rem;
      line-height: 1.6rem;
    }
  }
`

export const SubHeading = styled.h3`
  color: #ffffff;
  font-size: ${theme.font.sizes.font20};
  font-weight: ${theme.font.weight.medium};
  line-height: 110%;
  letter-spacing: 0.02rem;

  @media (max-width: 870px) {
    font-size: 1.6rem;
    line-height: 1.8rem;
  }
`

export const SubDescription = styled.h3`
  color: #ffffff;
  font-size: ${theme.font.sizes.font16};
  font-weight: ${theme.font.weight.light};
  line-height: 2rem;

  @media (max-width: 576px) {
    font-size: ${theme.font.sizes.font14};
  }
`
