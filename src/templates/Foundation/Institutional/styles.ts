import styled from 'styled-components'
import theme from '../../../styles/theme'

export const InstitutionalContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10rem;
`

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    margin-bottom: 1.5rem;

    color: #ffbf00;
    font-size: ${theme.font.sizes.font14};
    font-weight: ${theme.font.weight.normal};
    letter-spacing: 0.4em;
    text-transform: uppercase;
    text-align: center;
  }

  h3 {
    margin-bottom: 2.4rem;

    color: #ffffff;
    font-size: ${theme.font.sizes.font32};
    font-weight: ${theme.font.weight.bold};
    text-align: center;
  }

  p {
    color: #ffffff;
    font-size: ${theme.font.sizes.font16};
    font-weight: ${theme.font.weight.light};
    text-align: center;
  }
`

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 8.4rem;
`

export const ImageContent = styled.div`
  display: flex;
  /* align-items: flex-end; */
  justify-content: center;
  width: 100%;
  margin-right: 0.4rem;
  /* gap: 2rem; */

  img {
    margin-top: 8rem;

    width: 74.5rem;
    height: 17.3rem;

    @media (max-width: 992px) {
      width: 61rem;
      height: 17.3rem;
    }
  }
`

export const InstitutionalCardList = styled.div`
  display: flex;
  gap: 7rem;
`

export const InstitutionalCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
`

export const InstitutionalCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2.4rem;
  width: 28.5rem;

  @media (max-width: 992px) {
    width: 23rem;
    padding: 1rem;
  }
  /* @media (max-width: 768px) {
    width: 20rem;
  }
  @media (max-width: 576px) {
    width: 20rem;
  } */

  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.04) 0%,
    rgba(255, 255, 255, 0) 100%
  );
  border-radius: 1.8rem;

  span {
    margin-bottom: 2.4rem;

    color: #ffffff;
    font-size: ${theme.font.sizes.font20};
    font-weight: ${theme.font.weight.medium};
    letter-spacing: 0.02em;

    @media (max-width: 992px) {
      font-size: ${theme.font.sizes.font14};
    }
  }

  p {
    color: #ffffff;
    font-size: ${theme.font.sizes.font16};
    font-weight: ${theme.font.weight.light};
    line-height: 2.4rem;
    text-align: center;

    @media (max-width: 992px) {
      font-size: ${theme.font.sizes.font12};
    }
  }

  a {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    margin-top: 1.6rem;

    font-family: 'Rubik';
    color: #fcfcfc;
    font-size: ${theme.font.sizes.font16};
    font-weight: ${theme.font.weight.light};
    text-decoration: none;

    cursor: pointer;
  }
`

interface ICardTitleProps {
  color: string;
}
// eslint-disable-next-line prettier/prettier
export const CardTitle = styled.strong<ICardTitleProps>`
  margin-bottom: 1.6rem;

  color: ${props => props.color};
  font-size: ${theme.font.sizes.font14};
  font-weight: ${theme.font.weight.normal};
  letter-spacing: 0.22em;

  @media (max-width: 992px) {
    font-size: 1rem;
  }
`

export const IconContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 7.2rem;
  height: 7.2rem;
  margin-bottom: 1.6rem;

  background: rgba(252, 252, 252, 0.05);
  border-radius: 50%;

  @media (max-width: 992px) {
    width: 5rem;
    height: 5rem;
  }
`

// export const test = styled.div``
// export const test = styled.div``
