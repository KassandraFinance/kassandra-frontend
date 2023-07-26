import styled, { css } from 'styled-components'

export const Question = styled.div`
  ${() => css`
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: center;
    margin-bottom: 3.2rem;
    width: 100%;
  `}
`

type QuestionProps = { background: string }

export const QuestionText = styled.div<QuestionProps>`
  ${({ theme, background }) => css`
    font-size: ${theme.font.sizes.font16};
    font-weight: ${theme.font.weight.medium};
    line-height: 110%;
    letter-spacing: 0.032rem;
    color: #ffffff;
    background: ${background};
    border-radius: 0.8rem;
    min-height: 7rem;
    padding: 2.4rem;
    display: flex;
    justify-content: space-between;
    cursor: pointer;

    @media (max-width: 576px) {
      font-size: ${theme.font.sizes.font14};
    }
  `}
`

interface IOpen {
  isOpen: boolean
}

export const Answer = styled.div<IOpen>`
  margin: ${props => (props.isOpen ? '2.4rem 2.4rem 0' : '0 2.4rem 0')};
  max-height: ${props => (props.isOpen ? 'auto' : '0')};
  overflow: hidden;
  display: flex;
  transition: all 0.3s ease-in-out;
`
export const AnswerText = styled.p`
  ${({ theme }) => css`
    position: relative;
    font-size: ${theme.font.sizes.font16};
    font-weight: ${theme.font.weight.light};
    line-height: 180%;
    color: #ffffff;
    a {
      text-decoration: underline;
      position: relative;
      color: ${theme.colors.snow};
      font-size: ${theme.font.sizes.font16};
      font-weight: ${theme.font.weight.light};
      &:hover {
        color: ${theme.colors.cyan};
      }
    }
  `}
`

export const IconWrapper = styled.div`
  ${() => css`
    min-width: 1.6rem;
    min-height: 1.6rem;
    margin-left: 0.8rem;
  `}
`
