import styled from 'styled-components'
import theme from '../../../styles/theme'

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 96.4rem;
  margin: 0 auto;
  @media (max-width: 1100px) {
    margin: 0 auto;
    padding: 0 3.2rem;
  }
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
  max-width: 94rem;
  margin-bottom: 10rem;
`
export const ScheduleGraph = styled.div`
  max-width: 100%;
  img {
    max-width: 100%;
  }
  @media (max-width: 580px) {
    display: none;
  }
`
export const ScheduleGraphMobile = styled.div`
  max-width: 100%;
  img {
    max-width: 100%;
  }
  @media (min-width: 580px) {
    display: none;
  }
`
export const ScheduleTitle = styled.div`
  max-width: 100%;
  border-bottom: 1px solid #ffffff24;
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  margin-bottom: 5rem;
  //flex direction column on media max-width: 920px
  @media (max-width: 920px) {
    flex-direction: column;
  }
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
  width: 100%;
`

export const DistributionTitle = styled.div`
  max-width: 100%;
  border-bottom: 1px solid #ffffff24;
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  margin-bottom: 5rem;
  @media (max-width: 920px) {
    flex-direction: column;
  }
`
export const DistributionChart = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-column-gap: 13rem;
  max-width: 100%;
  @media (max-width: 960px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }
  img {
    max-width: 100%;
  }
`
export const DistributionText = styled.div`
  max-width: 28rem;
  display: flex;
  flex-direction: column;
  h1 {
    font-size: ${theme.font.sizes.font24};
    font-weight: ${theme.font.weight.black};
    line-height: 110%;
    margin-bottom: 1.6rem;
  }
  p {
    font-size: ${theme.font.sizes.font16};
    font-weight: ${theme.font.weight.light};
    line-height: 155%;
  }
  @media (max-width: 96rem) {
    max-width: 32rem;
    margin: 2.4rem auto 0;
  }
  @media (max-width: 760px) {
    margin: 4rem auto 0;
    max-width: 100%;
  }
  @media (max-width: 450px) {
    h1 {
      font-size: ${theme.font.sizes.font18};
    }
    p {
      font-size: ${theme.font.sizes.font14};
    }
  }
`
