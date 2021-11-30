import styled from 'styled-components'
import theme from '../../styles/theme'

export const BackgroundStakeFarm = styled.div`
  background: url('assets/newbg4.svg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;

  box-shadow: inset 0px -20px 20px 0px #151117;
  padding: 0 0 80px;
`

export const StakeFarm = styled.section`
  max-width: 945px;
  margin: 0 auto;
`

export const StakeWithPowerVote = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 50px 0 50px;
  @media (max-width: 960px) {
    flex-wrap: wrap;
    margin: 50px 30px;
  }
`

interface INameStakeProps {
  left?: boolean;
}

// eslint-disable-next-line prettier/prettier
export const NameStake = styled.div<INameStakeProps>`
  p {
    color: #c4c4c4;
    font-size: ${theme.font.sizes.font18};
    text-transform: uppercase;

    margin-left: 32px;
  }
  @media (max-width: 960px) {
    ${props =>
      props.left &&
      `
      padding-left: 30px;
    `}
  }
`

export const Name = styled.div`
  display: flex;
  align-items: center;
  max-width: 100%;

  h1 {
    line-height: ${theme.font.sizes.font32};
    font-size: ${theme.font.sizes.font32};
    font-weight: ${theme.font.weight.bold};
    margin-bottom: 12px;
    margin-left: 10px;
  }

  img {
    margin-bottom: 14px;
  }
`

export const VotingPower = styled.div`
  background: rgba(255, 255, 255, 0.04);
  border-radius: ${theme.border.radius};
  padding: 16px;
  width: 260px;
`

export const YourVotingPower = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 6px;
  span {
    font-size: ${theme.font.sizes.font12};
    font-weight: ${theme.font.weight.medium};
    text-transform: uppercase;
  }
`

export const TotalVotingPower = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    font-size: ${theme.font.sizes.font12};
    font-weight: ${theme.font.weight.light};
    text-transform: uppercase;
  }
`

export const GridStaking = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(280px, 295px));
  justify-content: space-between;
  @media (max-width: 960px) {
    grid-template-columns: repeat(2, minmax(280px, 295px));
    padding: 0 30px;
    gap: 30px;
    max-width: 700px;
    margin: 0 auto;
  }
  @media (max-width: 680px) {
    grid-template-columns: repeat(1, minmax(280px, 295px));
    justify-content: center;
  }
`
