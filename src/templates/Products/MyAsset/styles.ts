import styled from 'styled-components'
import theme from '../../../styles/theme'

export const MyAsset = styled.div`
  margin: ${theme.spacings.space48} 0;
`

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  padding-bottom: 1.9rem;
  margin-bottom: 1.8rem;

  border-bottom: 0.1rem solid rgba(255, 255, 255, 0.1);
`

export const Title = styled.div`
  display: flex;
  align-items: center;

  h2 {
    font-size: ${theme.font.sizes.font18};
    font-weight: ${theme.font.weight.bold};
    margin-left: ${theme.spacings.space16};
  }
`

export const Table = styled.table`
  width: 100%;

  -webkit-border-radius: 2rem;
  -moz-border-radius: 2rem;
  border-radius: 2rem;
  margin-bottom: 1.6rem;

  color: #ffffff;
  font-weight: ${theme.font.weight.normal};
  font-size: ${theme.font.sizes.font16};
  line-height: 100%;
  letter-spacing: 0.05em;

  border-collapse: collapse;
  overflow: hidden;

  @media (max-width: 540px) {
    font-size: ${theme.font.sizes.font12};
  }

  @media (min-width: 961px) and (max-width: 1060px) {
    font-size: ${theme.font.sizes.font12};
  }
`

export const THead = styled.thead`
  background: rgba(0, 0, 0, 0.25);
`

export const TBody = styled.tbody`
  background: rgba(255, 255, 255, 0.04);
`

export const Tr = styled.tr`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
`

export const Th = styled.th`
  color: #fcfcfc;
  font-size: ${theme.font.sizes.font14};
  line-height: 100%;
  font-weight: ${theme.font.weight.light};
  letter-spacing: 0.05em;
  padding: 2.4rem 0;

  @media (max-width: 540px) {
    padding: 2rem 0;

    font-size: ${theme.font.sizes.font12};
  }

  &:first-of-type {
    padding: 2.4rem 0 2rem 3.2rem;

    text-align: left;

    @media (max-width: 540px) {
      padding: 2rem 0 2rem 2rem;
    }
  }
`

export const Td = styled.td`
  &:first-of-type {
    padding-left: 3.2rem;

    @media (max-width: 540px) {
      padding-left: 2rem;
    }

    div {
      flex-direction: row;
      gap: 0.8rem;
    }
  }

  &:last-of-type {
    padding: 2.4rem 0;

    @media (max-width: 540px) {
      padding: 2rem 0;
    }
  }
`

export const TdWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.4rem;
`

export const Value = styled.span`
  color: #c4c4c4;
  font-weight: ${theme.font.weight.light};
  font-size: ${theme.font.sizes.font14};
  line-height: 100%;

  @media (max-width: 540px) {
    font-size: 1rem;
  }
`

export const AddToken = styled.button`
  display: flex;
  align-items: center;
  gap: 0.4rem;

  font-family: ${theme.font.family};
  font-size: ${theme.font.sizes.font14};
  font-weight: ${theme.font.weight.light};
  letter-spacing: 0.05em;

  background-color: transparent;
  border: none;
  color: ${theme.colors.snow};

  cursor: pointer;
  outline: none;
  transition: 0.15s;

  &:hover {
    color: ${theme.colors.cyan};
  }
`

export const ButtonWrapper = styled.div`
  button {
    @media (max-width: 540px) {
      font-size: ${theme.font.sizes.font14};
    }
  }
`
