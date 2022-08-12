import styled from 'styled-components'
import theme from '../../../styles/theme'

export const OurTeamContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10rem;
`

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 576px) {
    align-items: flex-start;
    padding-left: 1.6rem;
  }
`

export const TitlePurple = styled.h3`
  color: #e843c4;
  font-size: ${theme.font.sizes.font14};
  font-weight: ${theme.font.weight.normal};
  letter-spacing: 0.4em;
  text-transform: uppercase;
`

export const Divider = styled.div`
  width: 10rem;
  height: 0.3rem;
  margin-top: 2.4rem;
  margin-bottom: 2.4rem;

  background: linear-gradient(99.25deg, #e843c4 0%, #ffbf00 100%, #ffbf00 100%);
`

export const Title = styled.h2`
  font-size: ${theme.font.sizes.font40};
  font-weight: ${theme.font.weight.bold};
  line-height: 114%;

  @media (max-width: 810px) {
    font-size: ${theme.font.sizes.font32};
  }

  @media (max-width: 375px) {
    font-size: ${theme.font.sizes.font24};
  }
`

export const TeamCardList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 110rem;
  padding-left: 3.6rem;
  padding-right: 3.6rem;
  margin-top: 8rem;

  //576
  @media (max-width: 992px) {
    width: 90rem;
  }

  @media (max-width: 780px) {
    width: 70rem;
  }

  @media (max-width: 576px) {
    width: 50rem;
    padding-left: 1.6rem;
    padding-right: 1.6rem;
  }

  img {
    display: flex;
    justify-self: center;
  }
`
