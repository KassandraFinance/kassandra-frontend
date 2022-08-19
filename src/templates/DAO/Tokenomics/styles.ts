import styled from 'styled-components'
import theme from '../../../styles/theme'

export const Wrapper = styled.section`
  max-width: 102.8rem;
  width: 100%;

  padding-left: 3.6rem;
  padding-right: 3.6rem;
  margin: 0 auto;
  margin-top: 23rem;
  margin-bottom: 31.5rem;

  @media (max-width: 576px) {
    padding-left: 1.6rem;
    padding-right: 1.6rem;
  }
`

export const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (max-width: 576px) {
    align-items: flex-start;
  }

  h2 {
    color: #ffffff;
    font-weight: ${theme.font.weight.bold};
    font-size: ${theme.font.sizes.font48};
    text-align: center;

    @media (max-width: 576px) {
      text-align: left;
      font-size: ${theme.font.sizes.font24};
    }
  }

  P {
    margin-top: 2.4rem;

    color: #ffffff;
    font-weight: ${theme.font.weight.normal};
    font-size: ${theme.font.sizes.font16};
    line-height: 2.4rem;
    text-align: center;

    @media (max-width: 576px) {
      text-align: left;
      font-size: ${theme.font.sizes.font14};
      font-weight: ${theme.font.weight.light};
    }
  }
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 17rem;

  margin-top: 9rem;

  @media (max-width: 576px) {
    gap: 8rem;
  }
`

export const Row1 = styled.div`
  display: flex;
  align-items: center;
  gap: 12rem;

  @media (max-width: 950px) {
    gap: 7rem;
  }

  @media (max-width: 980px) {
    flex-direction: column-reverse;
  }
`

export const KassandraImageWrapper = styled.div`
  position: relative;

  width: 36.2rem;
  height: 30rem;

  @media (max-width: 576px) {
    width: 100%;
  }
`

export const ValuesContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 6.8rem 6.4rem;

  @media (max-width: 576px) {
    width: 100%;
    gap: 3.8rem 3.4rem;
  }
`

export const ValueContent = styled.div`
  p {
    margin-bottom: 0.8rem;

    color: #e843c4;
    font-size: ${theme.font.sizes.font14};
    font-weight: ${theme.font.weight.normal};
    line-height: 1.6rem;
    letter-spacing: 0.22em;
    text-transform: uppercase;

    @media (max-width: 576px) {
      font-size: ${theme.font.sizes.font12};
    }
  }

  span {
    color: #fcfcfc;
    font-size: ${theme.font.sizes.font32};
    font-weight: ${theme.font.weight.medium};
    line-height: 3.2rem;
    letter-spacing: 0.05em;

    @media (max-width: 560px) {
      font-size: ${theme.font.sizes.font18};
    }
  }
`

export const Row2 = styled.div`
  display: flex;
  align-items: center;
  gap: 9rem;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
  @media (max-width: 576px) {
    gap: 3rem;
  }
`

export const Info = styled.div`
  min-width: 36rem;
  flex: 1;

  @media (max-width: 1000px) {
    text-align: center;
  }
  @media (max-width: 576px) {
    min-width: 100%;
    text-align: left;
  }

  span {
    color: #e843c4;
    font-size: ${theme.font.sizes.font12};
    font-weight: ${theme.font.weight.normal};
    line-height: 1.2rem;
    letter-spacing: 0.3em;
    text-transform: uppercase;

    @media (max-width: 450px) {
      font-size: ${theme.font.sizes.font14};
      letter-spacing: 0.4em;
    }
  }

  h3 {
    margin-top: 1.6rem;
    margin-bottom: 2.4rem;

    color: #ffffff;
    font-size: ${theme.font.sizes.font24};
    font-weight: ${theme.font.weight.medium};
    line-height: 110%;

    @media (max-width: 576px) {
      font-weight: ${theme.font.weight.bold};
    }
  }

  p {
    color: #ffffff;
    font-size: ${theme.font.sizes.font16};
    font-weight: ${theme.font.weight.light};
    line-height: 155%;

    @media (max-width: 576px) {
      font-size: ${theme.font.sizes.font14};
    }
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

  @media (max-width: 1000px) {
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
