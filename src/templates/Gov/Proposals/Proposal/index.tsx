import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useSelector, RootStateOrAny } from 'react-redux'

import useStakingContract from '../../../../hooks/useStakingContract'
import { Staking } from '../../../../constants/tokenAddresses'

import substr from '../../../../utils/substr'

import Header from '../../../../components/Header'
import ExternalLink from '../../../../components/ExternalLink'
import ModalVotes from '../../../../components/Governance/ModalVotes'
import TitleSection from '../../../../components/TitleSection'
import VoteCard from '../../../../components/Governance/VoteCard'
import VotingPower from '../../../../components/VotingPower'

import proposals from '../../../../../public/assets/iconGradient/proposals.svg'
import proposalDetailsIcon from '../../../../../public/assets/iconGradient/proposal-details.svg'
import proposalInfoIcon from '../../../../../public/assets/iconGradient/proposal-info.svg'
import proposalCompleteIcon from '../../../../../public/assets/iconGradient/proposal-complete.svg'
import proposalWaitingIcon from '../../../../../public/assets/iconGradient/proposal-waiting.svg'

import * as S from './styles'

export type ModalProps = {
  voteType: string,
  percentage: string,
  totalVotingPower: string,
  totalAddresses: string
}

const Proposal = () => {
  const [modalVotes, setModalVotes] = React.useState<ModalProps | undefined>(
    undefined
  )

  const kacyStake = useStakingContract(Staking)
  const { userWalletAddress } = useSelector((state: RootStateOrAny) => state)

  return (
    <>
      <S.BackgroundVote>
        <Header />
        <S.VoteContent>
          <S.IntroDesktopScreen>
            <S.TitleWrapper>
              <S.TitleAndAuthor>
                <TitleSection image={proposals} title={'Proposta 01'} />
                <S.ProposeAuthorCard>
                  <p>Proposed by</p>
                  <Image
                    src={'/assets/avatar-author-proposal.svg'}
                    width={32}
                    height={32}
                  />
                  <span>
                    {substr('0xF84Db1d1868B03EaD9e799F55B4d1529687B691f')}
                  </span>
                </S.ProposeAuthorCard>
              </S.TitleAndAuthor>
              <S.VotingPowerAndLink>
                <VotingPower userWalletAddress={userWalletAddress} />
                <ExternalLink text="Obtain more voting power" hrefNext="#" />
              </S.VotingPowerAndLink>
            </S.TitleWrapper>
          </S.IntroDesktopScreen>

          <S.IntroMobileScreen>
            <S.TitleWrapper>
              <TitleSection image={proposals} title={'Proposta 01'} />
              <S.CardTitleWrapper>
                <S.VotingPowerAndLink>
                  <VotingPower userWalletAddress={userWalletAddress} />
                  <ExternalLink text="Obtain more voting power" hrefNext="#" />
                </S.VotingPowerAndLink>
                <S.ProposeAuthorCard>
                  <p>Proposed by</p>
                  <Image
                    src={'/assets/avatar-author-proposal.svg'}
                    width={24}
                    height={24}
                  />
                  <span>
                    {substr('0xF84Db1d1868B03EaD9e799F55B4d1529687B691f')}
                  </span>
                </S.ProposeAuthorCard>
              </S.CardTitleWrapper>
            </S.TitleWrapper>
          </S.IntroMobileScreen>

          <S.VoteCardWrapper>
            <VoteCard
              typeVote="For"
              percentage="73"
              totalVotingPower="1,723,124"
              onClickLink={() => {
                setModalVotes({
                  voteType: 'For',
                  percentage: '73',
                  totalVotingPower: '1,723,124',
                  totalAddresses: '1,723,124'
                })
              }}
            />
            <VoteCard
              typeVote="Against"
              percentage="27"
              totalVotingPower="1,723,124"
              onClickLink={() => {
                setModalVotes({
                  voteType: 'Against',
                  percentage: '27',
                  totalVotingPower: '1,723,124',
                  totalAddresses: '30'
                })
              }}
            />
          </S.VoteCardWrapper>
        </S.VoteContent>
        <S.ProposalInfo>
          <S.ProposalTitleWrapper>
            <Image src={proposalInfoIcon} width={24} height={24} />
            <h1>Proposal Info</h1>
          </S.ProposalTitleWrapper>
          <S.CardWrapper>
            <S.DescriptionTable>
              <S.Table>
                <S.TableHead>
                  <S.TableTitle>Description</S.TableTitle>
                </S.TableHead>
                <S.TableBody>
                  {descriptions.map(description => (
                    <S.TableDescriptionWrapper key={description.title}>
                      <S.DescriptionSubTitle>
                        {description.title}
                      </S.DescriptionSubTitle>
                      <S.DescriptionText>{description.text}</S.DescriptionText>
                    </S.TableDescriptionWrapper>
                  ))}
                </S.TableBody>
              </S.Table>
            </S.DescriptionTable>
            <S.InfoTable>
              <S.Table>
                <S.TableHead>
                  <S.TableTitle>Information</S.TableTitle>
                </S.TableHead>
                <S.TableBody>
                  <S.TableInfoWrapper>
                    {arrInfo.map(info => (
                      <S.DataWrapper key={info.text}>
                        <S.TextKey>{info.text}</S.TextKey>
                        <S.TextValue>{info.value}</S.TextValue>
                      </S.DataWrapper>
                    ))}
                  </S.TableInfoWrapper>
                </S.TableBody>
              </S.Table>
              <S.InfoLinkWrapper>
                <Link href={'#'}>
                  <S.Link>
                    <span>Discuss the proposals at the Forum</span>
                    <svg
                      width="17"
                      height="18"
                      viewBox="0 0 17 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M9.57924 2.78973C9.57924 2.44566 9.85816 2.16675 10.2022 2.16675H13.9401C14.2841 2.16675 14.5631 2.44566 14.5631 2.78973V6.52759C14.5631 6.87165 14.2841 7.15057 13.9401 7.15057C13.596 7.15057 13.3171 6.87165 13.3171 6.52759V4.41832L6.90487 10.8306C6.66158 11.0738 6.26713 11.0738 6.02385 10.8306C5.78056 10.5873 5.78056 10.1928 6.02385 9.94954L12.5607 3.4127H10.2022C9.85816 3.4127 9.57924 3.13379 9.57924 2.78973ZM3.97245 5.65542C3.80722 5.65542 3.64877 5.72106 3.53194 5.83789C3.41511 5.95472 3.34947 6.11317 3.34947 6.2784V13.1312C3.34947 13.2964 3.41511 13.4548 3.53194 13.5717C3.64877 13.6885 3.80722 13.7541 3.97245 13.7541H10.8252C10.9904 13.7541 11.1489 13.6885 11.2657 13.5717C11.3825 13.4548 11.4482 13.2964 11.4482 13.1312V9.39329C11.4482 9.04923 11.7271 8.77031 12.0712 8.77031C12.4152 8.77031 12.6941 9.04923 12.6941 9.39329V13.1312C12.6941 13.6268 12.4972 14.1022 12.1467 14.4527C11.7962 14.8032 11.3209 15.0001 10.8252 15.0001H3.97245C3.47678 15.0001 3.00141 14.8032 2.65091 14.4527C2.30042 14.1022 2.10352 13.6268 2.10352 13.1312L2.10352 6.2784C2.10352 5.78273 2.30042 5.30736 2.65091 4.95686C3.00141 4.60637 3.47678 4.40947 3.97245 4.40947H7.71031C8.05437 4.40947 8.33329 4.68838 8.33329 5.03244C8.33329 5.37651 8.05437 5.65542 7.71031 5.65542H3.97245Z"
                        fill="white"
                      />
                    </svg>
                  </S.Link>
                </Link>
              </S.InfoLinkWrapper>
            </S.InfoTable>
          </S.CardWrapper>
          <S.ProposalDetails>
            <S.ProposalTitleWrapper>
              <Image src={proposalDetailsIcon} width={24} height={24} />
              <h1>Details</h1>
            </S.ProposalTitleWrapper>
            <S.DescriptionTable>
              <S.Table>
                <S.TableBody>
                  {details.map(detail => (
                    <S.TableDescriptionWrapper key={detail.subTitle}>
                      <S.DetailsSubTitle>
                        {`${detail.id}\u00A0 ${detail.subTitle}`}
                      </S.DetailsSubTitle>
                      <S.DetailsText>{detail.text}</S.DetailsText>
                    </S.TableDescriptionWrapper>
                  ))}
                </S.TableBody>
              </S.Table>
            </S.DescriptionTable>
          </S.ProposalDetails>
          <S.ProposalStatus>
            <S.ProposalTitleWrapper>
              <Image src={proposalDetailsIcon} width={24} height={24} />
              <h1>Proposal Status History</h1>
            </S.ProposalTitleWrapper>

            <S.Steps>
              {stepData.map((step, index) => (
                <>
                  <S.Step key={step.title}>
                    {Date.parse(step.date) / 1000 >
                    new Date().getTime() / 1000 ? (
                      <Image src={proposalWaitingIcon} />
                    ) : (
                      <Image src={proposalCompleteIcon} />
                    )}
                    <S.StepTitle>{step.title}</S.StepTitle>
                    <S.StepDate>{step.date}</S.StepDate>
                  </S.Step>
                  <S.LineBetweenImages
                    isAfter={index === stepData.length - 1}
                    isComplete={
                      Date.parse(step.date) / 1000 < new Date().getTime() / 1000
                    }
                  />
                </>
              ))}
            </S.Steps>
          </S.ProposalStatus>
        </S.ProposalInfo>
      </S.BackgroundVote>
      {modalVotes && (
        <ModalVotes
          voteType={modalVotes.voteType}
          percentage={modalVotes.percentage}
          totalVotingPower={modalVotes.totalVotingPower}
          totalAddresses={modalVotes.totalAddresses}
          modalOpen={!!modalVotes}
          onClose={() => setModalVotes(undefined)}
        />
      )}
    </>
  )
}
export default Proposal

