import React from 'react'
import Image from 'next/image'
import Big from 'big.js'
import BigNumber from 'bn.js'

import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'

import { Staking } from '../../../../constants/tokenAddresses'

import useStakingContract from '../../../../hooks/useStakingContract'
import { BNtoDecimal } from '../../../../utils/numerals'

import { useAppSelector } from '../../../../store/hooks'

import Button from '../../../../components/Button'
import ExternalLink from '../../../../components/ExternalLink'
import ModalWalletConnect from '../../../../components/Modals/ModalWalletConnect'
import ModalManageVotingPower from '../../../../components/Governance/ModalManageVotingPower'

import tooltip from '../../../../../public/assets/utilities/tooltip.svg'

import * as S from './styles'

type IIntroWalletAddressProps = {
  address: string | string[] | undefined,
  userReceivedTotal: Big,
  userDelegatingTotal: Big
}

const IntroGovernance = ({
  address,
  userReceivedTotal,
  userDelegatingTotal
}: IIntroWalletAddressProps) => {
  // eslint-disable-next-line prettier/prettier
  const [isModalManageVotingPower, setIsModalManageVotingPower] =
    React.useState<boolean>(false)
  // eslint-disable-next-line prettier/prettier
  const [isModalWalletConnect, setIsModalWalletConnect] =
    React.useState<boolean>(false)
  // eslint-disable-next-line prettier/prettier
  const [totalKacyStaked, setTotalKacyStaked] = React.useState<BigNumber>(
    new BigNumber(0)
  )

  const userWalletAddress = useAppSelector(state => state.userWalletAddress)

  const { userInfo } = useStakingContract(Staking)

  const callUserInfo = async () => {
    const [userInfoOne, userInfoTwo, userInfoThree] = await Promise.all([
      userInfo(process.env.NEXT_PUBLIC_MASTER === '1' ? 2 : 0, address),
      userInfo(process.env.NEXT_PUBLIC_MASTER === '1' ? 3 : 1, address),
      userInfo(process.env.NEXT_PUBLIC_MASTER === '1' ? 4 : 2, address)
    ])

    const totalStaked = new BigNumber(userInfoOne.amount)
      .add(new BigNumber(userInfoTwo.amount))
      .add(new BigNumber(userInfoThree.amount))

    setTotalKacyStaked(totalStaked)
  }

  React.useEffect(() => {
    callUserInfo()
  }, [address, userWalletAddress])

  return (
    <>
      <S.IntroWalletAddress>
        <S.VotingPowerContent>
          <S.AddressTotalVotingPower>
            <S.TextAndTooltip>
              <span className="address-total-voting-power">
                TOTAL KACY STAKED
              </span>
              <Tippy content="The amount of KACY that this address has staked.">
                <S.Tooltip>
                  <Image
                    src={tooltip}
                    alt="Explanation"
                    width={16}
                    height={16}
                  />
                </S.Tooltip>
              </Tippy>
            </S.TextAndTooltip>
            {address || userWalletAddress ? (
              <span className="value-total-voting-power">
                {BNtoDecimal(new BigNumber(totalKacyStaked), 18, 2)}
              </span>
            ) : (
              <Button
                onClick={() => setIsModalWalletConnect(true)}
                size="large"
                text="Connect Wallet"
                backgroundSecondary
              />
            )}
          </S.AddressTotalVotingPower>

          <S.AllVotingPowerCard>
            <S.ReceivedAndOwnedVotingPower>
              <S.OwnedVotingPower>
                <S.TextAndTooltip>
                  <span className="gray-color">Owned Voting Power</span>
                  <Tippy content="Self delegated voting power">
                    <S.Tooltip>
                      <Image
                        src={tooltip}
                        alt="Explanation"
                        width={16}
                        height={16}
                      />
                    </S.Tooltip>
                  </Tippy>
                </S.TextAndTooltip>
                <span className="bold">
                  {userDelegatingTotal
                    ? BNtoDecimal(userDelegatingTotal, 18, 2)
                    : 0}
                </span>
              </S.OwnedVotingPower>
              <S.ReceivedVotingPower>
                <span className="gray-color">Received Voting Power</span>
                <span className="bold">
                  {userReceivedTotal
                    ? BNtoDecimal(userReceivedTotal, 18, 2)
                    : 0}
                </span>
              </S.ReceivedVotingPower>
            </S.ReceivedAndOwnedVotingPower>
            <S.HorizontalLine none={true} />
            <S.VerticalLine />
            <S.ManageDelegation>
              <Button
                size="large"
                text="Manage Delegation"
                backgroundSecondary
                disabledNoEvent={
                  address !== userWalletAddress || !userWalletAddress
                }
                onClick={() => setIsModalManageVotingPower(true)}
              />
              <ExternalLink text="Obtain Voting Power" hrefNext="#" />
            </S.ManageDelegation>
          </S.AllVotingPowerCard>
        </S.VotingPowerContent>
      </S.IntroWalletAddress>
      {isModalManageVotingPower && (
        <ModalManageVotingPower
          modalOpen={isModalManageVotingPower}
          setModalOpen={setIsModalManageVotingPower}
        />
      )}
      {isModalWalletConnect && (
        <ModalWalletConnect setModalOpen={setIsModalWalletConnect} />
      )}
    </>
  )
}

export default IntroGovernance
