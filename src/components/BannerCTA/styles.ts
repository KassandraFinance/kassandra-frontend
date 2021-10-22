import styled from "styled-components";
import theme from "../../styles/theme";

import * as ButtonStyles from '../Button/styles'

export const Container = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  max-width: 94.4rem;
  margin: auto;
  margin-block: 11rem 5.5rem;
  padding: 8rem 6rem;

  border-radius: 1rem;
  border: 0.1rem solid #FFFFFF0A;
  background: #2114261F;

  @media(max-width: 700px) {
    padding: 0 3.2rem;
    margin-block: 6rem 2.75rem;
    grid-template-columns: 1fr;
     text-align: center;


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
  }
  h1{
    font-size: ${theme.font.sizes.font36};
    line-height: 110%;
    margin: 2.4rem 0;
  }
  span{
    font-size: ${theme.font.sizes.font16};
    line-height: 155%;
    font-weight: ${theme.font.weight.light};
  }
`
export const BannerFooter = styled.div`
max-width: 36rem;
display: flex;
justify-content: space-between;
align-items: center;
margin-top: 6rem ;
@media(max-width: 700px) {
  max-width: 100%;
  flex-direction: column;
  align-content: center;
}

${ButtonStyles.Wrapper} {
  width: 65%;
  padding: 1.6rem 2.4rem;
  font-size: ${theme.font.sizes.font18};
  font-weight: ${theme.font.weight.medium};
  height: 5rem;
  @media(max-width: 700px) {
    margin-bottom: 1.6rem;
  }
}
  a{
    justify-items: center;
    text-decoration: none;
    font-size: ${theme.font.sizes.font14};
    font-weight: ${theme.font.weight.light};
    color: ${theme.colors.snow};
    margin-right: ${theme.spacings.space8};
  }
  div {
    display: flex;
    justify-content: space-between;
  }
`

