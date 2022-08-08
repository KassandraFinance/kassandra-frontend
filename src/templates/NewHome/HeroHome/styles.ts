import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3.2rem;

  height: 100vh;
  padding-inline: 2.4rem;

  @media (max-width: 576px) {
    padding-inline: 1.6rem;
  }

  .btn {
    flex-direction: row-reverse;
  }
`

export const ImgWrapper = styled.div`
  position: absolute;

  display: none;

  @media (min-width: 576px) and (max-width: 991px) {
    right: 0;
    bottom: -45rem;
    display: block;
  }
`
