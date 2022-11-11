import styled from 'styled-components'
import theme from '../../../../styles/theme'

export const LatestNewsHeader = styled.div`
  position: relative;
  height: 37.6rem;

  background-image: url(./assets/images/blur-divisor.svg);
  background-repeat: no-repeat;
  background-position: bottom center;
  background-size: 137.8rem 37.6rem;
`

export const LatestNewsHeadingWrapper = styled.div`
  position: absolute;
  bottom: -2.1rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.4rem;

  width: 100%;

  h5 {
    margin-top: 0.5rem;
    text-align: center;
  }
`

export const Line = styled.div`
  width: 9.8rem;
  height: 0.1rem;

  background: linear-gradient(99.25deg, #e843c4 0%, #ffbf00 100%, #ffbf00 100%);
  border-radius: 0.7rem;
`
