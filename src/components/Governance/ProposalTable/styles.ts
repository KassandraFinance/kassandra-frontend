import styled from 'styled-components'
import theme from '../../../styles/theme'

export const ProposalTable = styled.section`
  margin-top: 4rem;
  margin-right: auto;
  margin-left: auto;

  @media (max-width: 700px) {
    margin-top: ${theme.spacings.space56};
  }

  @media (max-width: 560px) {
    margin-top: 2.4rem !important;
  }

  table {
    border-collapse: collapse;
    width: 100%;

    font-size: ${theme.font.sizes.font14};

    border-radius: 2rem;
    -webkit-border-radius: 2rem;
    -moz-border-radius: 2rem;
    overflow: hidden;

    @media (max-width: 540px) {
      border-radius: 1.2rem;
      -webkit-border-radius: 1.2rem;
      -moz-border-radius: 1.2rem;
    }

    tbody {
      background-color: rgba(255, 255, 255, 0.04);

      tr {
        cursor: pointer;

        &:last-child {
          .td-container,
          .td-container:hover {
            border-bottom: none;
          }
        }

        &:first-child {
          .td-container,
          .td-container:hover {
            border-top: none;
          }
        }
      }
    }
  }
`

export const Th = styled.thead`
  font-weight: 300;
  line-height: ${theme.font.sizes.font18};
  font-size: ${theme.font.sizes.font18};

  background-color: rgba(0, 0, 0, 0.25);

  @media (max-width: 768px) {
    line-height: ${theme.font.sizes.font14};
    font-size: ${theme.font.sizes.font14};
  }

  @media (max-width: 540px) {
    line-height: ${theme.font.sizes.font12};
    font-size: ${theme.font.sizes.font12};
  }

  tr {
    td {
      padding: 2.4rem 3.2rem;

      @media (max-width: 768px) {
        padding: 2.4rem;
      }

      @media (max-width: 540px) {
        padding: 2rem;
      }

      &:last-child {
        width: 22rem;
        text-align: right;
      }
    }
  }
`

export const Td = styled.td`
  .td-container {
    height: 10.6rem;

    display: grid;
    align-items: center;
    grid-template-columns: auto 1fr 0.5fr;
    row-gap: 0.8rem;
    grid-template-areas:
      'a a b'
      'c d e';

    padding: 2.4rem 0;
    margin: 0 3.2rem;
    margin-top: -0.1rem;

    border-top: 0.1rem solid rgba(255, 255, 255, 0);
    border-bottom: 0.1rem solid rgba(255, 255, 255, 0.3);

    transition: background-color ease-in-out 0.3s, border ease-in-out 0.3s,
      padding ease-in-out 0.3s, margin ease-in-out 0.3s;

    @media (max-width: 768px) {
      height: 9.8rem;
      grid-template-areas:
        'a a a'
        'c b e';

      margin: 0 2.4rem;
      margin-top: -0.1rem;
      padding: 2.4rem 0;
    }

    @media (max-width: 540px) {
      height: 7rem;

      margin: 0 2rem;
      margin-top: -0.1rem;
      padding: 2rem 0;
    }

    &:hover {
      margin: 0;
      margin-top: -0.1rem;
      padding: 2.4rem 3.2rem;

      background-color: ${theme.colors.darkPurple};
      border-top: 0.1rem solid ${theme.colors.grayDisabled};
      border-bottom: 0.1rem solid ${theme.colors.grayDisabled};

      @media (max-width: 768px) {
        padding: 2.4rem;
      }

      @media (max-width: 540px) {
        padding: 2rem;
      }
    }
  }
`

export const TextProposal = styled.p`
  grid-area: a;

  color: ${theme.colors.snow};
  line-height: 100%;
  font-size: ${theme.font.sizes.font24};
  font-weight: ${theme.font.weight.normal};

  @media (max-width: 768px) {
    line-height: 100%;
    font-size: ${theme.font.sizes.font18};
  }

  @media (max-width: 540px) {
    line-height: ${theme.font.sizes.font12};
    font-size: ${theme.font.sizes.font12};
  }
`

interface IStatusProposalColor {
  statusColor: string;
}

// prettier-ignore
export const StatusProposal = styled.span<IStatusProposalColor>`
  grid-area: c;

  color: ${({ statusColor }) => statusColor};
  line-height: 100%;
  font-size: ${theme.font.sizes.font16};
  font-weight: ${theme.font.weight.medium};
  text-transform: capitalize;

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
  grid-area: b;
  text-align: right;

  color: ${theme.colors.snow};
  line-height: 100%;
  font-size: ${theme.font.sizes.font16};
  font-weight: ${theme.font.weight.light};

  @media (max-width: 768px) {
    margin-left: 1.6rem;

    text-align: left;
    line-height: ${theme.font.sizes.font14};
    font-size: ${theme.font.sizes.font14};
  }

  @media (max-width: 540px) {
    margin-left: 0.8rem;

    line-height: 1rem;
    font-size: 1rem;
  }
`

// prettier-ignore
export const StateMutability = styled.span<IStatusProposalColor>`
  grid-area: e;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  text-align: right;
  line-height: 100%;
  font-size: ${theme.font.sizes.font24};
  font-weight: ${theme.font.weight.medium};
  color: ${({ statusColor }) => statusColor};
  text-transform: capitalize;

  img {
    width: 2.4rem;
  }

  @media (max-width: 768px) {
    line-height: 100%;
    font-size: ${theme.font.sizes.font18};
  }

  @media (max-width: 540px) {
    line-height: 1rem;
    font-size: 1rem;
  }

  span {
    margin-right: ${theme.spacings.space16};

    @media (max-width: 768px) {
      line-height: 100%;
      font-size: ${theme.font.sizes.font18};
    }

    @media (max-width: 540px) {
      line-height: 1rem;
      font-size: 1rem;
    }
  }

  .status-icon-container {
    width: 2.4rem;
    height: 2.4rem;

     @media (max-width: 768px) {
      width: 1.4rem;
      height: 1.4rem;
    }
  }
`
