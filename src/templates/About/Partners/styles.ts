import styled from 'styled-components'
import theme from '../../../styles/theme'

export const Container = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 94.3rem;
  margin: 0 auto 9rem;
  border-bottom: 1px solid #ffffff24;
  @media (max-width: 960px) {
    padding: 0 3.2rem;
  }
  @media (max-width: 820px) {
    flex-direction: column;
  }
`

export const TitleAndIcon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: left;
  margin-bottom: 2.6rem;
`
export const Title = styled.h1`
  font-size: ${theme.font.sizes.font40};
  font-weight: ${theme.font.weight.black};
  line-height: 114%;
  color: #ffffff;
  @media (max-width: 810px) {
    font-size: ${theme.font.sizes.font32};
  }
  @media (max-width: 375px) {
    font-size: ${theme.font.sizes.font24};
  }
`

export const Icon = styled.div`
  background: #ffffff0a;
  border-radius: 100%;
  width: 4.7rem;
  height: 4.4rem;
  display: flex;
  margin-bottom: 2.4rem;
  position: relative;
  @media (max-width: 810px) {
    margin-bottom: 1.6rem;
  }

  img {
    position: absolute;
    left: 45%;
    top: 50%;
    transform: translate(-50%, -50%);
    min-height: 2.4rem;
    max-width: 100%;
  }
`
export const Partners = styled.div`
  width: 55.3rem;
  display: flex;
  justify-content: space-evenly;
  padding-top: 5rem;
  @media (max-width: 960px) {
    margin-bottom: 1.6rem;
    max-width: 100%;
    justify-content: end;
    padding-top: 2rem;
    img {
      margin-right: 4rem;
    }
  }
  @media (max-width: 820px) {
    justify-content: center;
  }
  img {
    max-width: 100%;
    max-height: 2.9rem;
  }
`
