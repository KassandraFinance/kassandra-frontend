import styled from 'styled-components'
import theme from '../../../styles/theme'

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 20;

  background-color: rgba(0, 0, 0, 0);
`

export const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 44.8rem;

  border: 0.1rem solid rgba(255, 255, 255, 0.25);
  box-shadow: 0rem 0.4rem 6.9rem -1.7rem rgba(0, 0, 0, 0.51);
  border-radius: 1.2rem;

  overflow: hidden;
  z-index: 21;

  @media (max-width: 500px) {
    width: 90%;
  }
`

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 6.6rem;
  padding-inline: 2.4rem;

  background: rgba(31, 31, 31, 0.96);
  backdrop-filter: blur(0.4rem);
  border-bottom: 0.1rem solid rgba(255, 255, 255, 0.25);
`

export const CloseBtn = styled.button`
  background-color: transparent;
  border: none;

  cursor: pointer;
`

export const HeaderTitle = styled.div`
  color: ${theme.colors.snow};
  font-weight: ${theme.font.weight.bold};
  font-size: ${theme.font.sizes.font18};
  line-height: 100%;
  letter-spacing: 0.05em;
`
export const ModalBody = styled.div`
  padding: 2.4rem;

  background: rgba(31, 41, 55, 0.96);
  backdrop-filter: blur(0.4rem);
`

export const Ul = styled.ul`
  padding-block: 1.6rem;
`

export const Li = styled.li`
  display: flex;
  justify-content: space-between;

  margin-bottom: 1.6rem;

  color: ${theme.colors.snow};
  font-weight: ${theme.font.weight.light};
  font-size: ${theme.font.sizes.font16};
  line-height: 100%;
  letter-spacing: 0.05em;
`

export const Value = styled.span`
  font-weight: ${theme.font.weight.bold};
  font-size: ${theme.font.sizes.font18};
`
