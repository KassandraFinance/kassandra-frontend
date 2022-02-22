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
`

export const Table = styled.table`
  border-collapse: collapse;
  border-radius: 20px;
  -webkit-border-radius: 20px;
  -moz-border-radius: 20px;

  overflow: hidden;
  text-indent: initial;

  border-spacing: 0;
  -webkit-border-horizontal-spacing: 0;
  -webkit-border-vertical-spacing: 0;

  font-size: ${theme.font.sizes.font14};

  width: 100%;
  margin-top: 4rem;

  @media (max-width: 560px) {
    margin-top: 2.4rem !important;
  }

  thead {
    background-color: rgba(0, 0, 0, 0.25);
  }
  tbody {
    background-color: rgba(255, 255, 255, 0.04);
    max-height: 100%;

    a {
      &:hover {
        background-color: ${theme.colors.darkPurple} !important;
        cursor: pointer;
      }
    }
    tr {
      border-top: 1px solid ${theme.colors.grayDisabled};

      &:hover {
        background-color: ${theme.colors.darkPurple};
        border-top: 1px solid ${theme.colors.grayDisabled};
        border-bottom: 1px solid ${theme.colors.grayDisabled};

        margin: 0;
        padding: 2.4rem 3.2rem;

        cursor: pointer;
      }

      &:hover + tr,
      &:first-child,
      &:first-child:hover {
        border-top: none;
      }

      &:last-child:hover {
        border-bottom: none;
      }
    }
  }
  @media (max-width: 768px) {
    display: block;
    overflow: auto;
  }
`

export const Tr = styled.tr`
  display: grid;
  grid-template-columns: auto 21rem;
  align-items: center;

  margin: 0 3.2rem;
  padding: 2.4rem 0;
  @media (max-width: 768px) {
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
  }

  .proposal {
    text-align: left;
  }

  .status {
    text-align: right;
  }

  a {
    text-decoration: none;
  }
`

export const Th = styled.th`
  font-weight: 300;
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
  font-weight: ${theme.font.weight.light};
  letter-spacing: 0.5px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
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
  font-weight: ${theme.font.weight.bold};
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
  color: ${theme.colors.snow};
  line-height: ${theme.font.sizes.font18};
  font-size: ${theme.font.sizes.font18};
  font-weight: ${theme.font.weight.bold};
  text-transform: capitalize;

  display: flex;
  align-items: center;
  justify-content: flex-end;

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
