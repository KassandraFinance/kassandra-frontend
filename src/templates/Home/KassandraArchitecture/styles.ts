import styled from 'styled-components'
import theme from '../../../styles/theme'

export const Container = styled.div`
  max-width: 100%;
  background: url('assets/backgroundTokensPage.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center top;
`

export const Token = styled.section`

  padding: 80px 32px;
  text-align: center;

  span{
    display: flex;
    font-size: ${theme.font.sizes.font16};
    line-height: 155%;
    max-width: 500px;
    margin: 0 auto;
  }
  h1 {
    max-width: 620px;
    font-size: ${theme.font.sizes.font48};
    font-weight: ${theme.font.weight.black};
    line-height: 104%;
    margin: auto;
    margin-bottom: ${theme.spacings.space24};
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
  img{
    max-width: min-content;
  }
  p{
    text-align: left;
    display: inline-block;
    color: ${theme.colors.amber};
    letter-spacing: 0.22em;
    margin: 0;
    margin-top:30px;
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
