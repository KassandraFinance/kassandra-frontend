import styled from 'styled-components'
import theme from '../../../styles/theme'

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

export const Text = styled.section`
  max-width: 100%;
  max-width: 800px;
  h2 {
    font-size: 18px;
    font-weight: ${theme.font.weight.medium};
    margin-bottom: ${theme.spacings.space16};
    @media (max-width: 1200px) {
      font-size: ${theme.font.sizes.font24};
    }
  }
  p {
    display: inline-block;
    line-height: ${theme.font.sizes.font24};
    font-size: ${theme.font.sizes.font14};
    font-weight: ${theme.font.weight.light};
    margin-bottom: ${theme.spacings.space48};
  }
  span {
    display: inline-block;
    line-height: ${theme.font.sizes.font24};
    font-size: ${theme.font.sizes.font14};
    font-weight: ${theme.font.weight.light};
    margin-bottom: ${theme.spacings.space16};
  }
  ol {
    display: inline-block;
    font-size: ${theme.font.sizes.font14};
    font-weight: ${theme.font.weight.light};
    list-style: decimal;
    padding-left: 35px;
    margin-bottom: 32px;
    li {
      margin-bottom: 16px;
    }
  }
  img {
    max-width: 100%;
    margin: 0 32px;
    @media (max-width: 1200px) {
      max-width: 80%;
    }
  }
`

export const ToDocumention = styled.div`
  background-color: rgba(255, 255, 255, 0.05);
  border: none;
  border-radius: 12px;
  color: #fff;
  font-family: ${theme.font.family};
  font-size: ${theme.font.sizes.font14};

  max-width: 260px;
  margin: 40px 0 0;
  padding: 16px 24px;
  p {
    line-height: ${theme.font.sizes.font14};

    max-width: 100%;
    margin-bottom: 0;
  }

  a {
    color: ${theme.colors.cyan};
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }

  img {
    margin: 0 0 0 8px;
    width: 18px;
  }
`
