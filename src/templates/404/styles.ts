import styled, { css } from 'styled-components'
import theme from './../../styles/theme'

export const Wrapper = styled.div`
  display: flex;
  padding: 0 3.2rem;
  max-width: 79rem;
  margin: auto;
  justify-content: center;
  /* margin-top: 2%; */
  min-height: calc(100vh - 110px);
  flex-direction: column;
  align-items: center;
  text-align: center;
  /* transform: translateY(50%); */
  img{
    max-width: 100%;
    margin-bottom:6%;
  }

  p{
    font-size: 3.2rem;
    font-weight: ${theme.font.weight.light};
    margin-bottom: 3.6rem;
  }

  @media(max-width: 128rem){
    max-width: 71rem;
    p{
      font-size: 2.4rem;
      margin-bottom: 2.4rem;
    }
  }
  @media(max-width: 102.4rem){
    max-width: 64rem;
    p{
      font-size: 1.8rem;
      margin-bottom: 1.8rem;
    }

  }
  @media(max-width: 76.8rem){
    max-width: 58rem;
  }

  @media(max-width: 64rem){
    max-width: 52rem;
    p{
      font-size: 1.6rem;
      margin-bottom: 1.6rem;
    }
  }
  @media(max-width: 32rem){
    max-width: 25rem;
    p{
      font-size: ${theme.font.sizes.font14};
      margin-bottom: 14px;
    }
  }
`
