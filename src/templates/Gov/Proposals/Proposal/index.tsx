import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useSelector, RootStateOrAny } from 'react-redux'
import Jazzicon, { jsNumberForAddress } from 'react-jazzicon'
import useSWR from 'swr'
import { request } from 'graphql-request'
import Big from 'big.js'
import BigNumber from 'bn.js'
import ReactMarkdown from 'react-markdown'

import {
  chains,
  GovernorAlpha,
  Staking,
  SUBGRAPH_URL
} from '../../../../constants/tokenAddresses'

import useGovernance from '../../../../hooks/useGovernance'
import useVotingPower from '../../../../hooks/useVotingPower'

import substr from '../../../../utils/substr'
import { BNtoDecimal } from '../../../../utils/numerals'
import waitTransaction, {
  MetamaskError,
  TransactionCallback
} from '../../../../utils/txWait'

import { GET_PROPOSAL } from './graphql'

import ExternalLink from '../../../../components/ExternalLink'
import Header from '../../../../components/Header'
import ModalVotes from '../../../../components/Governance/ModalVotes'
import TitleSection from '../../../../components/TitleSection'
import VoteCard from '../../../../components/Governance/VoteCard'
import VotingPower from '../../../../components/VotingPower'
import Breadcrumb from '../../../../components/Breadcrumb'
import BreadcrumbItem from '../../../../components/Breadcrumb/BreadcrumbItem'
import {
  ToastSuccess,
  ToastError,
  ToastWarning
} from '../../../../components/Toastify/toast'

import externalLink from '../../../../../public/assets/icons/external-link.svg'
import proposals from '../../../../../public/assets/iconGradient/proposals.svg'
import proposalDetailsIcon from '../../../../../public/assets/iconGradient/proposal-details.svg'
import proposalInfoIcon from '../../../../../public/assets/iconGradient/proposal-info.svg'
import proposalCompleteIcon from '../../../../../public/assets/iconGradient/proposal-complete.svg'
import proposalWaitingIcon from '../../../../../public/assets/iconGradient/proposal-waiting.svg'

import * as S from './styles'

interface IRequestDataProposal {
  proposal: [
    {
      number: number,
      description: string,
      forVotes: Big,
      againstVotes: Big,
      startBlock: string,
      quorum: string,
      values: [],
      calldatas: [],
      signatures: [],
      targets: [],
      proposer: {
        id: string
      },
      votes: [
        {
          support: boolean,
          voter: {
            id: string
          }
        }
      ]
    }
  ];
}

export interface ModalProps {
  voteType: string;
  percentage: string;
  totalVotingPower: string;
  checkAllVoterModal: boolean;
}

export interface IUserVotedProps {
  voted: boolean;
  support: boolean | null;
  userWalletAddress: string;
  yourVotingPowerInProposal: BigNumber;
}

export interface IVotesProps {
  support: boolean | null;
  voter: {
    id: string
  };
}

