import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`
interface IWrapperProps {
  index: number
}

// prettier-ignore
export const ImageWrapper = styled.div<IWrapperProps>`
  display: flex;
  margin-left: -0.4rem;
  max-width: 1.8rem;

  z-index: -${({ index }) => index};

  @media (max-width: 350px) {
    margin-left: -0.9rem;
  }

  img {
    max-width: 2rem;
    padding: 0;
    margin: 0;
    
    border-radius: 50%;
  }

  &.svg-none img {
    min-width: 4rem;
    width: 4rem !important;
  }
`
