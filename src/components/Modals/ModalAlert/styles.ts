import styled from 'styled-components'
import theme from '../../../styles/theme'

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;

  width: 100vw;
  height: 100vh;

  background-color: rgba(0, 0, 0, 0.6);
`

export const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 35.5rem;
  height: auto;

  border: 0.1rem solid rgba(255, 255, 255, 0.25);
  box-shadow: 0rem 0.4rem 6.9rem -1.7rem rgba(0, 0, 0, 0.51);
  border-radius: 1rem;

  overflow: hidden;
  z-index: 110;

  @media (max-width: 450px) {
    width: 90%;
  }
`

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 6.5rem;
  padding-inline: 2.4rem;

  background-color: rgba(31, 31, 31, 0.72);
  backdrop-filter: blur(0.4rem);
  border-bottom: 0.1rem solid rgba(255, 255, 255, 0.25);
  border-radius: 1rem 1rem 0rem 0rem;
`

export const CloseBtn = styled.button`
  background-color: transparent;
  border: none;

  cursor: pointer;
`

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;

  color: ${theme.colors.snow};
  font-weight: ${theme.font.weight.medium};
  font-size: ${theme.font.sizes.font18};
  line-height: 100%;
  letter-spacing: 0.05em;
`

export const ModalBody = styled.div`
  padding: 2.4rem;

  text-align: center;

  background: rgba(31, 41, 55, 0.96);
  backdrop-filter: blur(0.4rem);
`

export const ErrorHeading = styled.h4`
  height: 18px;
  margin-top: 1.6rem;
  margin-bottom: 0.6rem;

  color: #e8372c;
  font-weight: ${theme.font.weight.medium};
  font-size: ${theme.font.sizes.font14};
  line-height: 1.8rem;
`

export const SolutionHeading = styled.h4`
  height: 18px;
  margin-top: 1.6rem;
  margin-bottom: 0.6rem;

  color: #2ce878;
  font-weight: ${theme.font.weight.medium};
  font-size: ${theme.font.sizes.font14};
  line-height: 1.8rem;
`

export const Text = styled.p`
  color: ${theme.colors.snow};
  font-weight: ${theme.font.weight.light};
  font-size: ${theme.font.sizes.font14};
  line-height: 1.8rem;

  &:last-of-type {
    margin-bottom: 2.4rem;
  }
`
