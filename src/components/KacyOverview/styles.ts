import styled from 'styled-components'
import theme from '../../styles/theme'

export const TokenInfoWrapper = styled.section`
  margin-top: 9.5rem;
  margin-right: auto;
  margin-bottom: 5rem;
  margin-left: auto;
  max-width: 946px;

  background-color: transparent;
  border-bottom: 0.1rem solid #282828;

  @media (max-width: 946px) {
    padding: 0 3.2rem;
  }
`
export const TitleandIcon = styled.div`
  display: flex;
  align-items: stretch;
  max-width: 100%;

  h3 {
    font-size: ${theme.font.sizes.font24};
    font-weight: ${theme.font.weight.bold};
    color: #ffffff;
    line-height: 104%;
  }
`
export const Icon = styled.img`
  max-width: 1.75rem;
  margin-right: 2rem;
`

export const TokenInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(4, auto);
  margin-top: 1.6rem;

  border-top: 0.1rem solid #ffffff24;

  @media (max-width: 960px) {
    grid-template-columns: 1fr 1fr;
    align-items: end;
    justify-content: center;
  }
`
export const Values = styled.div`
  display: flex;
  flex-direction: column;
  margin: 6rem auto;

  text-align: center;

  p {
    margin-bottom: 1.2rem;

    color: ${theme.colors.magenta};
    font-size: ${theme.font.sizes.font14};
    letter-spacing: 0.4rem;
  }
  span {
    font-size: 2.8rem;

    @media (max-width: 960px) {
      font-size: ${theme.font.sizes.font24};
    }

    @media (max-width: 400px) {
      font-size: ${theme.font.sizes.font18};
    }
  }
`
export const Link = styled.div`
  display: flex;
  max-width: 30rem;
  margin-top: 0;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 12rem;

  cursor: pointer;

  @media (max-width: 560px) {
    margin-top: 0;
    margin-right: auto;
    margin-left: auto;
    margin-bottom: 8rem;
  }

  a {
    font-size: ${theme.font.sizes.font14};
  }
`
