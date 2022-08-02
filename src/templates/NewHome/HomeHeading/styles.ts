import styled, { css } from 'styled-components'
import theme from '../../../styles/theme'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.4rem;

  max-width: 66.8rem;
  margin: 0 auto;

  @media (max-width: 576px) {
    width: 100%;
    align-items: flex-start;
  }
`

interface ITitleProps {
  color: string;
}

export const Title = styled.h3`
  ${({ color }: ITitleProps) => css`
    color: ${color};

    font-weight: ${theme.font.weight.light};
    font-size: ${theme.font.sizes.font16};
    line-height: ${theme.font.sizes.font20};
    letter-spacing: 0.4em;
    text-transform: uppercase;

    @media (max-width: 576px) {
      font-size: ${theme.font.sizes.font14};
      line-height: ${theme.font.sizes.font16};
    }
  `}
`

interface ILineProps {
  color: string;
}

export const Line = styled.div`
  ${({ color }: ILineProps) => css`
    width: 9.8rem;
    height: 0.1rem;

    background-color: ${color};
    border-radius: 0.4rem;

    @media (max-width: 576px) {
      margin-bottom: 2.4rem;
    }
  `}
`

export const Subtitle = styled.h4`
  color: ${theme.colors.snow};
  font-weight: ${theme.font.weight.bold};
  font-size: ${theme.font.sizes.font32};
  line-height: 3.5rem;
  text-align: center;

  @media (max-width: 576px) {
    font-size: ${theme.font.sizes.font24};
    line-height: ${theme.font.sizes.font32};
    text-align: left;
  }
`

export const Text = styled.p`
  color: #ffffff;
  font-weight: ${theme.font.weight.light};
  font-size: ${theme.font.sizes.font16};
  line-height: ${theme.font.sizes.font24};
  text-align: center;

  @media (max-width: 576px) {
    text-align: left;
  }
`
