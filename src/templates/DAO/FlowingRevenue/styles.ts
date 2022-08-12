import styled from 'styled-components'

export const Wrapper = styled.section`
  max-width: 141.5rem;
  width: 100%;

  margin-top: 10rem;
  margin-bottom: 17rem;
  margin-right: auto;
  margin-left: auto;

  padding: 0 1.6rem;
`

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  max-width: 51.2rem;
  margin: 0 auto;

  text-align: center;

  @media (max-width: 560px) {
    font-size: 2.4rem;
    text-align: left;
  }

  p {
    @media (max-width: 560px) {
      font-size: 1.4rem;
      text-align: left;
    }
  }
`

export const Hero = styled.div`
  position: relative;
  height: 60.5rem;
  background-image: url('/assets/images/background-flowing-revenue.png');
  background-position: center;
  background-size: contain;
  max-width: 114rem;
  background-repeat: no-repeat;
  margin: 0 auto;

  display: flex;
  align-items: flex-end;
  justify-content: center;

  @media (max-width: 840px) {
    height: 43.5rem;
  }

  @media (max-width: 680px) {
    background-size: cover;
  }

  @media (max-width: 560px) {
    display: none;
  }
`

export const HeroMobile = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  @media (min-width: 560px) {
    display: none;
  }
`

export const Card = styled.div`
  display: flex;
  align-items: center;
  gap: 1.1rem;

  max-width: 28.1rem;
  margin: 0 auto;

  padding: 1.3rem 2.4rem;

  background: rgba(255, 255, 255, 0.05);
  border: 0.464448px solid rgba(252, 252, 252, 0.15);
  backdrop-filter: blur(6.96672px);

  border-radius: 0.46rem;
`

export const CardText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;

  h5 {
    font-size: 1.67rem;
    line-height: 1.49rem;
    font-weight: 500;
  }

  p {
    font-size: 1.11rem;
    font-weight: 300;
    line-height: 1.49rem;
  }
`

export const ImageWrapper = styled.div`
  position: relative;

  width: 100%;
  height: 20rem;
  max-width: 29.1rem;

  margin: 0 auto;
  margin-top: 6rem;
`

export const Data = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  margin-bottom: 2.4rem;

  text-align: center;

  @media (max-width: 840px) {
    gap: 0.4rem;
  }

  @media (max-width: 560px) {
    gap: 0.8rem;
  }

  span {
    font-size: 7.2rem;
    line-height: 7.2rem;
    font-weight: ${({ theme }) => theme.font.weight.light};

    @media (max-width: 840px) {
      font-size: 4.19rem;
      line-height: 4.19rem;
    }

    @media (max-width: 560px) {
      font-size: 4rem;
      line-height: 3.34rem;
    }

    strong {
      font-weight: ${({ theme }) => theme.font.weight.black};
    }
  }

  small {
    color: ${({ theme }) => theme.colors.amber};
    font-size: 1.6rem;
    line-height: 1.6rem;
    letter-spacing: 0.22em;
    text-transform: uppercase;

    @media (max-width: 840px) {
      font-size: 0.93rem;
      line-height: 0.93rem;
    }

    @media (max-width: 560px) {
      font-size: 1rem;
      line-height: 1rem;
    }
  }
`
