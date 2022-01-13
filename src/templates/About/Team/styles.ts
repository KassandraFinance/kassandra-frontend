import { media } from 'styled-media-query';
import styled from 'styled-components'
import theme from '../../../styles/theme'

export const Container = styled.div`
  max-width: 69.7rem;
  margin: 0 auto;
  padding: 0 3.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
  font-weight: ${theme.font.weight.bold};
  line-height: 114%;

  @media (max-width: 810px) {
    font-size: ${theme.font.sizes.font32};
  }
  @media (max-width: 375px) {
    font-size: ${theme.font.sizes.font24};
  }
`
export const Divider = styled.div`
  max-width: 10rem;
  height: 0.3rem;
  background: linear-gradient(99.25deg, #e843c4 0%, #ffbf00 100%, #ffbf00 100%);
  margin: 2.4rem auto 4rem;
`

export const Grid = styled.div`
  background-image: url('assets/team-background.svg');
  background-clip: content-box;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  display: grid;
  max-width: 70rem;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-gap: 2.4rem;
  margin: 2.4rem auto 15rem;
  @media (max-width: 920px) {
    background-image: none;
    margin: 2.4rem auto 7rem;
    padding: 0 3.2rem;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    background-image: none;
  }
  @media (max-width: 520px) {
    margin: 2.4rem auto 4rem;
  }
  img {
    display: flex;
    justify-self: center;
  }
`
export const Image = styled.div`
  max-width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  @media (max-width: 920px) {
    display: none;
  }
  img {
    width: 20rem;
  }
`
