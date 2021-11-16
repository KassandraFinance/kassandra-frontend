import styled from 'styled-components'
import theme from '../../../styles/theme'

export const Summary = styled.div`
  p {
    font-size: ${theme.font.sizes.font14};
    font-weight: ${theme.font.weight.light};
    line-height: 24px;
  }
  a {
    background-color: rgba(255, 255, 255, 0.04);
    border: none;
    border-radius: 12px;
    color: #fff;
    color: ${theme.colors.snow};
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.font14};
    font-weight: ${theme.font.weight.light};
    text-decoration: none;

    display: flex;
    align-items: center;

    max-width: 100%;
    padding: 16px 24px;
    outline: none;
    transition: 0.15s;
    svg {
      margin-left: ${theme.spacings.space8};
    }
    &:hover {
      color: ${theme.colors.cyan};
      > svg {
        path {
          fill: ${theme.colors.cyan};
        }
      }
    }
  }
`

export const Line = styled.div`
  background-color: rgba(255, 255, 255, 0.1);

  width: 100%;
  height: 1px;
  margin: ${theme.spacings.space24} 0;
`

export const Title = styled.div`
  display: flex;
  align-items: center;
  h2 {
    font-size: ${theme.font.sizes.font18};
    font-weight: ${theme.font.weight.bold};
    margin-left: ${theme.spacings.space16};
  }
`

export const LinkContent = styled.div`
  display: flex;
  justify-content: space-between;

  max-width: 400px;
  margin: 20px 0;
`

export const CopyContract = styled.div`
  background-color: rgba(255, 255, 255, 0.04);
  border: none;
  border-radius: 12px;
  color: #fff;
  font-family: ${theme.font.family};
  font-size: ${theme.font.sizes.font14};
  text-decoration: none;

  display: flex;
  align-items: center;
  justify-content: space-between;

  max-width: 400px;
  padding: 16px 24px;
  position: relative;

  button {
    background-color: transparent;
    border: none;
    color: #fff;
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.font14};
    text-decoration: none;

    cursor: pointer;
  }
`

export const Blockchain = styled.div`
  display: flex;
  align-items: flex-end;
  img {
    height: 18px;
    width: 18px;
    margin-right: 16px;
  }
  span {
    font-weight: ${theme.font.weight.light};
    line-height: ${theme.font.sizes.font14};
  }
`
