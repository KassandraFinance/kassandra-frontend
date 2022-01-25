import styled from 'styled-components'
import theme from '../../../styles/theme'

export const CardWrapper = styled.div`
  border: 2px solid ${props => props.color};
  border-radius: 16px;
  background: #21142654;

  max-width: 40rem;
  min-height: 48rem;

  display: flex;
  flex-direction: column;
  padding: 3.2rem;

  backdrop-filter: blur(1.4px);
  -webkit-backdrop-filter: blur(1.4px);

  @media (min-width: 700px) and (max-width: 800px) {
    border: 2.5px solid ${props => props.color};
  }

  @media (max-width: 700px) {
    margin: 0 auto;
  }
  @media (max-width: 440px) {
    max-width: 38rem;
  }
  @media (max-width: 380px) {
    max-width: 34rem;
  }
  @media (max-width: 330px) {
    max-width: 30rem;
  }
`
export const CardHeader = styled.div``

export const DateText = styled.div`
  font-size: ${theme.font.sizes.font12};
  color: #ffcc4d;
  margin-bottom: 0.8rem;
`

export const TitleandIcon = styled.div`
  display: flex;
  align-items: center;
`

export const TimerIcon = styled.div`
  max-width: 2.4rem;
  margin-right: 0.8rem;
`

export const CardTitle = styled.div`
  font-size: ${theme.font.sizes.font24};
  font-weight: ${theme.font.weight.black};
  @media (max-width: 1024px) {
    font-size: ${theme.font.sizes.font18};
  }
`

export const Divider = styled.div`
  border-bottom: 1px solid #ffffff26;
  max-width: 100%;
  margin: 1.6rem 0;
  @media (max-width: 570px) {
    margin: 0.8rem 0;
  }
`

export const CardDescription = styled.div``

export const CardBody = styled.div``

export const ListTitle = styled.li`
  font-size: ${theme.font.sizes.font16};
  font-weight: ${theme.font.weight.medium};
  margin: 2.4rem 0 0.8rem;
  @media (max-width: 1024px) {
    font-size: ${theme.font.sizes.font14};
  }
`
export const ListText = styled.li`
  font-size: ${theme.font.sizes.font16};
  font-weight: ${theme.font.weight.light};
  line-height: 155%;
  /* margin-left: 2rem; */
  margin: 0.8rem 0 0 2rem;
  @media (max-width: 670px) {
    font-size: ${theme.font.sizes.font14};
  }
`
