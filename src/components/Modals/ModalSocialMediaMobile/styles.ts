import styled from 'styled-components'
import theme from '../../../styles/theme'

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;

  background-color: transparent;

  z-index: 20;
`

export const ModalContainer = styled.div`
  position: fixed;
  bottom: 7.6rem;
  right: 1.6rem;
  padding: 0.4rem 0.8rem;

  background-color: #372b3b;
  border: 0.1rem solid rgba(255, 255, 255, 0.08);
  border-radius: 0.4rem;

  z-index: 20;
`

export const SocialIcon = styled.a`
  display: flex;
  padding: 0.6rem 0;

  text-decoration: none;

  .medium {
    display: block;

    background: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
  }
  img {
    width: 1.8rem;
  }

  span {
    margin-left: 0.8rem;

    color: ${theme.colors.snow};
    font-weight: ${theme.font.weight.light};
    font-size: ${theme.font.sizes.font16};
  }
`
