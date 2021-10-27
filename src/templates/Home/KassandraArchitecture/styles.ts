import styled from 'styled-components'
import theme from '../../../styles/theme'



export const Token = styled.section`
  padding: 0 32px;
  margin: 0 auto 160px;
  text-align: center;
  /* margin: -80px 0 0; */

  span{
    display: flex;
    font-size: ${theme.font.sizes.font16};
    font-weight: ${theme.font.weight.light};

    line-height: 155%;
    max-width: 500px;
    margin: 0 auto;
  }
  h1 {
    max-width: 620px;
    font-size: ${theme.font.sizes.font48};
    font-weight: ${theme.font.weight.black};
    line-height: 104%;
    margin-bottom: ${theme.spacings.space24};
    @media(max-width: 960px) {
      font-size: ${theme.font.sizes.font36};
    }
    @media(max-width: 450px) {
      font-size: ${theme.font.sizes.font24};
    }
  }
  p {
    font-size: ${theme.font.sizes.font14};
    letter-spacing: 4px;
    color: ${theme.colors.cyan};
    text-align: center;
    margin: 0 auto;
  }

`
export const Divider = styled.div`
  max-width: 100px;
  border: 1px solid ${theme.colors.cyan};
  margin: 25px auto;
`
export const KassandraCardWrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 0 auto;
  margin-top: 75px;
  max-width: 890px;
  @media(max-width: 960px) {
    display: flex;
    flex-direction: column;
  }
`
export const KassandraCard = styled.div`
  display: flex;
  height: max-content;
  flex-direction: column;
  max-width: 390px;
  background-color:rgba(33, 20, 38, 0.33);
  border-radius: 12px;
  border: 1px solid #FFFFFF0D;
  text-align: left;
  padding: 31px;
  @media(max-width: 960px) {
      margin: auto;
   }
  &.firstCard {
    p{
      color: ${theme.colors.magenta}
    }
  }
  &.secondCard {
    margin-top: 170px;
    @media(max-width: 960px) {
      margin-top: 1.6rem;
   }
  }
  &.thirdCard {
    margin-top: -120px;
    @media(max-width: 960px) {
      margin-top: 1.6rem;
    }
  }
  img{
    max-width: min-content;
  }
  p{
    text-align: left;
    display: inline-block;
    color: #F79640;
    letter-spacing: 0.22em;
    margin: 0;
    margin-top:30px;
    margin-bottom: 8px;
  }
  h1{
    font-size: 24px;
    font-style: normal;
    font-weight: 900;
    line-height: 32px;
    letter-spacing: 0em;
    text-align: left;
  }
`