const descriptions = [
  {
    title: 'Turpis ornare vitae sem quis sagittis. ',
    text: 'Turpis ornare vitae sem quis sagittis. Sed libero ultricies eu accumsan. Risus lectus urna arcu aliquam velit, massa. Convallis convallis posuere risus, parturient quis. Ac suspendisse ornare amet a fermentum. Vulputate sociis ac at eget proin tristique congue blandit ut. Tempor, ullamcorper enim in molestie elit malesuada. Magna enim.'
  },
  {
    title: 'Turpis ornare vitae sem quis sagittis. ',
    text: 'Sed libero ultricies eu accumsan. Risus lectus urna arcu aliquam velit.'
  },
  {
    title: 'Turpis ornare vitae sem quis sagittis. ',
    text: 'Sed libero ultricies eu accumsan. Risus lectus urna arcu aliquam velit.'
  }
]

const arrInfo = [
  {
    text: 'State',
    value: 'Executed'
  },
  {
    text: 'Qorum',
    value: '160.000/160.000'
  },
  {
    text: 'Total Voting Power',
    value: '324.554'
  },
  {
    text: 'Created',
    value: '22/10/2021, 1:28 PM'
  },
  {
    text: 'Starting',
    value: '22/10/2021, 1:28 PM'
  },
  {
    text: 'Execute (max)',
    value: '22/11/2021, 1:28 PM'
  }
]

