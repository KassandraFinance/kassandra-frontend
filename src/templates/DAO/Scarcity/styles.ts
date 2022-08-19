import styled from 'styled-components'
import theme from '../../../styles/theme'

export const Wrapper = styled.section`
  margin-top: 10rem;
  padding-left: 3.2rem;
  padding-right: 3.2rem;

  @media (max-width: 576px) {
    padding-left: 1.6rem;
    padding-right: 1.6rem;
  }
`

export const ImageWrapper = styled.div`
  position: relative;
  margin: 0 auto;

  width: 100%;
  max-width: 120rem;

  height: 70rem;

  @media (max-width: 800px) {
    margin-top: 4rem;
    max-width: 83rem;
    height: 45rem;
  }

  @media (max-width: 550px) {
    margin-top: 1.8rem;
    max-width: 42.5rem;
    height: 30rem;
  }
`

export const ScarcityTitle = styled.h1`
  color: #ffffff;
  font-weight: ${theme.font.weight.bold};
  font-size: ${theme.font.sizes.font32};
  text-align: center;

  @media (max-width: 576px) {
    text-align: left;
    font-size: ${theme.font.sizes.font24};
    line-height: 3.2rem;
  }
`

export const ScarcityDescription = styled.p`
  margin-top: 2.4rem;

  color: #ffffff;
  font-weight: ${theme.font.weight.normal};
  font-size: ${theme.font.sizes.font16};
  line-height: 2.4rem;
  text-align: center;

  @media (max-width: 576px) {
    font-size: ${theme.font.sizes.font14};
    font-weight: ${theme.font.weight.light};
    text-align: left;
  }
`
