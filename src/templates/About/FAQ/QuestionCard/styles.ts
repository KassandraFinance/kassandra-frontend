import styled from 'styled-components'
import theme from '../../../../styles/theme'

export const Question = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  margin-bottom: 3.2rem;
  width: 100%;
`

export const QuestionText = styled.p`
  font-size: ${theme.font.sizes.font16};
  font-weight: ${theme.font.weight.medium};
  line-height: 110%;
  letter-spacing: 0.032rem;
  color: #ffffff;
  background: #21142654;
  border: 1px solid #ffffff0d;
  border-radius: 1.2rem;
  height: 7rem;
  padding: 2.4rem;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
`

interface IOpen {
  isOpen: boolean;
}

// eslint-disable-next-line prettier/prettier
export const Answer = styled.div<IOpen>`
  margin: ${props => (props.isOpen ? '2.4rem 2.4rem 0' : '0 2.4rem 0')};
  max-height: ${props => (props.isOpen ? '10rem' : '0')};
  overflow: hidden;
  display: flex;
  transition: all 0.3s ease-in-out;
`
export const AnswerText = styled.p`
  font-size: ${theme.font.sizes.font16};
  font-weight: ${theme.font.weight.light};
  line-height: 180%;
  color: #ffffff;
`
