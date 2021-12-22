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
    color: ${theme.colors.snow};
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.font14};
    font-weight: ${theme.font.weight.light};
    text-decoration: none;

    display: flex;
    align-items: flex-end;

    max-width: 100%;
    padding: 24px;

    transition: 0.15s;
    outline: none;
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

export const ContractsName = styled.p`
  font-weight: ${theme.font.weight.normal} !important;
  margin: 20px 0 10px;
`

interface ICopyContractProps {
  width?: string;
}

// eslint-disable-next-line prettier/prettier
export const CopyContract = styled.div<ICopyContractProps>`
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

  max-width: 460px !important;
  padding: 22px;
  margin: 16px 0;

  .metamask {
    margin-left: 16px;
    @media(max-width: 1060px) {
      margin-top: 8px;
      margin-left: 40px;
    }
  }

  button {
    background-color: transparent;
    border: none;
    color: ${theme.colors.snow};
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.font14};
    font-weight: ${theme.font.weight.light};
    text-decoration: none;

    display: flex;
    align-items: center;


    transition: 0.15s;
    outline: none;
    cursor: pointer;
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

  @media(max-width: 1060px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 16px;
    max-width: 100%;
    > button {
      margin-left: 40px;
    }
  }
`

export const Blockchain = styled.div`
  display: flex;

  max-height: 24px;
  margin-right: 32px;

  .image {
    max-width: 24px;
    max-height: 24px;
    margin-right: 16px;
  }

  span {
    font-size: ${theme.font.sizes.font14};
    line-height: ${theme.font.sizes.font14};
    padding: 6px 0;
  }

  @media (max-width: 1060px) {
    margin-bottom: 8px;
  }
`
