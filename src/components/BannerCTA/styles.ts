import styled from 'styled-components'
import theme from '../../styles/theme'

import * as ButtonStyles from '../Button/styles'

export const Background = styled.div`
  background-image: url('assets/images/background-banner.svg');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: 50%;

  padding: 100px 30px;
`

export const Container = styled.section`
  border-radius: 1rem;
  border: 0.1rem solid #ffffff0a;
  background: rgba(33, 20, 38, 0.4);

  max-width: 97rem;
  margin: auto;
  padding: 8rem 6rem;

  display: grid;
  grid-template-columns: 1fr 1fr;
  @media (max-width: 900px) {
    padding: 6rem 4rem;
  }

  @media (max-width: 700px) {
    text-align: center;
    grid-template-columns: 1fr;

    padding: 1.6rem 1.6rem;
  }
`
export const ImageWrapper = styled.div`
  max-width: 80%;
  img {
    width: 100%;
    @media (max-width: 700px) {
      display: none;
    }
  }
`
export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  p {
    font-size: ${theme.font.sizes.font12};
    letter-spacing: 0.4rem;
    color: #bdbdbd;
    @media (max-width: 700px) {
      color: ${theme.colors.amber};
    }
  }
  h1 {
    font-size: ${theme.font.sizes.font36};
    line-height: 110%;

    margin: 2.4rem 0;
    @media (max-width: 600px) {
      font-size: ${theme.font.sizes.font24};
      text-align: left;
    }
  }
  span {
    font-size: ${theme.font.sizes.font16};
    line-height: 155%;
    font-weight: ${theme.font.weight.light};
    @media (max-width: 600px) {
      font-size: ${theme.font.sizes.font14};
      line-height: 120%;
      text-align: left;
    }
  }
`
export const BannerFooter = styled.div`
  max-width: 36rem;
  margin-top: 6rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 900px) {
    flex-direction: column;
    height: 100%;
  }
  @media (max-width: 700px) {
    max-width: 100%;
    margin-top: 3.2rem;

    flex-direction: column;
    align-content: center;
  }

  ${ButtonStyles.Wrapper} {
    width: 65%;
    height: 4.4rem;

    padding: 1.6rem 2.4rem;
    font-size: ${theme.font.sizes.font18};
    @media (max-width: 900px) {
      margin-bottom: 1.6rem;
      width: 100%;
    }
  }

  a {
    text-decoration: none;
    font-size: ${theme.font.sizes.font14};
    font-weight: ${theme.font.weight.light};
    color: ${theme.colors.snow};

    margin-right: ${theme.spacings.space8};

    display: flex;
    align-items: space-between;
    text-decoration: none;
    justify-items: center;

    transition: 0.15s;
    svg {
      margin-left: ${theme.spacings.space8};
    }
    &:hover {
      color: ${theme.colors.cyan};
      > svg {
        path {
          stroke: ${theme.colors.cyan};
        }
      }
    }
    @media (max-width: 900px) {
      margin-top: 1.6rem;
    }
  }
`
