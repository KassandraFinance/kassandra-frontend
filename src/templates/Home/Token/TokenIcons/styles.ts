import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`
interface IWrapperProps {
  index: number;
}

// eslint-disable-next-line prettier/prettier
export const ImageWrapper = styled.div<IWrapperProps>`
  display: flex;
  z-index: -${({ index }) => index};
  margin-left: -9px;
  max-width: 18px;
  img {
    border-radius: 50%;
    padding: 0;
    margin: 0;
    max-width: 20px;
  }
  &.svg-none img {
    min-width: 40px;
    width: 40px !important;
  }
`
