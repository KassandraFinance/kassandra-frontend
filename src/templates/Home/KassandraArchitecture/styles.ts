import styled from 'styled-components'
import theme from '../../../styles/theme'

export const Token = styled.section`
  padding: 0 3.2rem;
  margin: 0 auto 16rem;

  text-align: center;

  @media (max-width: 960px) {
    margin: 0 auto 8rem;
  }

  span {
    display: flex;

    max-width: 50rem;
    margin: 0 auto;

    font-size: ${theme.font.sizes.font16};
    font-weight: ${theme.font.weight.light};
    line-height: 155%;
  }

  h1 {
    max-width: 62rem;
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

    color: ${theme.colors.cyan};
    font-size: ${theme.font.sizes.font14};
    letter-spacing: 0.4rem;
    text-align: center;
  }
`

export const Divider = styled.div`
  max-width: 10rem;
  margin: 2.5rem auto;

  border: 1px solid ${theme.colors.cyan};
`

export const KassandraCardWrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;

  margin: 0 auto;
  margin-top: 7.5rem;
  max-width: 89rem;

  @media (max-width: 960px) {
    display: flex;
    flex-direction: column;
  }
`
export const KassandraCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;

  max-width: 39rem;
  height: max-content;
  padding: 3.1rem;

  background-color: rgba(33, 20, 38, 0.33);
  border-radius: 1.2rem;
  border: 1px solid #ffffff0d;

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
    margin-top: 17rem;

    @media (max-width: 960px) {
      margin-top: 1.6rem;
    }
  }

  &.thirdCard {
    margin-top: -12rem;

    @media (max-width: 960px) {
      margin-top: 1.6rem;
    }
  }

  p {
    display: inline-block;

    margin: 0;
    margin-top: 3rem;
    margin-bottom: 0.8rem;

    color: #f79640;
    text-align: left;
    letter-spacing: 0.22em;
  }

  h1 {
    margin-inline: 0;

    font-size: ${theme.font.sizes.font24};
    font-style: normal;
    font-weight: 900;
    line-height: 3.2rem;
    letter-spacing: 0em;
    text-align: left;
  }
`
