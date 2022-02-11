import styled from 'styled-components'
import theme from '../../../styles/theme'

export const ProposalOverview = styled.div`
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 20px;

  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  max-width: 44rem;
  padding: ${theme.spacings.space24};

  position: relative;

  @media (max-width: 420px) {
    padding: ${theme.spacings.space16};
    width: 100%;
  }
`

export const Status = styled.ul`
  margin-right: ${theme.spacings.space56};

  width: 212px;

  @media (max-width: 960px) {
    margin-right: ${theme.spacings.space32};

    width: 160px;
  }

  h3 {
    line-height: ${theme.font.sizes.font16};
    font-size: ${theme.font.sizes.font16};
    font-weight: ${theme.font.weight.bold};

    margin-bottom: 4px;
    @media (max-width: 960px) {
      line-height: ${theme.font.sizes.font14};
      font-size: ${theme.font.sizes.font14};
    }
  }
  li {
    border-bottom: 1px solid ${theme.colors.grayDisabled};
    color: ${theme.colors.grayDisabled};
    line-height: ${theme.font.sizes.font16};
    font-size: ${theme.font.sizes.font16};
    font-weight: ${theme.font.weight.light};

    display: flex;
    justify-content: space-between;

    padding: 12px 0;

    @media (max-width: 960px) {
      line-height: ${theme.font.sizes.font14};
      font-size: ${theme.font.sizes.font14};
    }

    span {
      &:first-child {
        &:before {
          content: '';
          display: inline-block;
          background-color: ${theme.colors.green};
          border-radius: 3px;

          width: ${theme.spacings.space16};
          height: ${theme.spacings.space16};
          margin-right: ${theme.spacings.space16};
        }
      }
    }

    &:last-child {
      border: none;
      padding-top: 12px;
      padding-bottom: 0;
    }
  }
`

export const Total = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: absolute;
  top: 70px;
  right: 72px;

  @media (max-width: 960px) {
    top: 60px;
    right: 62px;
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
