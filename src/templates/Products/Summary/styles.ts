import styled from 'styled-components'
import theme from '../../../styles/theme'

export const Summary = styled.div`
  p {
    font-size: ${theme.font.sizes.font14};
    font-weight: ${theme.font.weight.light};
    line-height: 1.5rem;
  }

  a {
    display: flex;
    align-items: flex-end;
    max-width: 100%;
    padding: 1.5rem;

    font-family: ${theme.font.family};
    color: ${theme.colors.snow};
    font-size: ${theme.font.sizes.font14};
    font-weight: ${theme.font.weight.light};
    text-decoration: none;

    background-color: rgba(255, 255, 255, 0.04);
    border: none;
    border-radius: 0.75rem;

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
  height: 0.06rem;
  margin: ${theme.spacings.space24} 0;
`

export const Title = styled.div`
  display: flex;
  align-items: center;

  h2 {
    margin-left: ${theme.spacings.space16};

    font-size: ${theme.font.sizes.font18};
    font-weight: ${theme.font.weight.bold};
  }
`

export const LinkContent = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 25rem;
  margin-top: 1.2rem;
  margin-bottom: 2.4rem;
`

export const ContractsName = styled.p`
  /* margin-top: 1.25rem; */
  margin-bottom: 1.2rem;

  font-weight: ${theme.font.weight.normal} !important;
`

export const CopyContract = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 100%;
  padding: 1.38rem;
  margin: 1rem 0;

  font-family: ${theme.font.family};
  font-size: ${theme.font.sizes.font14};
  color: #fff;
  text-decoration: none;

  background-color: rgba(255, 255, 255, 0.04);
  border: none;
  border-radius: 0.75rem;

  .metamask {
    margin-right: 0.5rem;

    @media (max-width: 1060px) {
      margin-left: 1.25rem;
    }
  }

  & > div {
    display: flex;
  }

  button {
    display: flex;
    align-items: center;

    color: ${theme.colors.snow};
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.font14};
    font-weight: ${theme.font.weight.light};
    text-decoration: none;

    background-color: transparent;
    border: none;

    transition: 0.15s;
    outline: none;
    cursor: pointer;

    @media (max-width: 1060px) {
      margin-top: 6px;
    }

    @media (max-width: 538px) {
      display: none;
    }

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

  @media (max-width: 1060px) {
    flex-wrap: wrap;
    align-items: flex-start;
    padding: 1rem;

    > button {
      margin-left: 2.5rem;
    }
  }

  @media (max-width: 950px) {
    flex-direction: row;
  }

  @media (max-width: 530px) {
    flex-direction: column;
  }
`

export const Blockchain = styled.div`
  display: flex;
  max-height: 2.4rem;

  .image {
    max-width: 2.4rem;
    max-height: 2.4rem;
    margin-right: 1.6rem;
  }

  span {
    padding: 0.38rem 0;

    font-size: ${theme.font.sizes.font14};
    line-height: ${theme.font.sizes.font14};
    text-transform: uppercase;
  }

  a {
    align-items: center;

    background-color: inherit;
  }

  @media (max-width: 1060px) {
    margin-bottom: 0.5rem;
  }
`
