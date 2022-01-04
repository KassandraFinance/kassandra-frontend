import styled from 'styled-components'
import theme from '../../../styles/theme'

export const Token = styled.section`
  padding: 0 32px;
  margin: 0 auto 160px;

  text-align: center;
  @media (max-width: 960px) {
    margin: 0 auto 80px;
  }
  /* margin: -80px 0 0; */

  span {
    display: flex;
    font-size: ${theme.font.sizes.font16};
    font-weight: ${theme.font.weight.light};

    line-height: 155%;
    max-width: 500px;
    margin: 0 auto;
  }
  h1 {
    max-width: 620px;
    margin: auto;
    margin-bottom: ${theme.spacings.space24};

    font-size: ${theme.font.sizes.font48};
    font-weight: ${theme.font.weight.black};
    line-height: 104%;
    @media (max-width: 960px) {
      font-size: ${theme.font.sizes.font36};
    }
    @media (max-width: 450px) {
      font-size: ${theme.font.sizes.font24};
    }
  }
  p {
    margin: 0 auto;

    font-size: ${theme.font.sizes.font14};
    letter-spacing: 4px;
    color: ${theme.colors.cyan};
    text-align: center;
  }
`
export const Divider = styled.div`
  border: 1px solid ${theme.colors.cyan};

  max-width: 100px;
  margin: 25px auto;
`
export const KassandraCardWrapper = styled.section`
  margin: 0 auto;
  margin-top: 75px;
  max-width: 890px;

  display: grid;
  grid-template-columns: 1fr 1fr;
  @media (max-width: 960px) {
    display: flex;
    flex-direction: column;
  }
`
export const KassandraCard = styled.div`
  background-color: rgba(33, 20, 38, 0.33);

  border-radius: 12px;
  border: 1px solid #ffffff0d;

  max-width: 390px;
  height: max-content;
  padding: 31px;

  display: flex;
  flex-direction: column;

  text-align: left;
  @media (max-width: 960px) {
    margin: auto;
  }
  &.firstCard {
    p {
      color: ${theme.colors.magenta};
    }
  }
  &.secondCard {
    margin-top: 170px;
    @media (max-width: 960px) {
      margin-top: 1.6rem;
    }
  }
  &.thirdCard {
    margin-top: -120px;
    @media (max-width: 960px) {
      margin-top: 1.6rem;
    }
  }
  img {
    max-width: min-content;
  }
  p {
    text-align: left;
    color: #f79640;

    margin: 0;
    margin-top: 30px;
    margin-bottom: 8px;

    letter-spacing: 0.22em;
    display: inline-block;
  }
  h1 {
    margin-inline: 0;

    font-size: 24px;
    font-style: normal;
    font-weight: 900;
    line-height: 32px;
    letter-spacing: 0em;
    text-align: left;
  }
`
