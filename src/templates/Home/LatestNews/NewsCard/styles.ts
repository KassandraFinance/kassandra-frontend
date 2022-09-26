import styled from 'styled-components'
import theme from '../../../../styles/theme'

export const NewsCard = styled.article`
  min-width: 39.2rem;
  max-width: 39.2rem;
  margin: 0 auto;

  border: 0.1rem solid rgba(255, 255, 255, 0.08);
  border-radius: 1rem;
  overflow: hidden;

  @media (max-width: 840px) {
    min-width: 32.8rem;
    max-width: 32.8rem;
  }
`

export const NewsCardHeader = styled.div`
  width: 39rem;
  height: 19.6rem;

  background: #d9d9d9;

  img {
    width: 39.2rem;
    height: auto;
  }

  @media (max-width: 840px) {
    width: 32.6rem;
    height: 16.4rem;

    img {
      width: 32.8rem;
    }
  }
`

export const NewsCardBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2.4rem;

  height: 26.8rem;

  padding: 2.4rem;

  background-color: rgba(255, 255, 255, 0.05);
`

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`

export const TitleWrapper = styled.div``

export const Title = styled.h6`
  margin-bottom: 0.4rem;

  color: ${theme.colors.snow};
  font-weight: ${theme.font.weight.medium};
  font-size: ${theme.font.sizes.font20};
  line-height: 110%;
  letter-spacing: 0.02em;

  @media (max-width: 576px) {
    font-size: ${theme.font.sizes.font16};
    line-height: ${theme.font.sizes.font18};
  }
`

export const PubDate = styled.span`
  display: block;

  color: ${theme.colors.white};
  font-weight: ${theme.font.weight.light};
  font-size: ${theme.font.sizes.font12};
  line-height: 100%;
`

export const Text = styled.p`
  height: 5.4rem;

  color: ${theme.colors.snow};
  font-weight: ${theme.font.weight.light};
  font-size: ${theme.font.sizes.font14};
  line-height: ${theme.font.sizes.font18};

  @media (max-width: 576px) {
    font-size: ${theme.font.sizes.font12};
    line-height: ${theme.font.sizes.font14};
    letter-spacing: 0.05em;
  }
`

export const BtnWrapper = styled.a`
  text-decoration: none;
  button {
    border-color: ${theme.colors.white};

    &:hover,
    &:focus {
      background-color: ${theme.colors.white};
      outline: ${theme.colors.white};
    }
  }
`
