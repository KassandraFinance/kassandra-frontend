import styled from 'styled-components'
import theme from '../../../styles/theme'

export const Products = styled.section`
margin-top: -50vh;
display: grid;
grid-template-columns: 1fr 1fr;
gap: 100px;
margin: 0 auto;
max-width: 960px;
padding: 0 ${theme.spacings.space32};

@media (max-width: 800px) {
  display: flex;
  display: grid;
  grid-template-columns: 1fr;
}

@media (max-width: 375px) and (max-height: 800px) {
  padding-top: 100px;
}
@media (max-width: 370px) {
  padding-top: 120px;
}
@media (max-width: 330px) {
  padding: 180px 20px 0;
}
`
export const TextWrapper = styled.div`
h1 {
  font-size: ${theme.font.sizes.font48};
  font-weight: ${theme.font.weight.black};
  line-height: 104%;
  text-align: left;
  margin-bottom: ${theme.spacings.space32};
  @media(max-width: 960px) {
    font-size: ${theme.font.sizes.font36};
  }
  @media(max-width: 760px) {
    font-size: ${theme.font.sizes.font32};
  }
  @media(max-width: 450px) {
    font-size: ${theme.font.sizes.font24};
  }
}
p {
  font-size: ${theme.font.sizes.font14};
  color: ${theme.colors.amber};
  text-align: left;
  letter-spacing: 5.6px;
  margin: 0 auto;
  margin-bottom: ${theme.spacings.space24};
  @media(max-width: 450px) {
    font-size: ${theme.font.sizes.font12};
  }
}
span {
  font-size: ${theme.font.sizes.font16};
  font-weight: ${theme.font.weight.light};
  line-height: 155%;
  text-align: left;
  @media(max-width: 760px) {
    text-align: center;
  }
  @media(max-width: 450px) {
  font-size: ${theme.font.sizes.font14};
  }
}
`
export const Divider = styled.div`
  max-width: 100px;
  margin-block: 40px;
  border-bottom: 3px solid #FFBF00;
`

export const Link = styled.a`
  max-width: max-content;
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-bottom: 20px;
  span{
    margin-right: 20px;
  }

`

export const CardContainer = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
justify-content: center;
row-gap: 63px;
p {
  font-size: ${theme.font.sizes.font14};
  color: ${theme.colors.amber};
  text-align: left;
  letter-spacing: 5.6px;
  letter-spacing: 4px;
  margin-top: 26px;
  margin-bottom: 12px;
  @media(max-width: 450px) {
    font-size: ${theme.font.sizes.font12};
    letter-spacing: 0px;
  }
}
span {
  font-size: ${theme.font.sizes.font16};
  font-weight: ${theme.font.weight.light};
  line-height: 155%;
  text-align: left;
  @media(max-width: 450px) {
    font-size: ${theme.font.sizes.font14};
    line-height: 100%;
  }
}
`
export const Card = styled.div`
margin: 0 auto;
@media(max-width: 800px) {
  max-width: 250px;
}
@media(max-width: 450px) {
  max-width: 130px;
}
`
export const IconWrapper = styled.div`
  background-color: rgba(255, 255, 255, .1);
  max-width: auto;
  margin: auto;
  width: 78px;
  height: 73px;
  border-radius: 12px;
  display: table-cell;
  vertical-align: middle;
  text-align: center;
  margin-bottom: 26px;

  img {

}
`
