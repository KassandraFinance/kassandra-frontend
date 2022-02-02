import styled from 'styled-components'
import theme from '../../../styles/theme'

export const Container = styled.section`
  border-bottom: 1px solid #ffffff24;

  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: 0 auto 9rem;
  max-width: 96rem;
  @media (max-width: 960px) {
    display: flex;
    flex-direction: column;

    margin: 0 3.2rem 9rem;
  }
  @media (max-width: 820px) {
    flex-direction: column;
  }
  @media (max-width: 390px) {
    margin: 0 1.6rem 9rem;
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
  color: #ffffff;
  font-size: ${theme.font.sizes.font40};
  font-weight: ${theme.font.weight.black};
  line-height: 114%;
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

  display: flex;
  position: relative;

  margin-bottom: 2.4rem;
  width: 4.7rem;
  height: 4.4rem;
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
  width: 70rem;
  padding-top: 5rem;

  display: flex;
  justify-content: space-between;
  @media (max-width: 960px) {
    margin-bottom: 1.6rem;
    max-width: 100%;
    justify-content: end;
    padding-top: 2rem;
    img {
    }
  }
  @media (max-width: 820px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  img {
    margin: 0 auto 2.4rem;
    max-width: 100%;
    max-height: 2.8rem;
  }
  a {
    text-decoration: none;
    display: flex;
    align-items: center;
    @media (max-width: 960px) {
      margin-right: 4rem;
    }
    @media (max-width: 810px) {
      margin: 0 auto 2.4rem;
    }
    @media (max-width: 400px) {
      max-width: 90px;
    }
    span {
      color: ${theme.colors.grayDisabled};
      font-size: 2rem;
      vertical-align: middle;
      font-weight: 550;
      text-decoration: none;

      margin-left: 0.5rem;
      @media (max-width: 400px) {
        font-size: 1.3rem;
      }
    }
  }
`
