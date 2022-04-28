import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`
interface IWrapperProps {
  index: number;
}

// prettier-ignore
export const ImageWrapper = styled.div<IWrapperProps>`
  display: flex;
  margin-left: -0.9rem;
  max-width: 1.8rem;

  z-index: -${({ index }) => index};

  img {
    border-radius: 50%;
    padding: 0;
    margin: 0;
    max-width: 2rem;
  }

  &.svg-none img {
    min-width: 4rem;
    width: 4rem !important;
  }
`
