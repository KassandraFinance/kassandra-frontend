import styled from "styled-components";
import theme from "../../styles/theme";

import * as ButtonStyles from '../Button/styles'

export const Background = styled.div`
  background-image: url('assets/backgroundBanner.svg');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: 50%;

  box-shadow: inset 0px -20px 30px 0px #151117;
  padding: 100px 30px;
`
export const Container = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  max-width: 97rem;
  margin: auto;
  padding: 8rem 6rem;

  border-radius: 1rem;
  border: 0.1rem solid #FFFFFF0A;
  background: rgba(33, 20, 38, 0.4);

  @media (max-width: 900px) {
    padding: 6rem 4rem;
  }

  @media(max-width: 700px) {
    grid-template-columns: 1fr;
     text-align: center;
    padding: 1.6rem 1.6rem;

  }
`
export const ImageWrapper = styled.div`
  max-width: 80%;
  img{
    width: 100%;
    @media(max-width: 700px) {
      display: none;
    }
  }
`
export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  p{
    font-size: ${theme.font.sizes.font12};
    letter-spacing: 0.4rem;
    color: #c4c4c4;
    @media(max-width: 700px) {
      color:${theme.colors.amber};
    }
  }
  h1{
    font-size: ${theme.font.sizes.font36};
    line-height: 110%;
    margin: 2.4rem 0;
    @media(max-width: 600px) {
      font-size: ${theme.font.sizes.font24};
      text-align: left;
    }
  }
  span{
    font-size: ${theme.font.sizes.font16};
    line-height: 155%;
    font-weight: ${theme.font.weight.light};
    @media(max-width: 600px) {
      font-size: ${theme.font.sizes.font14};
      line-height: 120%;
      text-align: left;
    }
  }
`
export const BannerFooter = styled.div`
  max-width: 36rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 6rem;
  @media (max-width: 900px) {
    flex-direction: column;
    height: 100%;
  }
  @media(max-width: 700px) {
    max-width: 100%;
    flex-direction: column;
    align-content: center;
    margin-top: 3.2rem;
  }

  ${ButtonStyles.Wrapper} {
    width: 65%;
    padding: 1.6rem 2.4rem;
    font-size: ${theme.font.sizes.font18};
    height: 4.4rem;
    @media(max-width: 900px) {
      margin-bottom: 1.6rem;
      width: 100%;
    }
  }

  a {
    display: flex;
    align-items: space-between;
    text-decoration: none;
    justify-items: center;
    text-decoration: none;
    font-size: ${theme.font.sizes.font14};
    font-weight: ${theme.font.weight.light};
    color: ${theme.colors.snow};
    margin-right: ${theme.spacings.space8};
    transition: 0.15s;
    svg{
    margin-left: ${theme.spacings.space8};
    }
    &:hover {
      color: ${theme.colors.cyan};
      >svg {
        path{
          stroke: ${theme.colors.cyan};
        }
      }
    }
    @media(max-width: 900px) {
      margin-top: 1.6rem;
    }
  }
`

