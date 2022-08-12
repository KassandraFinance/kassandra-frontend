import styled from 'styled-components'
import theme from '../../../styles/theme'

export const InstitutionalContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20rem;
`

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 1.6rem;
  padding-right: 1.6rem;

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
    line-height: 3.2rem;

    @media (max-width: 576px) {
      font-size: ${theme.font.sizes.font24};
    }
  }

  p {
    color: #ffffff;
    font-size: ${theme.font.sizes.font16};
    font-weight: ${theme.font.weight.light};
    text-align: center;
    line-height: 2.4rem;

    @media (max-width: 576px) {
      font-size: ${theme.font.sizes.font14};
    }
  }

  @media (max-width: 500px) {
    align-items: flex-start;

    h2,
    h3,
    p {
      text-align: start;
    }
  }
`

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3rem;
`

export const ImageContent = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 2rem;

  img {
    margin-top: 8rem;
    margin-bottom: -2rem;

    width: 72rem;
    height: 17.3rem;

    @media (max-width: 992px) {
      width: 54.8rem;
      height: 17.3rem;
      margin-bottom: -3rem;
    }

    @media (max-width: 820px) {
      width: 46.5rem;
      margin-bottom: -4rem;
    }

    @media (max-width: 690px) {
      display: none;
    }
  }
`

export const InstitutionalCardList = styled.div`
  display: flex;
  gap: 7rem;
  padding-left: 1.6rem;
  padding-right: 1.6rem;

  @media (max-width: 992px) {
    gap: 4rem;
  }
  @media (max-width: 820px) {
    gap: 3rem;
  }
  @media (max-width: 690px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
  }
`

export const InstitutionalCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;

  @media (max-width: 992px) {
    margin-top: -1rem;
  }

  span {
    display: flex;
    justify-content: center;
  }

  @media (max-width: 690px) {
    margin-top: 0;

    > span {
      display: none;
    }
  }
`

export const InstitutionalCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 28.5rem;
  padding: 2.4rem;

  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.04) 0%,
    rgba(255, 255, 255, 0) 100%
  );
  border-radius: 1.8rem;

  @media (max-width: 992px) {
    width: 23rem;
    padding: 1rem;
  }
  @media (max-width: 820px) {
    width: 20rem;
    margin-bottom: 3.4rem;
  }
  @media (max-width: 690px) {
    width: 25rem;
  }

  > span {
    margin-bottom: 2.4rem;

    color: #ffffff;
    font-size: ${theme.font.sizes.font20};
    font-weight: ${theme.font.weight.medium};
    letter-spacing: 0.02em;

    @media (max-width: 992px) {
      font-size: ${theme.font.sizes.font14};
    }

    @media (max-width: 690px) {
      font-size: ${theme.font.sizes.font16};
      margin-bottom: 1rem;
    }
  }

  p {
    margin-bottom: 1.6rem;

    color: #ffffff;
    font-size: ${theme.font.sizes.font16};
    font-weight: ${theme.font.weight.light};
    line-height: 2.4rem;
    text-align: center;

    @media (max-width: 992px) {
      font-size: ${theme.font.sizes.font12};
    }
    @media (max-width: 690px) {
      font-size: ${theme.font.sizes.font14};
    }
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
  @media (max-width: 690px) {
    font-size: ${theme.font.sizes.font14};
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

    img {
      width: 3.8rem;
      height: 2.8rem;
    }
  }
`
