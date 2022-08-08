import styled from 'styled-components'

export const Container = styled.section`
  position: relative;

  padding-inline: 2.4rem;

  @media (max-width: 576px) {
    padding-inline: 1.6rem;
  }
`

export const ManagerCardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;

  margin-top: 5.6rem;

  @media (max-width: 992px) {
    flex-direction: column;
    gap: 3.2rem;
  }
`

export const ImgWrapper = styled.div`
  position: absolute;

  display: none;

  @media (max-width: 576px) {
    right: 0;
    bottom: -20rem;
    display: block;
  }
`
