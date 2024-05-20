import styled, { css } from 'styled-components'

export const PartnersMarquee = styled.h2`
  ${({ theme }) => css`
    > div {
      border-top: 1px solid ${theme.colors.gray};
      margin-top: 10rem;
      background-color: linear-gradient(
        180deg,
        rgba(255, 255, 255, 0.04) 0%,
        rgba(255, 255, 255, 0) 100%
      );
    }

    img {
      margin-left: 8rem;
    }

    .balancer {
      height: 30px;
    }
  `}
`
