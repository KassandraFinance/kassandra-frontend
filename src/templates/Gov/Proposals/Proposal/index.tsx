import React from 'react'
import Image from 'next/image'
import Big from 'big.js'
import useSWR from 'swr'
import { request } from 'graphql-request'
import { useRouter } from 'next/router'
import { useSelector, RootStateOrAny } from 'react-redux'

import {
  GovernorAlpha,
  SUBGRAPH_URL
} from '../../../../constants/tokenAddresses'

import useGovernance from '../../../../hooks/useGovernance'

import substr from '../../../../utils/substr'
import { BNtoDecimal } from '../../../../utils/numerals'

import { GET_PROPOSAL } from './graphql'

import ExternalLink from '../../../../components/ExternalLink'
import Header from '../../../../components/Header'
import ModalVotes from '../../../../components/Governance/ModalVotes'
import TitleSection from '../../../../components/TitleSection'
import VoteCard from '../../../../components/Governance/VoteCard'
import VotingPower from '../../../../components/VotingPower'
import Breadcrumb from '../../../../components/Breadcrumb'
import BreadcrumbItem from '../../../../components/Breadcrumb/BreadcrumbItem'

import externalLink from '../../../../../public/assets/icons/external-link.svg'
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

interface IProposalProps {
  forVotes: Big;
  againstVotes: Big;
  proposer: string;
  number: number;
  quorum: string;
  description: string;
  votingPower: Big;
}

const statslibColor: { [key: string]: string } = {
  'voting open': '#E843C4',
  approved: '#26DBDB',
  succeeded: '#26DBDB',
  queued: '#FFBF00',
  executed: '#2CE878',
  failed: '#E8372C',
  canceled: '#BDBDBD'
}

