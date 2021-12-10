import styled from 'styled-components'
import theme from '../../styles/theme'

export const CardWrapper = styled.div`
  max-width: 36rem;
  max-height: 36rem;
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
`
export const CardTitle = styled.div``

export const CardDescription = styled.div``

export const CardBody = styled.div``

export const TopicText = styled.ul``

export const ListTitle = styled.li``

export const SubList = styled.li``
