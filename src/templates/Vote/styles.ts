import styled from 'styled-components'
import theme from '../../styles/theme'

export const BackgroundVote = styled.div``

export const VoteContent = styled.div`
  max-width: 1140px;
  margin: 0 auto;

  @media (max-width: 1200px) {
    padding: 0 30px;
  }

  @media (max-width: 540px) {
    padding: 0 16px;
  }
`

export const Title = styled.section`
  margin-bottom: ${theme.spacings.space48};

  @media (max-width: 700px) {
    margin-bottom: ${theme.spacings.space32};

    img {
      width: 18px;
    }
  }

  h1 {
    line-height: ${theme.font.sizes.font32};
    font-size: ${theme.font.sizes.font32};
    font-weight: ${theme.font.weight.bold};
    margin-left: 20px;

    @media (max-width: 960px) {
      line-height: ${theme.font.sizes.font24};
      font-size: ${theme.font.sizes.font24};
    }
    @media (max-width: 700px) {
      line-height: ${theme.font.sizes.font18};
      font-size: ${theme.font.sizes.font18};

      margin-left: 10px;
    }
  }

  h2 {
    color: #c4c4c4;
    line-height: ${theme.font.sizes.font16};
    font-size: ${theme.font.sizes.font16};
    font-weight: ${theme.font.weight.normal};
    text-transform: uppercase;

    margin-top: 12px;
    margin-left: ${theme.spacings.space48};
    @media (max-width: 960px) {
      font-size: ${theme.font.sizes.font14};
    }
    @media (max-width: 700px) {
      font-size: ${theme.font.sizes.font12};

      margin-top: ${theme.spacings.space8};
      margin-left: 30px;
    }
  }
`

export const TitleContent = styled.div`
  display: flex;
  align-items: center;
  max-width: 100%;
`

export const VotginCards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${theme.spacings.space32};

  @media (max-width: 960px) {
    gap: ${theme.spacings.space24};
  }

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    gap: ${theme.spacings.space16};
  }
`

export const VotingDataCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;

  display: flex;
  flex-direction: column;

  padding: ${theme.spacings.space24};
  @media (max-width: 700px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: ${theme.spacings.space18};
  }
`

export const TextVoting = styled.span`
  font-size: ${theme.font.sizes.font16};
  font-weight: ${theme.font.weight.light};

  display: flex;

  @media (max-width: 960px) {
    font-size: ${theme.font.sizes.font14};
  }
`

export const Tooltip = styled.div`
  margin-top: -1px;
  margin-left: 8px;

  padding: 1px;

  position: relative;
  z-index: 99;
`

export const ValueVoting = styled.span`
  font-size: ${theme.font.sizes.font32};
  font-weight: ${theme.font.weight.medium};

  margin-top: ${theme.spacings.space24};

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

  max-width: 360px;
  margin-top: 24px;

  @media (max-width: 700px) {
    max-width: 100%;
  }

  a {
    color: ${theme.colors.snow};
    font-size: ${theme.font.sizes.font16};
    font-weight: ${theme.font.weight.light};
    text-decoration: none;

    display: flex;
    align-items: center;
    transition: 200ms;

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
