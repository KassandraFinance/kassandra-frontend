import styled from 'styled-components'
import theme from '../../../styles/theme'

export const Container = styled.section`
  max-width: 75rem;
  margin: 0 auto 15rem;
  padding: 0 3.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Icon = styled.div`
  background: #ffffff0a;
  border-radius: 100%;
  width: 4.7rem;
  height: 4.4rem;
  align-items: center;
  display: flex;
  justify-content: center;
  margin-bottom: 2.4rem;
  img {
    max-width: 100%;
  }
`
export const Title = styled.h1`
  font-size: ${theme.font.sizes.font40};
  font-weight: ${theme.font.weight.black};
  line-height: 114%;
  @media (max-width: 810px) {
    font-size: ${theme.font.sizes.font32};
  }
  @media (max-width: 570px) {
    font-size: ${theme.font.sizes.font24};
  }
`

export const Divider = styled.div`
  max-width: 10rem;
  height: 0.3rem;
  background: linear-gradient(99.25deg, #e843c4 0%, #ffbf00 100%, #ffbf00 100%);
  margin: 3.2rem auto;
`
