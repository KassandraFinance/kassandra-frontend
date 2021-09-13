import React from 'react'
import BigNumber from 'bn.js'

import web3 from '../../utils/web3'
import { BNtoDecimal } from '../../utils/numerals'

import * as S from './styles'

interface ITotalVotingProps {
  getTotalVotes: () => Promise<any>
  getCurrentVotes: (walletAddres: string) => Promise<any>
  userWalletAddress: string
}

const TotalVoting = ({ getTotalVotes, getCurrentVotes, userWalletAddress }: ITotalVotingProps) => {
  const [totalVotes, setTotalVotes] = React.useState<BigNumber>(new BigNumber(0))
  const [yourVotingPower, setYourVotingPower] = React.useState<BigNumber>(new BigNumber(0))
  
  function getVotingPower() {
    if (!web3.currentProvider) {
      return
    }

    setInterval(async () => {
      const totalVotes = await getTotalVotes()
      setTotalVotes(totalVotes)
      if (userWalletAddress) {
        const currentVotes = await getCurrentVotes(userWalletAddress)
        setYourVotingPower(currentVotes)
      }
    }, 8000)
  }

  console.log('asd')

  React.useEffect(() => {
    getVotingPower()
  }, [userWalletAddress])

  return (
    <S.TotalVoting>
    <fieldset>
      <legend>Your voting power</legend>
      <span>{BNtoDecimal(new BigNumber(yourVotingPower), new BigNumber(18), 6)}</span>
    </fieldset>
    <fieldset>
      <legend>Total voting power</legend>
      <span>{BNtoDecimal(new BigNumber(totalVotes), new BigNumber(18), 6)}</span>
    </fieldset>
  </S.TotalVoting>
  )
}

export default TotalVoting