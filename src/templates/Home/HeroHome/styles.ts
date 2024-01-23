import styled, { css } from 'styled-components'

export const Hero = styled.section`
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: 3.2rem;

  margin-top: 18rem;
  padding-inline: 2.4rem;

  &::after {
    content: '';
    position: absolute;
    bottom: -5rem;
    right: 0;

    height: 24rem;
    width: 100%;

    background: linear-gradient(
      178deg,
      rgba(21, 17, 23, 0) 10.46%,
      #151117 60.19%
    );

    z-index: 10;

    @media (max-width: 576px) {
      bottom: -10rem;
    }
  }

  @media (max-width: 576px) {
    padding-inline: 1.6rem;
  }
`

export const ButtonsWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 2.8rem;

    .btn {
      flex-direction: row-reverse;
    }

    @media (max-width: 576px) {
      flex-direction: column;
      width: 100%;

      .btn {
        width: 100%;
      }

      .btn:last-child {
        color: ${theme.colors.darkPurple};
        background-color: ${theme.colors.snow};
      }
    }
  `}
`

export const ImageWrapper = styled.div`
  ${() => css`
    position: relative;
    margin-top: 8rem;

    img {
      position: relative;
      z-index: 10;
    }
  `}
`
