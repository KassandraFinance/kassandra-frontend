import styled from 'styled-components'
import theme from '../../../styles/theme'

export const Line = styled.div`
  margin: ${theme.spacings.space24} 0;
  width: 100%;
  height: 0.1rem;

  background-color: rgba(255, 255, 255, 0.1);
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

export const Text = styled.section`
  max-width: 100%;
  max-width: 80rem;

  h2 {
    margin-bottom: ${theme.spacings.space16};

    font-size: ${theme.font.sizes.font18};
    font-weight: ${theme.font.weight.medium};

    @media (max-width: 1200px) {
      font-size: ${theme.font.sizes.font24};
    }
  }

  p {
    display: inline-block;
    margin-bottom: ${theme.spacings.space48};

    line-height: ${theme.font.sizes.font24};
    font-size: ${theme.font.sizes.font14};
    font-weight: ${theme.font.weight.light};
  }

  span {
    display: inline-block;
    margin-bottom: ${theme.spacings.space16};

    line-height: ${theme.font.sizes.font24};
    font-size: ${theme.font.sizes.font14};
    font-weight: ${theme.font.weight.light};
  }

  ol {
    display: inline-block;
    margin-bottom: 3.2rem;
    padding-left: 3.5rem;

    font-size: ${theme.font.sizes.font14};
    font-weight: ${theme.font.weight.light};
    list-style: decimal;

    li {
      margin-bottom: 1.6rem;
    }
  }

  img {
    max-width: 100%;
    margin: 0 3.2rem;

    @media (max-width: 1200px) {
      max-width: 80%;
    }
  }
`

export const ToDocumentation = styled.div`
  display: flex;
  align-items: center;
  max-width: 26rem;
  margin-top: 4rem;
  margin-right: 0;
  margin-bottom: 0;
  margin-left: 0;

  padding: 1.6rem 2.4rem;

  background-color: rgba(255, 255, 255, 0.05);
  border: none;
  border-radius: 1.2rem;

  color: #fff;
  font-family: ${theme.font.family};
  font-size: ${theme.font.sizes.font14};

  p {
    max-width: 100%;
    margin-bottom: 0;

    line-height: ${theme.font.sizes.font14};
  }

  a {
    color: ${theme.colors.cyan};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  img {
    margin-top: 0;
    margin-right: 0;
    margin-bottom: 0;
    margin-left: 0.8rem;
    width: 1.8rem;
  }
`