const Proposal = () => {
  const [proposal, setProposal] = React.useState<IProposalProps>({
    forVotes: Big(0),
    againstVotes: Big(0),
    proposer: '',
    number: 0,
    quorum: '',
    description: '',
    votingPower: Big(0)
  })
  // eslint-disable-next-line prettier/prettier
  const [modalVotes, setModalVotes] = React.useState<ModalProps | undefined>(undefined)
  // const [percentageVotes, setPercentageVotes] = React.useState({
  //   for: '',
  //   against: ''
  // })
  const [proposalState, setProposalState] = React.useState<any[]>([])
  const router = useRouter()
  const governance = useGovernance(GovernorAlpha)

  const { userWalletAddress } = useSelector((state: RootStateOrAny) => state)

  const { data } = useSWR([GET_PROPOSAL], query =>
    request(SUBGRAPH_URL, query, {
      number: Number(router.query.proposal)
    })
  )

  async function getProposalState(number: number) {
    governance.stateProposals(number).then(res => setProposalState(res))
  }

  React.useEffect(() => {
    if (data) {
      const proposalInfo: any = {
        againstVotes: data.proposal[0].againstVotes,
        forVotes: data.proposal[0].forVotes,
        description: data.proposal[0].description,
        number: data.proposal[0].number,
        quorum: data.proposal[0].quorum,
        proposer: data.proposal[0].proposer.id,
        votingPower: data.proposal[0].votes[0].votingPower || 0
      }

      // const forVotes = BNtoDecimal(
      //   Big(data.proposal[0].forVotes)
      //     .mul(100)
      //     .div(Big(data.proposal[0].votes.votingPower)),
      //   18,
      //   2
      // )

      // const againstVotes = BNtoDecimal(
      //   Big(data.proposal[0].againstVotes)
      //     .mul(100)
      //     .div(Big(data.proposal[0].votes.votingPower)),
      //   18,
      //   2
      // )
      getProposalState(data.proposal[0].number)
      setProposal(proposalInfo)
      // setPercentageVotes({ for: forVotes, against: againstVotes })
    }
  }, [data])

  return (
    <>
      <S.BackgroundVote>
        <Header />
        <Breadcrumb>
          <BreadcrumbItem href="/">Home</BreadcrumbItem>
          <BreadcrumbItem href="/gov">Vote</BreadcrumbItem>
          <BreadcrumbItem href={router.asPath} isLastPage>
            Proposal {router.query.proposal}
          </BreadcrumbItem>
        </Breadcrumb>
        <S.VoteContent>
          <S.IntroDesktopScreen>
            <S.TitleWrapper>
              <S.TitleAndAuthor>
                <TitleSection
                  image={proposals}
                  title={`Proposal ${router.query.proposal}`}
                />
                <S.ProposeAuthorCard>
                  <p>Proposed by</p>
                  <Image
                    src={'/assets/avatar-author-proposal.svg'}
                    width={32}
                    height={32}
                  />
                  <span>{substr(`${proposal.proposer}`)}</span>
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
              <TitleSection
                image={proposals}
                title={`Proposal ${router.query.proposal}`}
              />
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
                  <span>{substr(`${proposal.proposer}`)}</span>
                </S.ProposeAuthorCard>
              </S.CardTitleWrapper>
            </S.TitleWrapper>
          </S.IntroMobileScreen>

          <S.VoteCardWrapper>
            <VoteCard
              typeVote="For"
              percentage="73"
              proposalId={router.query.proposal}
              totalVotingPower={BNtoDecimal(proposal.forVotes, 0, 2, 2)}
              userWalletAddress={userWalletAddress}
              onClickLink={() => {
                setModalVotes({
                  voteType: 'For',
                  percentage: '73',
                  totalVotingPower: `${proposal.forVotes}`,
                  totalAddresses: '30'
                })
              }}
            />
            <VoteCard
              typeVote="Against"
              percentage="27"
              proposalId={router.query.proposal}
              totalVotingPower={BNtoDecimal(proposal.againstVotes, 0, 2, 2)}
              userWalletAddress={userWalletAddress}
              onClickLink={() => {
                setModalVotes({
                  voteType: 'Against',
                  percentage: '27',
                  totalVotingPower: `${proposal.againstVotes}`,
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
                    <S.DataWrapper>
                      <S.TextKey>State</S.TextKey>
                      {proposalState[0] ? (
                        <S.TextValue
                          style={{
                            color: statslibColor[proposalState[0].toLowerCase()]
                          }}
                        >
                          {proposalState[0].charAt(0).toUpperCase() +
                            proposalState[0].slice(1)}
                        </S.TextValue>
                      ) : (
                        '...'
                      )}
                    </S.DataWrapper>
                    <S.DataWrapper>
                      <S.TextKey>Quorum</S.TextKey>
                      <S.TextValue>{proposal.quorum}</S.TextValue>
                    </S.DataWrapper>
                    <S.DataWrapper>
                      <S.TextKey>Total Voting Power</S.TextKey>
                      <S.TextValue>
                        {BNtoDecimal(proposal.votingPower, 0, 2)}
                      </S.TextValue>
                    </S.DataWrapper>
                    <S.DataWrapper>
                      <S.TextKey>Created</S.TextKey>
                      <S.TextValue>{infoProposal.created}</S.TextValue>
                    </S.DataWrapper>
                    <S.DataWrapper>
                      <S.TextKey>Starting</S.TextKey>
                      <S.TextValue>{infoProposal.starting}</S.TextValue>
                    </S.DataWrapper>
                    <S.DataWrapper>
                      <S.TextKey>Execute (max)</S.TextKey>
                      <S.TextValue>{infoProposal.executeMax}</S.TextValue>
                    </S.DataWrapper>
                  </S.TableInfoWrapper>
                </S.TableBody>
              </S.Table>

              <S.LinkForum
                href="https://t.me/KassandraDAO"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Discuss the proposals at the Forum</span>
                <Image src={externalLink} alt="" />
              </S.LinkForum>
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

const infoProposal = {
  state: 'Executed',
  quorum: '160.000/160.000',
  totalVotingPower: '324.554',
  created: '22/10/2021, 1:28 PM',
  starting: '22/10/2021, 1:28 PM',
  executeMax: '22/11/2021, 1:28 PM'
}

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
