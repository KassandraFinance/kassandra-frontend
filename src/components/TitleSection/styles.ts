import styled from 'styled-components'
import theme from '../../styles/theme'

interface ITitleProps {
  marginTop?: number;
}

// prettier-ignore
export const Title = styled.div<ITitleProps>`
  margin-top: ${props => (props.marginTop ? `${props.marginTop}px` : 0)};

  @media (max-width: 700px) {
    img {
      width: 1.8rem;
    }
  }

  h1 {
    line-height: ${theme.font.sizes.font32};
    font-size: ${theme.font.sizes.font32};
    font-weight: ${theme.font.weight.medium};

    @media (max-width: 960px) {
      line-height: ${theme.font.sizes.font24};
      font-size: ${theme.font.sizes.font24};
    }

    @media (max-width: 700px) {
      line-height: ${theme.font.sizes.font18};
      font-size: ${theme.font.sizes.font18};
    }
  }

  h2 {
    color: #bdbdbd;
    line-height: ${theme.font.sizes.font16};
    font-size: ${theme.font.sizes.font16};
    font-weight: ${theme.font.weight.normal};
    text-transform: uppercase;

    margin-top: 1.2rem;
    margin-left: 4.3rem;

    @media (max-width: 960px) {
      font-size: ${theme.font.sizes.font14};
    }

    @media (max-width: 700px) {
      font-size: ${theme.font.sizes.font12};

      margin-top: ${theme.spacings.space8};
      margin-left: 3.3rem;
    }
  }
`

export const TitleContent = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  max-width: 100%;

  @media (max-width: 700px) {
    gap: 1rem;
  }
`
