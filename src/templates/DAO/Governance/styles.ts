import styled from 'styled-components'
import theme from '../../../styles/theme'

export const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5.6rem;
  max-width: 112rem;

  padding-left: 1.6rem;
  padding-right: 1.6rem;
  margin: 0 auto;
  margin-top: 20rem;
  margin-bottom: 20rem;

  @media (max-width: 1050px) {
    flex-direction: column;
  }
`

export const SeasonTitle = styled.span`
  color: #e843c4;
  font-size: ${theme.font.sizes.font14};
  font-weight: ${theme.font.weight.normal};
  line-height: 1.6rem;
  letter-spacing: 0.22rem;
  text-transform: uppercase;

  @media (max-width: 1050px) {
    display: block;
    text-align: center;
  }

  @media (max-width: 576px) {
    text-align: left;
  }
`

export const GovernanceTitle = styled.h1`
  margin-top: 1.6rem;

  color: #ffffff;
  font-weight: ${theme.font.weight.bold};
  font-size: ${theme.font.sizes.font32};

  @media (max-width: 1050px) {
    text-align: center;
  }

  @media (max-width: 576px) {
    text-align: left;
    font-size: ${theme.font.sizes.font24};
  }
`

export const GovernanceDescription = styled.p`
  margin-top: 2.4rem;

  color: #ffffff;
  font-weight: ${theme.font.weight.light};
  font-size: ${theme.font.sizes.font16};
  line-height: 2.4rem;

  @media (max-width: 1050px) {
    text-align: center;
  }
  @media (max-width: 576px) {
    font-size: ${theme.font.sizes.font14};
    font-weight: ${theme.font.weight.light};
    text-align: left;
  }
`

export const Text = styled.div`
  width: 65rem;

  @media (max-width: 768px) {
    width: 100%;
    padding-left: 2rem;
    padding-right: 2rem;
  }

  h3 {
    margin-top: 1.6rem;
    text-align: left;

    @media (max-width: 1050px) {
      text-align: center;
    }
    @media (max-width: 576px) {
      text-align: left;
    }
  }

  p {
    margin-top: 2.4rem;
    text-align: left;

    @media (max-width: 1050px) {
      text-align: center;
    }
    @media (max-width: 576px) {
      text-align: left;
    }
  }

  #buttonContainer {
    display: flex;
    width: 100%;
  }

  a {
    margin-top: 3.2rem;

    @media (max-width: 1050px) {
      margin: 0 auto;
      margin-top: 3.2rem;
    }

    @media (max-width: 450px) {
      width: 100%;
    }
  }
`

export const Image = styled.div`
  margin: 0 auto;

  img {
    max-width: 54rem;

    @media (max-width: 600px) {
      width: 100%;
    }
  }

  @media (max-width: 550px) {
    width: 100%;
    height: 27rem;
  }
`

export const Button = styled.button`
  padding: 1.5rem 3.2rem;
  background-color: ${({ theme }) => theme.colors.blue};
`
