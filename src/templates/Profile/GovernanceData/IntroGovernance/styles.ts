import styled from 'styled-components'
import theme from '../../../../styles/theme'

export const IntroWalletAddress = styled.section`
  margin-top: ${theme.spacings.space16};
`

interface IHorizontalLineProps {
  none?: boolean;
}

// prettier-ignore
export const HorizontalLine =styled.div<IHorizontalLineProps>`
  content: '';
  display: block;

  width: 0.1rem;
  height: 100%;

  background: rgba(255, 255, 255, 0.2);

  @media (max-width: 680px) {
    display: ${props => (props.none ? 'none' : 'block')};
  }

  @media (max-width: 576px) {
    height: 1.6rem;
  }
`

export const VerticalLine = styled.div`
  display: none;

  @media (max-width: 680px) {
    content: '';
    display: block;

    width: 100%;
    height: 0.1rem;

    background: rgba(255, 255, 255, 0.2);
  }
`

export const VotingPowerContent = styled.div`
  display: flex;
  gap: ${theme.spacings.space24};

  margin-top: ${theme.spacings.space24};
  @media (max-width: 1100px) {
    flex-direction: column;
  }

  @media (max-width: 576px) {
    gap: ${theme.spacings.space16};

    margin-top: ${theme.spacings.space16};
  }
`

export const AllVotingPowerCard = styled.div`
  display: grid;
  grid-template-columns: 3fr 0.1rem 2fr;
  gap: 2.4rem;

  min-width: 75rem;
  padding: 2.3rem;

  align-items: center;

  background: rgba(255, 255, 255, 0.04);
  border: 0.01rem solid rgba(255, 255, 255, 0.2);
  border-radius: 1.2rem;

  @media (max-width: 1100px) {
    grid-template-columns: 3fr 0.01rem 2fr;

    min-width: 20rem;
  }

  @media (max-width: 680px) {
    grid-template-columns: 1fr;
  }

  @media (max-width: 576px) {
    padding: 1.6rem;
    border-radius: 0.8rem;
  }
`

export const AddressTotalVotingPower = styled.div`
  display: flex;
  flex-direction: column;

  padding: 2.4rem;
  width: 100%;

  background: rgba(255, 255, 255, 0.04);
  border: 0.01rem solid rgba(255, 255, 255, 0.2);
  border-radius: 1.2rem;

  @media (max-width: 1100px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    padding: 2.8rem 2.4rem;
  }

  @media (max-width: 576px) {
    flex-direction: row;
    justify-content: space-between;
    border-radius: 0.8rem;
  }

  .address-total-voting-power {
    display: flex;
    margin-bottom: 0.7rem;

    color: ${theme.colors.grayDisabled};
    line-height: ${theme.font.sizes.font20};
    font-size: ${theme.font.sizes.font14};
    font-weight: ${theme.font.weight.medium};

    @media (max-width: 1100px) {
      font-size: ${theme.font.sizes.font16};
      margin-bottom: 0;
    }

    @media (max-width: 576px) {
      font-size: ${theme.font.sizes.font12};

      max-width: 16rem;
      margin-bottom: 0;
    }
    @media (max-width: 370px) {
      max-width: 100rem;
    }
  }

  .value-total-voting-power {
    color: ${theme.colors.snow};
    line-height: ${theme.font.sizes.font32};
    font-size: ${theme.font.sizes.font32};
    font-weight: ${theme.font.weight.medium};

    @media (max-width: 1100px) {
      font-size: ${theme.font.sizes.font24};
    }

    @media (max-width: 576px) {
      font-size: ${theme.font.sizes.font18};
    }
  }
`

export const Tooltip = styled.div`
  position: relative;

  margin-top: -0.01rem;
  margin-left: 0.8rem;
  padding: 0.01rem;
  height: 2.2rem;

  z-index: 20;
`

export const ReceivedAndOwnedVotingPower = styled.div`
  font-weight: ${theme.font.weight.medium};
  font-size: ${theme.font.sizes.font14};
  font-weight: ${theme.font.weight.medium};
  text-transform: uppercase;

  .gray-color {
    color: ${theme.colors.grayDisabled};
  }

  @media (max-width: 576px) {
    font-size: ${theme.font.sizes.font12};
  }
  .bold {
    @media (max-width: 576px) {
      font-size: ${theme.font.sizes.font14};
    }
  }
`

export const OwnedVotingPower = styled.div`
  display: flex;
  justify-content: space-between;

  margin-bottom: 1.2rem;
`

export const ReceivedVotingPower = styled.div`
  display: flex;
  justify-content: space-between;
`

export const ManageDelegation = styled.div`
  border-radius: 1.2rem;

  width: 100%;

  @media (max-width: 576px) {
    padding: ${theme.spacings.space16};
  }

  a {
    display: flex;
    justify-content: center;

    margin-top: 1.1rem;
    margin-bottom: 0;
  }

  button {
    width: 100%;
  }
`
