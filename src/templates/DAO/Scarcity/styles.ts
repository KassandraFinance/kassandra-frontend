import styled from 'styled-components'

export const Wrapper = styled.section`
  margin-top: 10rem;
  padding-left: 3.2rem;
  padding-right: 3.2rem;

  @media (max-width: 576px) {
    padding-left: 1.6rem;
    padding-right: 1.6rem;
  }

  p {
    margin-top: 2.4rem;
    text-align: center;

    @media (max-width: 576px) {
      text-align: left;
    }
  }

  h3 {
    text-align: center;

    @media (max-width: 576px) {
      text-align: left;
    }
  }
`

export const ImageWrapper = styled.div`
  position: relative;
  margin: 0 auto;

  width: 100%;
  max-width: 118.8rem;

  img {
    width: 100%;
  }

  @media (max-width: 800px) {
    margin-top: 4rem;
    max-width: 83rem;
  }

  @media (max-width: 550px) {
    margin-top: 1.8rem;
    max-width: 42.5rem;
  }
`
