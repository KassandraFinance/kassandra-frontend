import styled from 'styled-components'
import theme from '../../../styles/theme'

export const ProposalOverview = styled.div`
  position: relative;

  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  max-width: 44rem;
  padding: ${theme.spacings.space24};

  background-color: rgba(255, 255, 255, 0.04);
  border-radius: 2rem;
  border: 0.1rem solid rgba(255, 255, 255, 0.15);

  @media (max-width: 420px) {
    width: 100%;
    padding: ${theme.spacings.space16};
  }
`

export const ProposalOverviewIsLoading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 39rem;
  height: 13rem;
  margin-left: 2rem;

  @media (max-width: 960px) {
    width: 30rem;
    height: 12.8rem;
  }
`

export const Status = styled.ul`
  width: 21.2rem;
  margin-right: ${theme.spacings.space56};

  @media (max-width: 960px) {
    width: 16rem;
    margin-right: ${theme.spacings.space32};
  }

  h3 {
    margin-bottom: 0.4rem;

    font-size: ${theme.font.sizes.font16};
    line-height: ${theme.font.sizes.font16};
    font-weight: ${theme.font.weight.bold};

    @media (max-width: 960px) {
      font-size: ${theme.font.sizes.font14};
      line-height: ${theme.font.sizes.font14};
    }
  }

  animation: isLoading 950ms ease;
  @keyframes isLoading {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`

interface IProposalStateProps {
  ProposalState: string;
}

// eslint-disable-next-line prettier/prettier
export const ProposalStateList = styled.li<IProposalStateProps>`
  display: flex;
  justify-content: space-between;
  padding: 1.2rem 0;

  color: ${theme.colors.grayDisabled};
  font-size: ${theme.font.sizes.font16};
  line-height: ${theme.font.sizes.font16};
  font-weight: ${theme.font.weight.light};

  border-bottom: 0.1rem solid ${theme.colors.grayDisabled};

  @media (max-width: 960px) {
    font-size: ${theme.font.sizes.font14};
    line-height: ${theme.font.sizes.font14};
  }

  span {
    display: flex;
    align-items: center;
    margin-left: 0.5rem;

    &:first-child {
      &:before {
        content: '';
        display: inline-block;

        width: ${theme.spacings.space16};
        height: ${theme.spacings.space16};
        margin-right: ${theme.spacings.space16};

        border-radius: 0.3rem;
        background-color: ${props => {
          switch (props.ProposalState) {
            case 'Failed':
              return theme.colors.red
            case 'Active':
              return theme.colors.magenta
            case 'Succeeded':
              return theme.colors.green
            default:
              return 'white'
          }
        }};
      }
    }
  }

  &:last-child {
    padding-top: 1.2rem;
    padding-bottom: 0;
    border: none;
  }
`

export const ProposalOverviewGraphic = styled.div`
  @media (max-width: 320px) {
    margin-top: 3rem;
    margin-left: -1rem;
  }

  @media (max-width: 300px) {
    margin-left: -3rem;
  }
`

export const Total = styled.div`
  position: absolute;
  top: 7rem;
  right: 7rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 960px) {
    top: 7.2rem;
    right: 7.2rem;
  }

  @media (max-width: 420px) {
    top: 6.5rem;
    right: 6.3rem;
  }

  @media (max-width: 320px) {
    top: 9.5rem;
    right: 5rem;
  }

  .total {
    font-size: ${theme.font.sizes.font16};
    font-weight: ${theme.font.weight.normal};

    @media (max-width: 960px) {
      font-size: ${theme.font.sizes.font14};
    }
  }

  .value {
    font-size: ${theme.font.sizes.font16};
    font-weight: ${theme.font.weight.light};

    @media (max-width: 960px) {
      font-size: ${theme.font.sizes.font14};
    }
  }
`
