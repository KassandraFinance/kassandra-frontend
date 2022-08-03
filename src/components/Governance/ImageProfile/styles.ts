import styled from 'styled-components'
import theme from '../../../styles/theme'

interface IImageProps {
  fontSize: number | undefined;
}

// eslint-disable-next-line prettier/prettier
export const Image = styled.div<IImageProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  font-size: ${props =>
    props.fontSize ? props.fontSize : theme.font.sizes.font18};
  font-weight: ${theme.font.weight.light};
  letter-spacing: 0.5px;

  @media (max-width: 960px) {
    line-height: ${theme.font.sizes.font16};
    font-size: ${theme.font.sizes.font16};
  }

  @media (max-width: 768px) {
    line-height: ${theme.font.sizes.font14};
    font-size: ${theme.font.sizes.font14};
  }

  @media (max-width: 660px) {
    line-height: ${theme.font.sizes.font12};
    font-size: ${theme.font.sizes.font12};
  }

  .user-image {
    width: 3.2rem;
    border-radius: 50%;
  }

  span,
  a {
    margin-left: 1.6rem;

    color: ${theme.colors.snow};
    text-decoration: none;
    transition: 300ms;

    @media (max-width: 540px) {
      margin-left: 0.8rem;
    }
  }
  a:hover {
    color: ${theme.colors.cyan};
  }
`
