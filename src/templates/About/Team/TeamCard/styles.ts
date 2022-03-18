import styled, { css } from 'styled-components'
import theme from '../../../../styles/theme'

interface CardProps {
  isLastCard: boolean;
}

export const Card = styled.div<CardProps>`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  text-align: center;

  img {
    max-width: 100%;
  }

  @media (max-width: 920px) {
    ${({isLastCard}) => isLastCard ? css`
      grid-row: 5 / 6;
      grid-column: 1 / 3;
    ` : ""}
  }
`

export const Image = styled.div`
  max-width: 100%;
  margin-bottom: 1.6rem;

  background-color: #2D292F;
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
  font-weight: ${theme.font.weight.bold};
  line-height: 110%;
  letter-spacing: 0.04rem;

  @media (max-width: 470px) {
    font-size: ${theme.font.sizes.font14};
  }
`

export const Role = styled.p`
  margin-bottom: 1.6rem;

  font-size: ${theme.font.sizes.font12};
  font-weight: ${theme.font.weight.normal};
  line-height: 110%;
  letter-spacing: 0.04rem;
  color: #bdbdbd;

  @media (max-width: 470px) {
    font-size: .8rem;
  }
`

export const CardDivider = styled.div`
  width: 6.6rem;
  margin: 0 auto;

  border-width: 0.01rem;
  border-style: solid;
  border-color: #ffffff24;
`

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
  border-width: 0.1rem;
  border-style: solid;
  border-color: rgba(255, 255, 255, 0.05);
  border-radius: 50%;

  img {
    padding: 0.5rem;
  }
`
