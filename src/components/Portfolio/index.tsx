import BigNumber from 'bn.js'
import useStakingContract from '../../hooks/useStakingContract'
import { Staking } from '../../constants/tokenAddresses'

import PortfolioHeading from '../../components/PortfolioHeading'
import AssetsTable from './AssetsTable'
import StakingTable from './StakingTable'
import AnyCard from '../AnyCard'

import AssetsIcon from '../../../public/assets/iconGradient/section-title-Assets.svg'
import StakedPoolsIcon from '../../../public/assets/iconGradient/section-title-Staked-pools.svg'
import aHYPE from '../../../public/assets/ahype.svg'
import AvalancheIcon from '../../../public/assets/avalancheIcon.svg'
import iconKace from '../../../public/assets/logo-kacy-stake.svg'
import iconPangolin from '../../../public/assets/logo-pangolin-40x40.svg'
import iconTraderJoe from '../../../public/assets/logo-traderJoe.svg'

import { BNtoDecimal } from '../../utils/numerals'
import * as S from './styles'

interface IstakedTokenType {
  [key: number]: {
    symbol: string,
    poolName: string,
    icons: string[],
    network: string,
    networkIcon: string
  };
}

interface IStakesType {
  pid: number;
  symbol: string;
  poolName: string;
  icons: string[];
  network: string;
  networkIcon: string;
  amount: string;
  pendingRewards: string;
  rewardPerTokenPaid: string;
}
const Portfolio = () => {
  const { userInfo } = useStakingContract(Staking)
  const [stakes, setStakes] = useState<IStakesType[]>([])
  const [totalStaked, setTotalStaked] = React.useState<Big>(Big(0))
  const stakedToken: IstakedTokenType = {
    0: {
      symbol: 'KACY',
      poolName: 'KACY',
      icons: [iconKace],
      network: 'Avalanche',
      networkIcon: AvalancheIcon
    },
    1: {
      symbol: 'KACY',
      poolName: 'KACY',
      icons: [iconKace],
      network: 'Avalanche',
      networkIcon: AvalancheIcon
    },
    2: {
      symbol: 'KACY',
      poolName: 'KACY',
      icons: [iconKace],
      network: 'Avalanche',
      networkIcon: AvalancheIcon
    },
    3: {
      symbol: 'KACY',
      poolName: 'KACY',
      icons: [iconKace],
      network: 'Avalanche',
      networkIcon: AvalancheIcon
    },
    4: {
      symbol: 'KACY',
      poolName: 'KACY',
      icons: [iconKace],
      network: 'Avalanche',
      networkIcon: AvalancheIcon
    },
    5: {
      symbol: 'LP',
      poolName: 'KACY-AVAX PNG LP',
      icons: [iconKace, AvalancheIcon, iconPangolin],
      network: 'Avalanche',
      networkIcon: AvalancheIcon
    },
    6: {
      symbol: 'aHYPE',
      poolName: 'aHYPE',
      icons: [aHYPE],
      network: 'Avalanche',
      networkIcon: AvalancheIcon
    },
    7: {
      symbol: 'LP-JOE',
      poolName: 'KACY-AVAX JOE LP',
      icons: [iconKace, AvalancheIcon, iconTraderJoe],
      network: 'Avalanche',
      networkIcon: AvalancheIcon
    }
  }
  React.useEffect(() => {
    if (!userWalletAddress) {
      return
    }

    const pids = [0, 1, 2, 3, 4, 5, 6, 7]

    const arr: IStakesType[] = []
    const asyncFunc = async () => {
      for (let pid = 0; pid < pids.length - 1; pid++) {
        const userInfoResponse = await userInfo(pid, userWalletAddress)

        if ((await userInfoResponse.amount) > 0) {
          arr.push({
            pid: pid,
            symbol: stakedToken[pid].symbol,
            poolName: stakedToken[pid].poolName,
            icons: stakedToken[pid].icons,
            network: stakedToken[pid].network,
            networkIcon: stakedToken[pid].networkIcon,
            amount: userInfoResponse.amount,
            pendingRewards: userInfoResponse.pendingRewards,
            rewardPerTokenPaid: userInfoResponse.rewardPerTokenPaid
          })
        }
    }

      const results = await Promise.all(arr)

      setStakes(results)
    }
    asyncFunc()
  }, [userWalletAddress, userInfo])

  return (
    <>
      <S.paddingWrapper>
        <PortfolioHeading
          image={AssetsIcon}
          title="Assets"
          usd={'16,000,000.00'}
          change={0.11}
        />
      </S.paddingWrapper>

      <S.paddingLeftWrapper>
        <AssetsTable assets={assetsArr} />
      </S.paddingLeftWrapper>

      <S.paddingWrapper>
        <PortfolioHeading
          image={StakedPoolsIcon}
          title="Staking and Farming"
          usd={BNtoDecimal(totalStaked, 6, 2, 2)}
        />
      </S.paddingWrapper>

      {stakes[0] && parseFloat(stakes[0].amount) > 0 ? (
      <S.paddingLeftWrapper>
          <StakingTable
            stakes={stakes}
            walletAddress={userWalletAddress}
            setTotalStaked={setTotalStaked}
          />
      </S.paddingLeftWrapper>
      ) : (
        <S.paddingWrapper>
          {userWalletAddress ? (
            <AnyCard
              text="It seems you have not staked any KACY"
              button={true}
              link="/farm"
              buttonText="I Want To Stake Some Tokens"
            />
          ) : (
            <AnyCard
              text=""
              button2={true}
              buttonText="Connect Wallet"
              onClick={() => {
                setIsModalWallet(true)
              }}
            />
          )}
        </S.paddingWrapper>
      )}

    </>
  )
}

export default Portfolio
