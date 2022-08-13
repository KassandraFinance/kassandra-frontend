import styled from 'styled-components'

export const Wrapper = styled.section`
  max-width: 102.8rem;
  width: 100%;

  margin-left: auto;
  margin-right: auto;
  margin-top: 23rem;
  margin-bottom: 31.5rem;

  padding: 0 1.6rem;
`

export const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10rem;

  margin-top: 9rem;
`

export const Row1 = styled.div`
  display: flex;
  align-items: center;
  gap: 12rem;

  @media (max-width: 950px) {
    gap: 7rem;
  }

  @media (max-width: 920px) {
    flex-direction: column-reverse;
  }
`

export const KassandraImageWrapper = styled.div`
  position: relative;

  width: 36.2rem;
  height: 30rem;

  @media (max-width: 450px) {
    width: 100%;
  }
`

export const Values = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 6.8rem 6.4rem;
`

export const Value = styled.div`
  h1 {
    margin-top: 0.8rem;

    @media (max-width: 450px) {
      font-size: 1.8rem;
    }
  }

  span {
    @media (max-width: 450px) {
      font-size: 1.2rem;
    }
  }
`

export const Row2 = styled.div`
  display: flex;
  align-items: center;
  gap: 4rem;

  @media (max-width: 840px) {
    flex-direction: column;
  }
`

export const Info = styled.div`
  flex: 1;

  @media (max-width: 840px) {
    text-align: center;
  }

  span {
    color: ${({ theme }) => theme.colors.magenta};

    font-weight: 400;
    font-size: 1.2rem;
    line-height: 1.2rem;
    letter-spacing: 0.3em;
    text-transform: uppercase;
  }

  h3 {
    margin-top: 1.6rem;
    margin-bottom: 2.4rem;

    font-weight: 500;
    font-size: 2.4rem;
    line-height: 110%;
  }

  p {
    font-weight: 300;
    font-size: 1.6rem;
    line-height: 155%;
  }
`

export const PieChartImageWrapper = styled.div`
  position: relative;

  height: 28.7rem;
  width: 59.4rem;

  @media (max-width: 960px) {
    height: 25.7rem;
    width: 52.4rem;
  }

  @media (max-width: 650px) {
    width: 100%;
  }
`

export const Row3 = styled.div`
  display: flex;
  align-items: center;
  gap: 7.8rem;

  @media (max-width: 960px) {
    gap: 5.8rem;
  }

  @media (max-width: 840px) {
    flex-direction: column-reverse;
  }
`

export const BarChartImageWrapper = styled.div`
  position: relative;

  height: 32.8rem;
  width: 55.7rem;

  @media (max-width: 960px) {
    height: 28.7rem;
    width: 52.4rem;
  }

  @media (max-width: 650px) {
    width: 100%;
  }
`