export interface IProposalProps {
  forVotes: Big;
  againstVotes: Big;
  proposer: string;
  number: number;
  quorum: string;
  description: string;
  votingPower: Big;
  values: string[];
  calldatas: string[];
  signatures: string[];
  targets: string[];
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
    quorum: '0',
    description: '',
    votingPower: Big(0),
    calldatas: [],
    signatures: [],
    targets: [],
    values: []
  })
  // eslint-disable-next-line prettier/prettier
  const [modalVotes, setModalVotes] = React.useState<ModalProps>({
    voteType: '',
    percentage: '',
    totalVotingPower: '',
    checkAllVoterModal: false
  })
  const [isModalOpen, setIsModalOpen] = React.useState(false)

  const [percentageVotes, setPercentageVotes] = React.useState({
    for: '0',
    against: '0'
  })
  const [proposalState, setProposalState] = React.useState<string>('')
  const [dataStatus, setDataStatus] = React.useState<any[]>(stepData)
  const [userVoted, setUserVoted] = React.useState<IUserVotedProps>({
    voted: false,
    support: null,
    userWalletAddress: '',
    yourVotingPowerInProposal: new BigNumber(0)
  })
  // eslint-disable-next-line prettier/prettier
  const [yourVotingPowerInProposal, setYourVotingPowerInProposal] = React.useState(new BigNumber(0))

  const router = useRouter()
  const governance = useGovernance(GovernorAlpha)
  const votingPower = useVotingPower(Staking)

  const { userWalletAddress } = useSelector((state: RootStateOrAny) => state)

  const { data } = useSWR<IRequestDataProposal>([GET_PROPOSAL], query =>
    request(SUBGRAPH_URL, query, {
      number: Number(router.query.proposal),
      voter: userWalletAddress
    })
  )

  async function getProposalState(number: number) {
    governance.stateProposals(number).then(res => setProposalState(res[0]))
  }

  async function getVotingPowerInProposal(startBlock: string) {
    if (userWalletAddress) {
      const votingPowerAtMoment = await votingPower.getPriorVotes(
        userWalletAddress,
        startBlock
      )

      setYourVotingPowerInProposal(votingPowerAtMoment)
    }
  }

  function handleVote(voteType: string) {
    if (
      userVoted.voted ||
      proposalState[0] !== 'Active' ||
      !userWalletAddress ||
      yourVotingPowerInProposal.eq(new BigNumber(0))
    ) {
      return
    }

    governance.castVote(
      Number(router.query.proposal),
      voteType === 'For' ? true : false,
      userWalletAddress,
      voteCallback()
    )

    if (isModalOpen) {
      setTimeout(() => {
        setIsModalOpen(false)
      }, 1200)
    }
  }

  const voteCallback = React.useCallback((): TransactionCallback => {
    return async (error: MetamaskError, txHash: string) => {
      if (error) {
        ToastError(`Failed vote. Please try again later.`)
        return
      }

      ToastWarning(`Confirming vote`)
      const txReceipt = await waitTransaction(txHash)

      if (txReceipt.status) {
        ToastSuccess(`Vote confirmed`)
        return
      }
    }
  }, [])

  React.useEffect(() => {
    if (data) {
      const proposalInfo: IProposalProps = {
        againstVotes: data.proposal[0].againstVotes,
        forVotes: data.proposal[0].forVotes,
        description: data.proposal[0].description,
        number: data.proposal[0].number,
        quorum: data.proposal[0].quorum,
        proposer: data.proposal[0].proposer.id,
        votingPower: Big(data.proposal[0].forVotes).add(
          Big(data.proposal[0].againstVotes)
        ),
        calldatas: data.proposal[0].calldatas,
        signatures: data.proposal[0].signatures,
        targets: data.proposal[0].targets,
        values: data.proposal[0].values
      }
      if (proposalInfo.votingPower.gt(0)) {
        const forVotes = BNtoDecimal(
          Big(data.proposal[0].forVotes).div(proposalInfo.votingPower).mul(100),
          18,
          2
        )

        const againstVotes = BNtoDecimal(
          Big(data.proposal[0].againstVotes)
            .div(proposalInfo.votingPower)
            .mul(100),
          18,
          2
        )

        setPercentageVotes({ for: forVotes, against: againstVotes })
      }

      const [userAlreadyVoted] = data.proposal[0].votes
      setUserVoted({
        voted: userAlreadyVoted ? true : false,
        support: userAlreadyVoted ? userAlreadyVoted.support : null,
        userWalletAddress,
        yourVotingPowerInProposal
      })

      getVotingPowerInProposal(data.proposal[0].startBlock)
      getProposalState(data.proposal[0].number)
      setProposal(proposalInfo)
    }
  }, [data, userWalletAddress])

  React.useEffect(() => {
    function generateStatusHistoryArray() {
      const arr = dataStatus.map(item =>
        item.title.includes(proposalState)
          ? { ...item, completed: true, title: proposalState }
          : item
      )

      const teste2 = arr.findIndex(item => item.completed === true)

      const arrTrue = arr
        .slice(0, teste2 + 1)
        .map(item => ({ ...item, completed: true }))
      const arrFalse = arr.slice(teste2 + 1)

      const arrModified = [...arrTrue, ...arrFalse]

      setDataStatus(arrModified)
    }

    generateStatusHistoryArray()
  }, [proposalState])

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
                  <Jazzicon
                    diameter={32}
                    seed={jsNumberForAddress(proposal.proposer)}
                  />

                  <span>{substr(`${proposal.proposer}`)}</span>
                </S.ProposeAuthorCard>
              </S.TitleAndAuthor>
              <S.VotingPowerAndLink>
                <VotingPower
                  userWalletAddress={userWalletAddress}
                  yourVotingPowerInProposal={yourVotingPowerInProposal}
                />
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
                  <VotingPower
                    userWalletAddress={userWalletAddress}
                    yourVotingPowerInProposal={yourVotingPowerInProposal}
                  />
                  <ExternalLink text="Obtain more voting power" hrefNext="#" />
                </S.VotingPowerAndLink>
                <S.ProposeAuthorCard>
                  <p>Proposed by</p>
                  <Jazzicon
                    diameter={24}
                    seed={jsNumberForAddress(proposal.proposer)}
                  />
                  <span>{substr(`${proposal.proposer}`)}</span>
                </S.ProposeAuthorCard>
              </S.CardTitleWrapper>
            </S.TitleWrapper>
          </S.IntroMobileScreen>

          <S.VoteCardWrapper>
            <VoteCard
              typeVote="For"
              percentage={percentageVotes.for}
              totalVotingPower={BNtoDecimal(proposal.forVotes, 0, 2, 2)}
              proposalState={proposalState[0]}
              userVote={userVoted}
              handleVote={handleVote}
              onClickLink={() => {
                setModalVotes({
                  voteType: 'For',
                  percentage: `${percentageVotes.for}`,
                  // eslint-disable-next-line prettier/prettier
                  totalVotingPower: `${BNtoDecimal(proposal.forVotes, 0, 2, 2)}`,
                  checkAllVoterModal: true
                })
                setIsModalOpen(true)
              }}
            />
            <VoteCard
              typeVote="Against"
              percentage={percentageVotes.against}
              totalVotingPower={BNtoDecimal(proposal.againstVotes, 0, 2, 2)}
              proposalState={proposalState[0]}
              userVote={userVoted}
              handleVote={handleVote}
              onClickLink={() => {
                setModalVotes({
                  voteType: 'Against',
                  percentage: `${percentageVotes.against}`,
                  // eslint-disable-next-line prettier/prettier
                  totalVotingPower: `${BNtoDecimal(proposal.againstVotes, 0, 2, 2)}`,
                  checkAllVoterModal: false
                })
                setIsModalOpen(true)
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
              <S.DescriptionProposal>
                <ReactMarkdown skipHtml={true} linkTarget={'_blank'}>
                  {proposal.description}
                </ReactMarkdown>
              </S.DescriptionProposal>
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
                      {proposalState ? (
                        <S.TextValue
                          style={{
                            color: statslibColor[proposalState.toLowerCase()]
                          }}
                        >
                          {proposalState.charAt(0).toUpperCase() +
                            proposalState.slice(1)}
                        </S.TextValue>
                      ) : (
                        '...'
                      )}
                    </S.DataWrapper>
                    <S.DataWrapper>
                      <S.TextKey>Quorum</S.TextKey>
                      <S.TextValue>
                        {proposal.votingPower.lt(Big(proposal.quorum))
                          ? BNtoDecimal(proposal.votingPower, 0, 2)
                          : BNtoDecimal(Big(proposal.quorum), 0, 2)}{' '}
                        / {BNtoDecimal(Big(proposal.quorum), 0, 2)}
                      </S.TextValue>
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
              {new Array(3).fill(null).map((_, index) => {
                if (
                  proposal.calldatas[index] ||
                  proposal.signatures[index] ||
                  proposal.targets[index] ||
                  proposal.values[index]
                ) {
                  return (
                    <S.TableDescriptionWrapper key={index}>
                      <S.LinkTargetSnowTrace
                        href={`${
                          process.env.NEXT_PUBLIC_MASTER === '1'
                            ? chains.avalanche.blockExplorerUrls
                            : chains.fuji.blockExplorerUrls
                        }address/${proposal.targets[index]}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span>Target:</span>
                        <span>
                          {proposal.targets[index]
                            ? proposal.targets[index]
                            : '-'}
                        </span>
                        <svg
                          width="17"
                          height="17"
                          viewBox="0 0 17 17"
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
                      </S.LinkTargetSnowTrace>

                      <S.DetailsSubTitle>
                        Value:
                        <S.DetailsText>
                          {proposal.values[index]
                            ? BNtoDecimal(
                                new BigNumber(proposal.values[index]),
                                18,
                                2
                              )
                            : '-'}
                        </S.DetailsText>
                      </S.DetailsSubTitle>

                      <S.DetailsSubTitle>
                        Signature:
                        <S.DetailsText>
                          {proposal.signatures[index]
                            ? proposal.signatures[index]
                            : '-'}
                        </S.DetailsText>
                      </S.DetailsSubTitle>

                      <S.DetailsSubTitle>
                        Calldata:
                        <S.DetailsText>
                          {proposal.calldatas[index]
                            ? proposal.calldatas[index]
                            : '-'}
                        </S.DetailsText>
                      </S.DetailsSubTitle>
                    </S.TableDescriptionWrapper>
                  )
                }
                return
              })}
            </S.DescriptionTable>
          </S.ProposalDetails>
          <S.ProposalStatus>
            <S.ProposalTitleWrapper>
              <Image src={proposalDetailsIcon} width={24} height={24} />
              <h1>Proposal Status History</h1>
            </S.ProposalTitleWrapper>

            <S.Steps>
              {dataStatus.map((step, index) => (
                <React.Fragment key={index}>
                  <S.Step>
                    {step.completed === true ? (
                      <Image src={proposalCompleteIcon} />
                    ) : (
                      <Image src={proposalWaitingIcon} />
                    )}

                    <S.StepTitle>{step.title}</S.StepTitle>
                    <S.StepDate>{step.date}</S.StepDate>
                  </S.Step>
                  <S.LineBetweenImages
                    isAfter={index === dataStatus.length - 1}
                    isComplete={step.completed === true}
                  />
                </React.Fragment>
              ))}
              {/* {stepData.map((step, index) => (
                <>
                  <S.Step key={step.title + index}>
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
              ))} */}
            </S.Steps>
          </S.ProposalStatus>
        </S.ProposalInfo>
      </S.BackgroundVote>
      {isModalOpen && (
        <ModalVotes
          voteType={modalVotes.voteType}
          percentage={modalVotes.percentage}
          totalVotingPower={modalVotes.totalVotingPower}
          checkAllVoterModal={modalVotes.checkAllVoterModal}
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          userVote={userVoted}
          proposalState={proposalState[0]}
          handleVote={handleVote}
        />
      )}
    </>
  )
}

export default Proposal

const infoProposal = {
  state: 'Executed',
  quorum: '160.000/160.000',
  totalVotingPower: '324.554',
  created: '22/10/2021, 1:28 PM',
  starting: '22/10/2021, 1:28 PM',
  executeMax: '22/11/2021, 1:28 PM'
}

const stepData = [
  {
    title: ['Created'],
    completed: false,
    date: '01/22/2022'
  },
  {
    title: ['Active'],
    completed: false,
    date: '01/22/2022'
  },
  {
    title: ['Succeeded', 'Failed'],
    completed: false,
    date: '02/22/2022'
  },
  {
    title: ['Queued'],
    completed: false,
    date: '02/22/2022'
  },
  {
    title: ['Executed'],
    completed: false,
    date: '04/22/2022'
  }
]
