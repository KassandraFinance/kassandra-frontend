import styled from 'styled-components'

export const Container = styled.div`
  position: relative;

  max-width: 110.8rem;
  margin: 0 auto;
`

export const WavyOneWrapper = styled.div`
  position: relative;
`

export const ImgWrapper = styled.div`
  position: absolute;

  display: none;

  @media (max-width: 576px) {
    right: 0;
    bottom: -15rem;
    display: block;
  }
`