const details = [
  {
    id: '01',
    subTitle: 'Turpis ornare vitae sem quis sagittis. ',
    text: 'Turpis ornare vitae sem quis sagittis. Sed libero ultricies eu accumsan. Risus lectus urna arcu aliquam velit, massa. Convallis convallis posuere risus, parturient quis. Ac suspendisse ornare amet a fermentum. Vulputate sociis ac at eget proin tristique congue blandit ut. Tempor, ullamcorper enim in molestie elit malesuada. Magna enim.'
  },
  {
    id: '02',
    subTitle: 'Turpis ornare vitae sem quis sagittis. ',
    text: 'Sed libero ultricies eu accumsan. Risus lectus urna arcu aliquam velit.'
  },
  {
    id: '03',
    subTitle: 'Turpis ornare vitae sem quis sagittis. ',
    text: 'Sed libero ultricies eu accumsan. Risus lectus urna arcu aliquam velit.'
  }
]

const stepData = [
  {
    title: 'Created',
    date: '01/22/2022'
  },
  {
    title: 'Active',
    date: '01/22/2022'
  },
  {
    title: 'Succeeded',
    date: '02/22/2022'
  },
  {
    title: 'Queued',
    date: '02/22/2022'
  },
  {
    title: 'Executed',
    date: '02/22/2022'
  }
]
