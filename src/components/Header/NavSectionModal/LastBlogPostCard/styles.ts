import styled, { css } from 'styled-components'

export const CardBlogPost = styled.div`
  ${({ theme }) => css`
    position: relative;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 18.6rem;
    width: 35rem;

    margin-top: 1.6rem;
    padding: 2rem 2.4rem;
    border-radius: 4px;

    background-image: url('/assets/images/header-blog-background.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;

    overflow: hidden;

    p {
      color: ${theme.colors.white};
      font-size: ${theme.font.sizes.font32};
      font-weight: ${theme.font.weight.bold};
      line-height: 3.4rem;
      max-width: 25rem;

      background-image: linear-gradient(90deg, #e843c4 0%, #ffbf00 100%);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  `}
`
