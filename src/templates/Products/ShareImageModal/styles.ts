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

  @media (max-width: 500px) {
    align-items: flex-end;
  }
`

export const ModalContainer = styled.div`
  border-radius: 1.2rem;

  @media (max-width: 1130px) {
    width: 98.5vw;
  }

  @media (max-width: 500px) {
    width: 100vw;
  }
`

export const ModalHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 2.4rem;

  font-size: 1.6rem;
  font-weight: 500;

  background-color: rgba(31, 31, 31);
  border-top-left-radius: 1.2rem;
  border-top-right-radius: 1.2rem;

  .close-modal {
    cursor: pointer;
  }
`

export const ModalBody = styled.div`
  display: flex;
  padding: 2.4rem;

  background-color: rgba(31, 41, 55, 1);
  border-bottom-left-radius: 1.2rem;
  border-bottom-right-radius: 1.2rem;

  @media (max-width: 500px) {
    display: block;
    padding: 3.4rem 2.2rem;
  }
`

export const SocialMediaContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-wrap: wrap;
  order: -1;
  gap: 1.6rem;
  margin-right: 3.2rem;

  @media (max-width: 500px) {
    flex-direction: row;
    gap: 3.2rem;
    margin-right: 0;
  }
`

export const SocialMedia = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;

  min-width: 5.6rem;

  font-size: 1.2rem;
  text-transform: uppercase;

  cursor: pointer;

  &.last {
    @media (max-width: 900px) {
      display: none;
    }
  }

  @media (max-width: 550px) {
    max-width: 4.2rem;
    min-width: 0;
  }

  @media (max-width: 500px) {
    max-width: 5.6rem;
    min-width: 0;
  }
`

export const ImageContainer = styled.div`
  ::-webkit-scrollbar {
    width: 0.8rem;
  }

  ::-webkit-scrollbar-thumb {
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 0.5rem;
  }

  @media (max-width: 1130px) {
    overflow-x: scroll;
    width: 100%;
  }

  @media (max-width: 500px) {
    opacity: 0;
    visibility: hidden;
    width: 0;
    height: 0;
    /* display: none; */
  }
`
