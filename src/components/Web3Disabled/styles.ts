import styled from 'styled-components'

import theme from '../../styles/theme'

export const Web3Disabled = styled.section`
  max-width: 945px;
  height: calc(100vh - 100px);
  margin: 0 auto;
  padding: 32px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  div {
    width: 100%;
    box-shadow: 3px 3px 8px rgba(0, 0, 0, 0.2);
  }
`

export const Header = styled.div`
  background-color: rgba(20, 20, 20, 0.5);

  border: 1px solid ${theme.colors.amber};
  border-radius: 12px 12px 0 0;

  display: flex;
  align-items: center;
  justify-content: center;
  height: 65px;
  padding: 24px;

  img {
    margin-right: ${theme.spacings.space16};
    @media (max-width: 440px) {
      width: 20px;
      margin-right: ${theme.spacings.space8};
    }
  }
  p {
    font-size: ${theme.font.sizes.font18};
    font-weight: ${theme.font.weight.normal};
    @media (max-width: 700px) {
      font-size: ${theme.font.sizes.font16};
    }
    @media (max-width: 440px) {
      font-size: ${theme.font.sizes.font14};
    }
  }
  @media (max-width: 700px) {
    height: 56px;
  }
  @media (max-width: 440px) {
    padding: 12px;
    height: 100%;
  }
`

export const Body = styled.div`
  background-color: rgba(31, 31, 31, 0.45);

  border-bottom: 1px solid ${theme.colors.amber};
  border-right: 1px solid ${theme.colors.amber};
  border-left: 1px solid ${theme.colors.amber};
  border-radius: 0 0 12px 12px;

  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 200px;
  @media (max-width: 700px) {
    height: 140px;
    padding: 24px;
  }

  p {
    font-size: ${theme.font.sizes.font16};
    font-weight: ${theme.font.weight.light};
    @media (max-width: 700px) {
      font-size: ${theme.font.sizes.font14};
    }
    @media (max-width: 440px) {
      font-size: ${theme.font.sizes.font12};
    }
  }
  button {
    height: 48px;
    padding: 0 32px;
  }
`
