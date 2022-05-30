import React, { useState } from 'react'
import Big from 'big.js'
import BigNumber from 'bn.js'

import { useSelector, RootStateOrAny } from 'react-redux'

import useStakingContract from '../../hooks/useStakingContract'
import { Staking } from '../../constants/tokenAddresses'
import useERC20Contract from '../../hooks/useERC20Contract'

import PortfolioHeading from '../../components/PortfolioHeading'
import AssetsTable from './AssetsTable'
import StakingTable from './StakingTable'
import AnyCard from '../AnyCard'
import ModalWalletConnect from '../Modals/ModalWalletConnect'

import AssetsIcon from '../../../public/assets/iconGradient/section-title-Assets.svg'
import StakedPoolsIcon from '../../../public/assets/iconGradient/section-title-Staked-pools.svg'
import aHYPE from '../../../public/assets/ahype.svg'
import AvalancheIcon from '../../../public/assets/logos/avalanche-logo.svg'
import iconKace from '../../../public/assets/logo-kacy-stake.svg'
import iconPangolin from '../../../public/assets/logo-pangolin-40x40.svg'
import iconTraderJoe from '../../../public/assets/logo-traderJoe.svg'

import { BNtoDecimal } from '../../utils/numerals'

import {
  products,
  HeimCRPPOOL,
  ProductDetails
} from '../../constants/tokenAddresses'

import * as S from './styles'

interface IProfileProps {
  profileAddress: string;
}

interface IstakedTokenType {
  [key: number]: {
    symbol: string,
    poolName: string,
    icons: string[],
    network: string,
    networkIcon: string
  };
}

interface ImyFundsType {
  [key: string]: string;
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

const Portfolio = ({ profileAddress }: IProfileProps) => {
  const { userWalletAddress } = useSelector((state: RootStateOrAny) => state)
  const { userInfo } = useStakingContract(Staking)
  const [stakes, setStakes] = useState<IStakesType[]>([])

  const [totalStaked, setTotalStaked] = React.useState<Big>(Big(0))
  const [totalBalance, setTotalBalance] = React.useState<Big>(Big(0))
  const [myFunds, setMyFunds] = React.useState<ImyFundsType>({})
  const [funds, setFunds] = React.useState<ProductDetails[]>()
  const [isModalWallet, setIsModalWallet] = React.useState<boolean>(false)

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

  const ahypeERC20 = useERC20Contract(HeimCRPPOOL)
  //const tricryptoERC20 = useERC20Contract(HeimCRPPOOL)

  async function getBalance(id: string) {
    if (HeimCRPPOOL === id) {
      const balanceToken = await ahypeERC20.balance(profileAddress)

      if (balanceToken.gt(new BigNumber(0))) {
        setMyFunds(prevState => ({
          ...prevState,
          [id]: id
        }))
      }
    }
  }

  React.useEffect(() => {
    setMyFunds({})
  }, [profileAddress])

  React.useEffect(() => {
    products.forEach(product => {
      getBalance(product.sipAddress)
    })
  }, [products, profileAddress])

  React.useEffect(() => {
    if (!profileAddress) {
      return
    }

    products.forEach(async product => {
      const pid = typeof product.pid === 'undefined' ? -1 : product.pid
      const userInfoResponse = await userInfo(pid, profileAddress)
      if ((await userInfoResponse.amount) > 0) {
        setMyFunds(prevState => ({
          ...prevState,
          [product.sipAddress]: product.sipAddress
        }))
      }
    })
  }, [profileAddress, userInfo])

  React.useEffect(() => {
    const result = products.filter(product => {
      return product.sipAddress === myFunds[product.sipAddress]
    })

    setFunds(result)
  }, [myFunds])

  React.useEffect(() => {
    if (!profileAddress) {
      return
    }

    const pids = [0, 1, 2, 3, 4, 5, 6, 7]

    const arr: IStakesType[] = []
    const asyncFunc = async () => {
      for (let pid = 0; pid < pids.length; pid++) {
        const userInfoResponse = await userInfo(pid, profileAddress)

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
  }, [profileAddress, userInfo])

  return (
    <>
      <S.paddingWrapper>
        <PortfolioHeading
          image={AssetsIcon}
          title="Assets"
          usd={BNtoDecimal(totalBalance, 6, 2, 2)}
        />
      </S.paddingWrapper>

      {funds && funds[0] ? (
        <S.paddingLeftWrapper>
          <AssetsTable
            assets={funds}
            profileAddress={profileAddress}
            setTotalBalance={setTotalBalance}
          />
        </S.paddingLeftWrapper>
      ) : (
        <S.paddingWrapper>
          {profileAddress === userWalletAddress ? (
            <AnyCard
              text="Looks like you have not invested in anything yet"
              button={true}
              link="/explore"
              buttonText="I Want To Invest"
            />
          ) : (
            <AnyCard text="This address has not yet invested in anything" />
          )}
        </S.paddingWrapper>
      )}

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
            profileAddress={profileAddress}
            setTotalStaked={setTotalStaked}
          />
        </S.paddingLeftWrapper>
      ) : (
        <S.paddingWrapper>
          {profileAddress === userWalletAddress ? (
            <AnyCard
              text="It seems you have not staked any KACY"
              button={true}
              link="/farm"
              buttonText="I Want To Stake Some Tokens"
            />
          ) : (
            <AnyCard text="This address has nothing staked" />
          )}
        </S.paddingWrapper>
      )}

      {isModalWallet && <ModalWalletConnect setModalOpen={setIsModalWallet} />}
    </>
  )
}

export default Portfolio
