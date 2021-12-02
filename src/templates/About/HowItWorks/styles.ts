import styled from 'styled-components'
import theme from '../../../styles/theme'

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 96.4rem;
  margin: 0 auto;
  padding: 0 3.2rem;
`
export const Divider = styled.div`
  width: 10rem;
  height: 0.3rem;
  background-color: #e843c4;
  margin: 0 auto 2rem;
`

export const Title = styled.h2`
  font-size: ${theme.font.sizes.font40};
  font-weight: ${theme.font.weight.bold};
  color: #ffffff;
  line-height: 110%;
  margin: 0 auto 9.4rem;
`
export const ScheduleGraphWrapper = styled.div`
  width: 94rem;
  margin-bottom: 10rem;
`
export const ScheduleGraph = styled.div`
  max-width: 100%;
`
export const ScheduleTitle = styled.div`
  max-width: 100%;
  border-bottom: 1px solid #ffffff24;
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  margin-bottom: 5rem;
`

export const TitleandIcon = styled.div`
  display: flex;
  margin-bottom: 1.6rem;
  h3 {
    font-size: ${theme.font.sizes.font24};
    font-weight: ${theme.font.weight.bold};
    color: #ffffff;
    line-height: 104%;
  }
`
export const Icon = styled.img`
  max-width: 1.75rem;
  margin-right: 2rem;
`

export const Link = styled.a`
  text-decoration: none;
  display: flex;
  align-items: flex-end;
  margin-bottom: 1.6rem;
  cursor: pointer;
  transition: 0.15s;
  color: ${theme.colors.snow};
  span {
    font-size: ${theme.font.sizes.font14};
    letter-spacing: 0;
    display: flex;
    margin-right: 20px;
  }
  svg {
    margin-left: ${theme.spacings.space8};
  }
  &:hover {
    color: ${theme.colors.cyan};
    > svg {
      path {
        stroke: ${theme.colors.cyan};
      }
    }
  }
`

export const DistributionGraphWrapper = styled.div`
  width: 94rem;
`

export const DistributionTitle = styled.div`
  max-width: 100%;
  border-bottom: 1px solid #ffffff24;
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  margin-bottom: 5rem;
`
export const DistributionChart = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-column-gap: 14rem;
  max-width: 100%;
  @media (max-width: 96rem) {
    grid-template-columns: 1fr;
  }
`
export const DistributionText = styled.div`
  max-width: 26rem;
  display: flex;
  flex-direction: column;
  @media (max-width: 96rem) {
    max-width: 32rem;
    margin: 2.4rem auto 0;
  }
  h1 {
    font-size: ${theme.font.sizes.font24};
    font-weight: ${theme.font.weight.black};
    line-height: 110%;
    margin-bottom: 2.4rem;
  }
  p {
    font-size: ${theme.font.sizes.font16};
    font-weight: ${theme.font.weight.light};
    line-height: 180%;
  }
`
