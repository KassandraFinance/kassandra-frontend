import styled from 'styled-components'

export const Container = styled.section`
  position: relative;

  padding-inline: 2.4rem;

  @media (max-width: 576px) {
    padding-inline: 1.6rem;
  }
`

export const DaoCardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: 8.8rem;

  @media (max-width: 992px) {
    flex-direction: column;
    gap: 4.8rem;
  }

  @media (max-width: 576px) {
    margin-top: 8rem;
    gap: 4rem;
  }
`

export const Line = styled.div`
  width: 0.2rem;
  height: 6.6rem;

  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 0.1rem;

  @media (max-width: 992px) {
    width: 6.6rem;
    height: 0.2rem;
  }
`

export const ImgWrapper1 = styled.div`
  position: absolute;

  display: none;

  @media (max-width: 576px) {
    left: 0;
    top: 7rem;
    display: block;
  }
`

export const ImgWrapper2 = styled.div`
  position: absolute;

  display: none;

  @media (max-width: 576px) {
    left: 0;
    top: 35rem;
    display: block;
  }
`

export const ImgTabletWrapper1 = styled.div`
  position: absolute;

  display: none;

  @media (min-width: 576px) and (max-width: 960px) {
    right: 0;
    bottom: -45rem;
    display: block;
  }
`

export const ImgTabletWrapper2 = styled.div`
  position: absolute;

  display: none;

  @media (min-width: 576px) and (max-width: 960px) {
    right: 0;
    bottom: -60rem;
    display: block;
  }
`
