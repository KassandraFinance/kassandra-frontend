import styled from 'styled-components'
import theme from '../../styles/theme'

export const CardWrapper = styled.div`
  min-width: 36rem;
  max-height: min-content;
  display: flex;
  flex-direction: column;
  border: 1px solid ${props => props.color};
  border-radius: 0.8rem;
  padding: 2.4rem;
`
export const CardHeader = styled.div``

export const DateText = styled.div`
  font-size: ${theme.font.sizes.font12};
  color: #ffcc4d;
  margin-bottom: 0.8rem;
`
export const CardTitle = styled.div`
  font-size: ${theme.font.sizes.font24};
  font-weight: ${theme.font.weight.black};
`

export const Divider = styled.div`
  border-bottom: 1px solid #ffffff26;
  max-width: 30rem;
  margin: 1.6rem;
`

export const CardDescription = styled.div``

export const CardBody = styled.div``

export const TopicText = styled.ul``

export const ListTitle = styled.li`
  font-size: ${theme.font.sizes.font16};
  font-weight: ${theme.font.weight.medium};
  margin: 2.4rem 0 0.8rem;
`
export const ListText = styled.li`
  font-size: ${theme.font.sizes.font16};
  font-weight: ${theme.font.weight.light};
  line-height: 155%;
  /* margin-left: 2rem; */
  margin: 0.8rem 0 0 2rem;
`

export const SubList = styled.li``
