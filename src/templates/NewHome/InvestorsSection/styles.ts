import styled from 'styled-components'

export const Container = styled.section`
  position: relative;

  padding-inline: 2.4rem;

  @media (max-width: 576px) {
    padding-inline: 1.6rem;
  }
`

export const PoolCardContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  gap: 8rem;

  @media (min-width: 960px) {
    > div:nth-child(odd) {
      flex-direction: row-reverse;
    }
  }
`

export const ImgWrapper1 = styled.div`
  position: absolute;

  display: none;

  @media (max-width: 576px) {
    top: 55rem;
    left: 0;
    display: block;
  }
`

export const ImgWrapper2 = styled.div`
  position: absolute;

  display: none;

  @media (max-width: 576px) {
    top: 80rem;
    right: 0;
    display: block;
  }
`
