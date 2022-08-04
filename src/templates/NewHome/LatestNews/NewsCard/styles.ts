import styled from 'styled-components'
import theme from '../../../../styles/theme'

export const NewsCard = styled.article`
  min-width: 39.2rem;
  max-width: 39.2rem;

  border: 0.1rem solid rgba(255, 255, 255, 0.08);
  border-radius: 1rem;

  @media (max-width: 576px) {
    min-width: 32.8rem;
    max-width: 39.2rem;
  }
`

export const NewsCardHeader = styled.div`
  height: 17.2rem;

  background: #d9d9d9;
  border-radius: 1rem 1rem 0rem 0rem;
`

export const NewsCardBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  padding: 2.4rem;

  background: rgba(255, 255, 255, 0.05);
  border-radius: 0rem 0rem 1rem 1rem;
`

export const Title = styled.h6`
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

export const Text = styled.p`
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

export const BtnWrapper = styled.div`
  button {
    border-color: #fff;

    &:hover {
      background-color: #fff;
    }
  }
`
