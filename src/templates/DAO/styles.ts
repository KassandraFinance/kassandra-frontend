import { CallToActionEndPage } from '@/components/CallToActionEndPage/styles'
import styled from 'styled-components'

export const Wrapper = styled.div`
  position: relative;

  .button {
    flex-direction: row-reverse;
    gap: 0.8rem;
  }
`

export const HeroWrapper = styled.div`
  display: flex;
  justify-content: center;
`

export const Button = styled.a`
  display: flex;
  padding: 1.6rem 3.2rem;
  gap: 1.6rem;

  max-width: 22.2rem;
  width: 100%;
  height: 4.8rem;
  margin: 0 auto;

  background: linear-gradient(93.84deg, #e843c4 0.12%, #0c3ddc 100%);
  border-radius: 0.4rem;
  font-size: 1.6rem;
  cursor: pointer;
`

export const CallToActionEndPageContainer = styled.div`
  margin: 26rem 26rem;
  ${CallToActionEndPage} {
    p {
      max-width: 32rem;
    }
  }
`
