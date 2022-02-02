import styled from 'styled-components'
import theme from '../../../styles/theme'

export const Container = styled.section`
  border-bottom: 1px solid #ffffff24;

  display: grid;
  grid-template-columns: 2fr 5fr;
  align-items: center;

  margin: 0 auto 9rem;
  max-width: 96rem;

  @media (max-width: 960px) {
    margin: 0 3rem;
  }
  @media (max-width: 660px) {
    grid-template-columns: 1fr;
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

  margin-bottom: 2.4rem;
  width: 4.7rem;
  height: 4.4rem;

  position: relative;

  @media (max-width: 810px) {
    margin-bottom: 1.6rem;
  }

  img {
    min-height: 2.4rem;
    max-width: 100%;

    left: 45%;
    top: 50%;
    position: absolute;

    transform: translate(-50%, -50%);
  }
`
export const Partners = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: ${theme.spacings.space24};
  justify-items: center;

  @media (max-width: 960px) {
    gap: ${theme.spacings.space16};
  }

  @media (max-width: 660px) {
    gap: ${theme.spacings.space24};
    padding-bottom: 4rem;
  }

  @media (max-width: 540px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 420px) {
    gap: ${theme.spacings.space32};
  }

  img {
    margin: 0 auto 2.4rem;
    max-width: 100%;
    max-height: 2.8rem;

    @media (max-width: 700px) {
      height: 2.4rem;
    }
  }
  a {
    text-decoration: none;

    display: flex;
    align-items: center;
    padding: 2px;

    span {
      color: ${theme.colors.grayDisabled};
      font-size: 2rem;
      font-weight: 550;
      text-decoration: none;
      vertical-align: middle;

      margin-left: 0.5rem;
    }
  }
`
