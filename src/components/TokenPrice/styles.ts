import styled from 'styled-components'
import theme from '../../styles/theme'

export const TokenInfoWrapper = styled.section`
  max-width: 946px;
  margin: 95px auto 50px;
  background-color: transparent;
  padding: 1px;
  border-bottom: 1px solid #282828;
`

export const TitleandIcon = styled.div`
  display: flex;
  max-width: 100%;
  display: flex;
  align-items: stretch;
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
  grid-template-columns: 1fr 1fr 1fr 1fr;
  border-top: 1px solid #ffffff24;
  margin-top: 16px;
  @media (max-width: 960px) {
    grid-template-columns: 1fr 1fr;
    padding: 0 32px;
  }
`
export const Values = styled.div`
  display: flex;
  flex-direction: column;
  margin: 60px auto;
  text-align: center;
  p {
    margin-bottom: 16px;
    color: ${theme.colors.magenta};
    font-size: ${theme.font.sizes.font14};
    letter-spacing: 4px;
    @media (max-width: 400px) {
      font-size: ${theme.font.sizes.font12};
    }
  }
  span {
    font-size: ${theme.font.sizes.font40};
    @media (max-width: 960px) {
      font-size: ${theme.font.sizes.font24};
    }
    @media (max-width: 400px) {
      font-size: ${theme.font.sizes.font18};
    }
  }
`
export const Link = styled.a`
  display: flex;
  text-decoration: none;
  max-width: 290px;
  margin: 2.4rem auto;
  cursor: pointer;
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
  }
`
