import styled from 'styled-components'
import theme from '../../../../styles/theme'

export const Content = styled.div`
  background: #1f2937;
  border-radius: 0 0 10px 10px;
  color: ${theme.colors.snow};
  font-weight: ${theme.font.weight.light};

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  padding: 2.4rem;

  p {
    font-size: ${theme.font.sizes.font14};
    line-height: ${theme.font.sizes.font18};
  }

  > span {
    font-size: ${theme.font.sizes.font12};

    margin-top: ${theme.spacings.space24};
    margin-bottom: ${theme.spacings.space16};
  }
`

export const Select = styled.button`
  background-color: #1b1d22;
  border: 1px solid #ffffff15;

  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  padding: ${theme.spacings.space24} ${theme.spacings.space16};

  span {
    color: ${theme.colors.snow};
    font-size: ${theme.font.sizes.font14};
    text-align: left;
  }
`

export const Input = styled.input`
  background-color: #ffffff15;
  border: 1px solid #ffffff15;
  color: ${theme.colors.snow};
  font-weight: ${theme.font.weight.light};
  font-size: ${theme.font.sizes.font14};
  font-family: ${theme.font.family};
  letter-spacing: 0.05em;

  width: 100%;
  height: 4.6rem;

  padding: ${theme.spacings.space16};

  &::placeholder {
    font-weight: ${theme.font.weight.light};
    font-size: ${theme.font.sizes.font14};
    letter-spacing: 0.05em;
  }

  &:focus {
    outline: 1px solid ${theme.colors.snow};
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  gap: 1.6rem;

  width: 100%;
  margin-top: ${theme.spacings.space40};
  margin-bottom: ${theme.spacings.space24};
`

export const Link = styled.div`
  margin: 0 auto;
`
