import styled, { css } from 'styled-components'
import theme from '../../../../styles/theme'

interface CardProps {
  isLastCard: boolean;
}

// eslint-disable-next-line prettier/prettier
export const TeamCardContainer = styled.div<CardProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 22rem;
  margin-top: 6.4rem;

  text-align: center;

  @media (max-width: 780px) {
    width: 17rem;
  }

  img {
    max-width: 100%;
  }

  @media (max-width: 920px) {
    ${({ isLastCard }) =>
      isLastCard
        ? css`
            grid-row: 5 / 6;
            grid-column: 1 / 3;
          `
        : ''}
  }
`

export const Image = styled.div`
  max-width: 100%;
  margin-bottom: 1.6rem;

  background-color: #2d292f;
  border-radius: 50%;

  overflow: hidden;

  img {
    width: 8.8rem;
    height: 8.8rem;
    padding: 0.1rem;
    border-radius: 50%;
  }
`

export const Name = styled.p`
  margin-bottom: 0.4rem;

  font-size: ${theme.font.sizes.font20};
  font-weight: ${theme.font.weight.medium};
  line-height: 110%;
  letter-spacing: 0.04rem;

  @media (max-width: 470px) {
    font-size: ${theme.font.sizes.font14};
  }
`

export const Role = styled.p`
  margin-bottom: 1.6rem;

  color: #c4c4c4;
  font-size: ${theme.font.sizes.font12};
  font-weight: ${theme.font.weight.normal};
  line-height: 110%;
  letter-spacing: 0.04rem;

  @media (max-width: 470px) {
    font-size: 0.8rem;
  }
`

export const CardDivider = styled.div`
  width: 6.6rem;
  margin: 0 auto;

  border-width: 0.01rem;
  border-style: solid;
  border-color: #ffffff24;
`

// export const Social = styled.div`
//   width: 11.6rem;
//   margin-top: 1.6rem;

//   display: flex;
//   flex-direction: row;
//   align-items: center;
//   justify-content: space-around;
// `

// export const SocialIcon = styled.div`
//   width: 2.8rem;
//   height: 2.8rem;

//   background-color: rgba(33, 20, 38, 0.33);
//   border-width: 0.1rem;
//   border-style: solid;
//   border-color: rgba(255, 255, 255, 0.05);
//   border-radius: 50%;

//   img {
//     padding: 0.5rem;
//   }
// `
export const Social = styled.div`
  width: 11.6rem;
  margin-top: 1.6rem;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`

export const SocialIcon = styled.div`
  width: 2.8rem;
  height: 2.8rem;

  background-color: rgba(33, 20, 38, 0.33);
  border: 0.1rem solid rgba(255, 255, 255, 0.04);
  border-radius: 50%;

  transition: all 0.6s;

  img {
    padding: 0.5rem;
  }

  :hover {
    border: 0.1rem solid rgba(255, 255, 255, 0.16);
  }
`
