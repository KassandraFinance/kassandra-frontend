import styled from 'styled-components'
import theme from '../../styles/theme'

export const Title = styled.div`
  @media (max-width: 700px) {
    img {
      width: 18px;
    }
  }

  h1 {
    line-height: ${theme.font.sizes.font32};
    font-size: ${theme.font.sizes.font32};
    font-weight: ${theme.font.weight.bold};
    margin-left: 20px;

    @media (max-width: 960px) {
      line-height: ${theme.font.sizes.font24};
      font-size: ${theme.font.sizes.font24};
    }
    @media (max-width: 700px) {
      line-height: ${theme.font.sizes.font18};
      font-size: ${theme.font.sizes.font18};

      margin-left: 10px;
    }
  }

  h2 {
    color: #bdbdbd;
    line-height: ${theme.font.sizes.font16};
    font-size: ${theme.font.sizes.font16};
    font-weight: ${theme.font.weight.normal};
    text-transform: uppercase;

    margin-top: 12px;
    margin-left: ${theme.spacings.space48};
    @media (max-width: 960px) {
      font-size: ${theme.font.sizes.font14};
    }
    @media (max-width: 700px) {
      font-size: ${theme.font.sizes.font12};

      margin-top: ${theme.spacings.space8};
      margin-left: 30px;
    }
  }
`

export const TitleContent = styled.div`
  display: flex;
  align-items: center;
  max-width: 100%;
`
