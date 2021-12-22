import styled from 'styled-components'
import theme from '../../../styles/theme'

export const Wrapper = styled.section`
  max-width: 114rem;
  margin: 0 auto;
  margin-bottom: 15rem;
  @media (max-width: 920px) {
    overflow-x: hidden;
    padding: 0 3.2rem;
  }
`
export const TitleAndIcon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Icon = styled.div`
  background: #ffffff0a;
  border-radius: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 4.7rem;
  height: 4.4rem;
  margin-bottom: 2.4rem;
  img {
    max-width: 100%;
  }
`
export const Title = styled.h1`
  font-size: ${theme.font.sizes.font40};
  font-weight: ${theme.font.weight.bold};
  line-height: 114%;
  @media (max-width: 920px) {
    font-size: ${theme.font.sizes.font32};
  }
`
export const Divider = styled.div`
  background: linear-gradient(99.25deg, #e843c4 0%, #ffbf00 100%, #ffbf00 100%);

  max-width: 10rem;
  height: 0.3rem;
  margin: 2.4rem auto 9.7rem;
  @media (max-width: 920px) {
    margin: 2.4rem auto 5.6rem;
  }
`
export const GridCard = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 32px;
  justify-items: center;
  @media (max-width: 1160px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`
