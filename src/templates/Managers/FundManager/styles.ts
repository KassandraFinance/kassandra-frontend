import styled from 'styled-components'
import theme from '../../../styles/theme'

export const FundManagerContainer = styled.section`
  display: flex;
  flex-direction: column;
  padding-left: 6rem;
  padding-right: 6rem;

  @media (max-width: 500px) {
    margin-top: -10rem;
    padding-right: 2rem;
    padding-left: 2rem;
  }
`

export const TittleWrapper = styled.div`
  > h1 {
    color: #ffffff;
    font-weight: ${theme.font.weight.black};
    font-size: ${theme.font.sizes.font48};
    text-align: center;

    @media (max-width: 650px) {
      font-weight: ${theme.font.weight.bold};
      font-size: ${theme.font.sizes.font32};
    }

    @media (max-width: 450px) {
      font-weight: ${theme.font.weight.bold};
      font-size: ${theme.font.sizes.font24};
    }
  }

  > p {
    margin-top: 2.4rem;
    margin-bottom: 8rem;

    color: #ffffff;
    font-weight: ${theme.font.weight.light};
    font-size: ${theme.font.sizes.font16};
    text-align: center;

    @media (max-width: 650px) {
      letter-spacing: 0.05em;
      line-height: 2.4rem;
    }

    @media (max-width: 450px) {
      font-size: ${theme.font.sizes.font16};
    }
  }
`

export const ImageContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const ImageDescription = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.2rem;
  width: 100%;
  margin-top: 5.6rem;

  color: #ffffff;
  font-weight: ${theme.font.weight.light};
  font-size: ${theme.font.sizes.font16};
  letter-spacing: 0.4em;
  text-align: center;

  @media (max-width: 900px) {
    font-size: ${theme.font.sizes.font14};
  }

  @media (max-width: 800px) {
    font-size: ${theme.font.sizes.font12};
    letter-spacing: 0.2em;
  }

  @media (max-width: 600px) {
    margin-top: 3.6rem;

    font-size: 1rem;
    letter-spacing: 0.1em;
  }

  P {
    margin-right: 2rem;
    @media (max-width: 1050px) {
      margin-right: 0;
    }
    @media (max-width: 800px) {
      margin-right: 1.6rem;
    }
    @media (max-width: 700px) {
      margin-right: 0;
    }
    @media (max-width: 600px) {
      margin-right: 1rem;
    }
    @media (max-width: 510px) {
      margin-right: 0;
    }
  }

  span {
    height: 0.1rem;
    width: 9rem;

    background-color: rgba(255, 255, 255, 0.3);

    @media (max-width: 768px) {
      width: 5rem;
    }
  }
`
