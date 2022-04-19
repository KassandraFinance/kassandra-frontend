import styled from 'styled-components'
import theme from '../../../styles/theme'

export const Overview = styled.section`
  margin-top: 4rem;
  margin-right: auto;
  margin-left: auto;
`

export const VotginCards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${theme.spacings.space32};

  margin: 0 auto;

  @media (max-width: 960px) {
    gap: 2.3rem;
  }

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    gap: ${theme.spacings.space16};

    margin-top: ${theme.spacings.space32};
  }
`

export const VotingDataCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1.5rem;

  background: rgba(255, 255, 255, 0.05);
  border: 0.1rem solid rgba(255, 255, 255, 0.2);
  border-radius: 1.2rem;

  padding: 2.3rem;
  @media (max-width: 700px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: ${theme.spacings.space18};
    border-radius: 0.8rem;
  }
`

export const TextVoting = styled.span`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  font-size: ${theme.font.sizes.font14};
  font-weight: ${theme.font.weight.medium};
  line-height: 115%;
  height: 1.6rem;
  color: ${theme.colors.grayDisabled};
  //text-align: center;

  @media (max-width: 960px) {
    font-size: ${theme.font.sizes.font14};
  }
`

export const Tooltip = styled.div`
  //margin-top: -1px;
  //margin-left: 8px;

  padding: 0.1rem;

  //position: relative;
  z-index: 19;
`

export const ValueVoting = styled.span`
  font-size: ${theme.font.sizes.font32};
  font-weight: ${theme.font.weight.medium};

  //margin-top: ${theme.spacings.space24};

  @media (max-width: 960px) {
    font-size: ${theme.font.sizes.font24};
  }
  @media (max-width: 700px) {
    font-size: ${theme.font.sizes.font18};
    margin-top: 0;
  }
`

export const Links = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  max-width: 36rem;
  margin-top: 1.6rem;

  @media (max-width: 700px) {
    max-width: 100%;
  }

  a {
    display: flex;
    align-items: center;
    transition: 200ms;

    color: ${theme.colors.snow};
    font-size: ${theme.font.sizes.font16};
    font-weight: ${theme.font.weight.light};
    text-decoration: none;

    @media (max-width: 960px) {
      font-size: ${theme.font.sizes.font14};
    }
    @media (max-width: 700px) {
      font-size: ${theme.font.sizes.font12};
    }

    &:hover {
      color: ${theme.colors.cyan};
      cursor: pointer;
    }

    svg {
      margin-left: ${theme.spacings.space8};
    }
    &:hover {
      > svg {
        path {
          stroke: ${theme.colors.cyan} !important;
        }
      }
    }
  }
`
