import styled from 'styled-components'

import theme from '../../styles/theme'

export const Web3Disabled = styled.section`
  max-width: 94.5rem;
  //height: calc(100vh - 100px);
  height: calc(50vh);
  margin: 0 auto;
  padding: 3.2rem;

  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  div {
    width: 100%;
    box-shadow: 0.3rem 0.3rem 0.8rem rgba(0, 0, 0, 0.2);
  }
`

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 6.5rem;
  padding: 2.4rem;

  background-color: rgba(20, 20, 20, 0.5);
  border: 0.1rem solid ${theme.colors.amber};
  border-radius: 1.2rem 1.2rem 0 0;

  img {
    margin-right: ${theme.spacings.space16};
    @media (max-width: 440px) {
      width: 2rem;
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
    height: 5.6rem;
  }
  @media (max-width: 440px) {
    padding: 1.2rem;
    height: 100%;
  }
`

export const Body = styled.div`
  padding: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 20rem;

  background-color: rgba(31, 31, 31, 0.45);
  border-bottom: 0.1rem solid ${theme.colors.amber};
  border-right: 0.1rem solid ${theme.colors.amber};
  border-left: 0.1rem solid ${theme.colors.amber};
  border-radius: 0 0 1.2rem 1.2rem;

  @media (max-width: 700px) {
    height: 14rem;
    padding: 2.4rem;
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
    height: 4.8rem;
    padding: 0 3.2rem;
  }
`
