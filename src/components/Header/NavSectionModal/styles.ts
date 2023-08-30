import styled, { css } from 'styled-components'

interface ICardWrapperProps {
  openCard: boolean
  height: number
}

export const NavSectionModalWrapper = styled.div<ICardWrapperProps>`
  ${() => css`
    position: absolute;
    top: 6rem;
    right: 0;

    display: flex;
    gap: 8rem;
    width: 86.7rem;
    max-height: 0;

    opacity: 0;
    padding: 3.2rem;
    border-radius: 4px;
    border: 0.1rem solid rgba(252, 252, 252, 0.05);
    background: linear-gradient(164.99deg, #1b1d22 19.85%, #333437 116.33%);
    box-shadow: 0px 0px 40px 0px rgba(0, 0, 0, 0.2);

    overflow: hidden;

    transition-duration: 350ms;
    transition-timing-function: ease-in-out;
    transition-property: max-height opacity;

    @media (max-width: 1080px) {
      right: -8rem;
    }

    @media (max-width: 992px) {
      display: none;
    }
  `}

  ${({ openCard, height }) =>
    openCard &&
    css`
      max-height: ${height / 10}rem;
      z-index: 1041;
      opacity: 1;
    `}
`

export const SideRight = styled.div`
  ${() => css`
    display: flex;
    flex-direction: column;
    gap: 2;
  `}
`

export const SideLeft = styled.div`
  ${() => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  `}
`
export const FollowUs = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.cyan};
    font-size: ${theme.font.sizes.font16};
    font-weight: ${theme.font.weight.light};
    line-height: 2.4rem;
  `}
`

export const CardTitleWrapper = styled.div`
  ${({ theme }) => css`
    text-align: start;

    p {
      margin-bottom: 0.8rem;

      font-size: ${theme.font.sizes.font24};
      font-weight: ${theme.font.weight.medium};
    }

    span {
      color: ${theme.colors.grayDisabled};
      font-size: ${theme.font.sizes.font16};
      font-weight: ${theme.font.weight.light};
    }
  `}
`

export const Line = styled.div`
  ${() => css`
    width: 0.2rem;
    background: #ffffff15;
  `}
`

// export const CardBlogPost = styled.div`
//   ${({ theme }) => css`
//     position: relative;

//     display: flex;
//     flex-direction: column;
//     justify-content: space-between;
//     height: 18.6rem;
//     width: 100%;

//     margin-top: 1.6rem;
//     padding: 2rem 2.5rem;
//     border-radius: 4px;

//     background-image: url('/assets/images/header-blog-background.png');
//     background-repeat: no-repeat;
//     background-size: contain;
//     background-position: center center;

//     overflow: hidden;

//     p {
//       width: 25rem;
//       color: ${theme.colors.white};
//       font-size: ${theme.font.sizes.font32};
//       font-weight: ${theme.font.weight.bold};

//       background-image: linear-gradient(90deg, #e843c4 0%, #ffbf00 100%);
//       background-clip: text;
//       -webkit-background-clip: text;
//       -webkit-text-fill-color: transparent;
//     }
//   `}
// `
