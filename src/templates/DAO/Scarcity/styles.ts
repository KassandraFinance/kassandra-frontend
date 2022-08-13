import styled from 'styled-components'

export const Wrapper = styled.section`
  margin-top: 10rem;
  margin-left: 1.6rem;
  margin-right: 1.6rem;

  h2 {
    margin-bottom: 2.4rem;
    text-align: center;

    @media (max-width: 550px) {
      font-size: 2.4rem;
      text-align: left;
    }
  }

  p {
    @media (max-width: 550px) {
      font-size: 1.4rem;
      text-align: left;
    }
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
