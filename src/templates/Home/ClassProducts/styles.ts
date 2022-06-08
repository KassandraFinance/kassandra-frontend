import styled from 'styled-components'
import theme from '../../../styles/theme'

export const ClassProducts = styled.section`
  display: flex;
  flex-direction: column;

  max-width: 96rem;
  margin: 0 auto 16rem;
  padding: 0 3.2rem;

  text-align: center;

  @media (max-width: 800px) {
    margin: 0 auto 8rem;
  }

  h1 {
    margin-bottom: ${theme.spacings.space24};

    font-size: ${theme.font.sizes.font48};
    font-weight: ${theme.font.weight.black};
    line-height: 104%;

    @media (max-width: 960px) {
      font-size: ${theme.font.sizes.font36};
      text-align: left;
    }
    @media (max-width: 760px) {
      font-size: ${theme.font.sizes.font32};
      text-align: center;
    }
    @media (max-width: 450px) {
      font-size: ${theme.font.sizes.font24};
    }
  }

  p {
    width: 100%;

    color: #f79640;
    font-size: ${theme.font.sizes.font14};
    font-weight: ${theme.font.weight.normal};
    letter-spacing: 0.4rem;
  }
  span {
    max-width: 75rem;
    margin: 0 auto;

    font-size: ${theme.font.sizes.font16};
    font-weight: ${theme.font.weight.light};
    line-height: 155%;

    @media (max-width: 960px) {
      text-align: left;
    }

    @media (max-width: 760px) {
      text-align: center;
    }
  }
`
export const Divider = styled.div`
  width: 9.8rem;
  margin: 2.5rem auto;

  border: 1px solid #f79640;
`
export const Image = styled.div`
  margin-top: 15rem;
  text-align: center;

  @media (max-width: 768px) {
    margin-top: 8rem;
  }

  @media (max-width: 680px) {
    display: none;
  }
`

export const ImageDescription = styled.div`
  display: flex;
  justify-content: space-between;

  margin-top: 3.5rem;

  @media (max-width: 680px) {
    display: none;
  }
`

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 16rem;

  color: ${theme.colors.snow};

  p {
    margin-bottom: 1.2rem;

    font-size: ${theme.font.sizes.font12};
    letter-spacing: 0.4rem;
  }

  span {
    font-size: ${theme.font.sizes.font14};
    font-weight: ${theme.font.weight.light};
    line-height: 122.5%;

    @media (max-width: 768px) {
      text-align: center;
    }
  }

  @media (max-width: 960px) {
    max-width: 13rem;

    span {
      font-size: ${theme.font.sizes.font12};
    }
  }
`
