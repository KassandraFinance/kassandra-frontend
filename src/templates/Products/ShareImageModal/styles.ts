import styled from 'styled-components'

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 20;

  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 100%;
  height: 100vh;
  width: 100vw;

  background-color: rgba(0, 0, 0, 0.7);
`

export const ModalContainer = styled.div`
  border-radius: 1.2rem;

  @media (max-width: 1130px) {
    width: 100vw;
  }
`

export const ModalHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 2.4rem;

  background-color: rgba(31, 31, 31);

  font-size: 1.6rem;
  font-weight: 500;

  .close-modal {
    cursor: pointer;
  }
`

export const ModalBody = styled.div`
  padding: 2.4rem;

  background-color: rgba(31, 41, 55, 1);

  @media (max-width: 1130px) {
    padding: 0;
    padding-bottom: 2.4rem;
  }
`

export const SocialMediaContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1.6rem;
  padding: 0 2.5rem;

  @media (max-width: 550px) {
    gap: 1.6rem 3.6rem;
  }
`

export const SocialMedia = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.6rem;

  margin-top: 2.4rem;
  min-width: 5.6rem;

  font-size: 1.2rem;
  text-transform: uppercase;

  @media (max-width: 550px) {
    max-width: 4.2rem;
    min-width: 0;
  }
`

export const ImageContainer = styled.div`
  @media (max-width: 1130px) {
    overflow-x: scroll;
    width: 100%;
    padding-top: 4rem;
  }
`
