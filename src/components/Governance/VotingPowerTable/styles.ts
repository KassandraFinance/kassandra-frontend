import styled from 'styled-components'
import theme from '../../../styles/theme'

export const VotingPowerTable = styled.section`
  margin-top: 4rem;
  margin-right: auto;
  margin-left: auto;

  @media (max-width: 700px) {
    margin-top: ${theme.spacings.space56};
  }
`

export const Table = styled.table`
  width: 100%;
  margin-top: 4rem;

  font-size: ${theme.font.sizes.font14};
  text-indent: initial;

  border-collapse: collapse;
  border-radius: 2rem;
  -webkit-border-radius: 2rem;
  -moz-border-radius: 2rem;
  border-spacing: 0;
  -webkit-border-horizontal-spacing: 0;
  -webkit-border-vertical-spacing: 0;

  @media (max-width: 540px) {
    border-radius: 1.2rem;
    -webkit-border-radius: 1.2rem;
    -moz-border-radius: 1.2rem;
  }

  overflow: hidden;

  thead {
    background-color: rgba(0, 0, 0, 0.25);
  }
  tbody {
    max-height: 100%;

    background-color: rgba(255, 255, 255, 0.04);

    a {
      &:hover {
        background-color: ${theme.colors.darkPurple} !important;

        cursor: pointer;
      }
    }
    tr {
      margin-top: -0.1rem;
      border-top: 0.1rem solid rgba(255, 255, 255, 0);
      border-bottom: 0.1rem solid rgba(255, 255, 255, 0.3);
      transition: background-color ease-in-out 0.3s, border ease-in-out 0.3s,
        padding ease-in-out 0.3s, margin ease-in-out 0.3s;

      &:hover {
        margin: 0;
        margin-top: -0.1rem;
        padding: 2.4rem 3.2rem;

        background-color: ${theme.colors.darkPurple};
        border-top: 0.1rem solid ${theme.colors.grayDisabled};
        border-bottom: 0.1rem solid ${theme.colors.grayDisabled};

        cursor: pointer;

        @media (max-width: 540px) {
          padding: 2rem;
        }
      }

      &:first-child {
        border-top: none;
      }

      &:last-child,
      last-child:hover {
        border-bottom: none;
      }
    }
  }
  /* @media (max-width: 768px) {
    display: block;
    overflow: auto;
  } */
`

export const Tr = styled.tr`
  display: grid;
  grid-template-columns: 1fr 4fr repeat(4, 3fr);
  align-items: center;

  margin: 0 3.2rem;
  padding: 2.4rem 0;

  @media (max-width: 540px) {
    margin: 0 2rem;
    padding: 2rem 0;
  }
  /* @media (max-width: 768px) {
    grid-template-columns: auto 18rem;
  }

  @media (max-width: 540px) {
    grid-template-columns: 32rem 13rem;
  }

  @media (max-width: 420px) {
    grid-template-columns: 24rem 13rem;
  }

  @media (max-width: 380px) {
    grid-template-columns: 21rem 12rem;
  } */

  @media (max-width: 660px) {
    grid-template-columns: 1fr 4fr repeat(3, 2fr);
  }

  @media (max-width: 540px) {
    grid-template-columns: 1fr 4fr repeat(2, 2fr);
  }

  @media (max-width: 420px) {
    grid-template-columns: 1fr 5fr 2fr;
  }

  .rank,
  .vote-power,
  .vote-weight,
  .proposals-created,
  .proposals-voted {
    font-weight: ${theme.font.weight.medium};
  }

  .proposals-voted {
    @media (max-width: 660px) {
      display: none;
    }
  }

  .vote-weight {
    @media (max-width: 540px) {
      display: none;
    }
  }

  .proposals-created {
    @media (max-width: 420px) {
      display: none;
    }
  }

  .rank {
    @media (max-width: 420px) {
      /* text-align: right; */
      /* justify-content: flex-end; */
    }
  }

  .vote-power {
    @media (max-width: 420px) {
      justify-content: flex-end;

      text-align: right;
    }
  }

  a {
    text-decoration: none;
  }
`

export const Th = styled.th`
  font-weight: 300 !important;
  line-height: ${theme.font.sizes.font18};
  font-size: ${theme.font.sizes.font18};

  @media (max-width: 960px) {
    line-height: ${theme.font.sizes.font14};
    font-size: ${theme.font.sizes.font14};
  }
  @media (max-width: 540px) {
    line-height: ${theme.font.sizes.font12};
    font-size: ${theme.font.sizes.font12};
  }
`

export const Td = styled.td`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  font-size: ${theme.font.sizes.font18};
  font-weight: ${theme.font.weight.light};
  letter-spacing: 0.5px;

  @media (max-width: 960px) {
    line-height: ${theme.font.sizes.font16};
    font-size: ${theme.font.sizes.font16};
  }

  @media (max-width: 768px) {
    line-height: ${theme.font.sizes.font14};
    font-size: ${theme.font.sizes.font14};
  }

  @media (max-width: 660px) {
    line-height: ${theme.font.sizes.font12};
    font-size: ${theme.font.sizes.font12};
  }

  .user-image {
    width: 3.2rem;
    border-radius: 50%;
  }

  span {
    margin-left: 16px;
    @media (max-width: 540px) {
      margin-left: 0.8rem;
    }
  }
`

export const TextProposal = styled.p`
  color: ${theme.colors.snow};
  line-height: ${theme.font.sizes.font18};
  font-size: ${theme.font.sizes.font18};
  font-weight: ${theme.font.weight.normal};

  margin-bottom: ${theme.spacings.space16};

  @media (max-width: 768px) {
    line-height: ${theme.font.sizes.font16};
    font-size: ${theme.font.sizes.font16};
  }

  @media (max-width: 540px) {
    line-height: ${theme.font.sizes.font12};
    font-size: ${theme.font.sizes.font12};
  }
`

export const StatusProposal = styled.span`
  color: ${theme.colors.snow};
  line-height: ${theme.font.sizes.font16};
  font-size: ${theme.font.sizes.font16};
  font-weight: ${theme.font.weight.medium};
  text-transform: capitalize;

  margin-right: ${theme.spacings.space16};

  @media (max-width: 768px) {
    line-height: ${theme.font.sizes.font14};
    font-size: ${theme.font.sizes.font14};
  }

  @media (max-width: 540px) {
    line-height: 1rem;
    font-size: 1rem;
  }
`

export const TimeFrame = styled.p`
  color: ${theme.colors.snow};
  line-height: ${theme.font.sizes.font16};
  font-size: ${theme.font.sizes.font16};
  font-weight: ${theme.font.weight.light};
  text-transform: capitalize;

  margin-bottom: ${theme.spacings.space16};

  @media (max-width: 960px) {
    display: none;
  }

  @media (max-width: 768px) {
    line-height: ${theme.font.sizes.font14};
    font-size: ${theme.font.sizes.font14};
  }

  @media (max-width: 540px) {
    line-height: 1rem;
    font-size: 1rem;
  }
`

export const TimeFrameMobile = styled.p`
  display: none;

  @media (max-width: 960px) {
    display: block;

    color: ${theme.colors.snow};
    line-height: ${theme.font.sizes.font16};
    font-size: ${theme.font.sizes.font16};
    font-weight: ${theme.font.weight.light};
    text-transform: capitalize;

    margin-bottom: ${theme.spacings.space16};
    @media (max-width: 768px) {
      line-height: ${theme.font.sizes.font14};
      font-size: ${theme.font.sizes.font14};
    }

    @media (max-width: 540px) {
      line-height: 1rem;
      font-size: 1rem;
    }
  }
`

export const StateMutability = styled.span`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  color: ${theme.colors.snow};
  line-height: ${theme.font.sizes.font18};
  font-size: ${theme.font.sizes.font18};
  font-weight: ${theme.font.weight.medium};
  text-transform: capitalize;

  @media (max-width: 960px) {
    line-height: ${theme.font.sizes.font16};
    font-size: ${theme.font.sizes.font16};
  }

  @media (max-width: 768px) {
    line-height: ${theme.font.sizes.font14};
    font-size: ${theme.font.sizes.font14};
  }

  @media (max-width: 540px) {
    line-height: 1rem;
    font-size: 1rem;
  }

  span {
    margin-right: ${theme.spacings.space16};
    @media (max-width: 768px) {
      line-height: ${theme.font.sizes.font14};
      font-size: ${theme.font.sizes.font14};
    }

    @media (max-width: 540px) {
      line-height: 1rem;
      font-size: 1rem;
    }
  }
`
