import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import ConfigurableRightsPool from '../../../constants/abi/ConfigurableRightsPool.json'
import { HeimCRPPOOL } from '../../../constants/tokenAddresses'

import web3 from '../../../utils/web3'
import { AbiItem } from 'web3-utils'

import ExternalLink from '../../../components/ExternalLink'

import iconBar from '../../../../public/assets/iconbar.svg'
import kacyLogo from '../../../../public/assets/logo-kacy-stake.svg'

import * as S from './styles'

const ActivityTable = () => {
  // eslint-disable-next-line prettier/prettier
  const myContract = new web3.eth.Contract((ConfigurableRightsPool as unknown) as AbiItem, HeimCRPPOOL)

  async function call() {
    myContract
      .getPastEvents(
        'allEvents',
        { fromBlock: 14500155,
          toBlock: 14501340,
          topics: [
            '0xc62fc35ac75e3bff532648e2859a3e1694002cfa357614ae8e034df7f83db5e9'
          ]
        },
        function (error, events) {
          console.log(events)
        }
      )
      .then(function (events) {
        console.log(events)
      })
  }

  React.useEffect(() => {
    call()
  }, [])

  return (
    <>
      <S.ActivityTableContainer>
        <S.ActivityTableTitle>
          <Image src={iconBar} alt="Bar Icon" width={18} height={18} />
          <p>Activity</p>
        </S.ActivityTableTitle>
        <S.TableActivity>
          <thead>
            <th>TX Type</th>
            <th>Out</th>
            <th>In</th>
            <th>Address/Time</th>
          </thead>
          <S.TBodyActivity>
            <S.TransactionContent>
              <S.TitleTransaction>
                <span>
                  Invest
                  <Link
                    href="https://snowtrace.io/address/0x38918142779e2CD1189cBd9e932723C968363D1E"
                    passHref
                  >
                    <a>
                      <Image
                        src="/assets/externalLink.svg"
                        alt="External Link"
                        width={16}
                        height={16}
                      />
                    </a>
                  </Link>
                </span>
                <p>Single asset</p>
              </S.TitleTransaction>
              <S.TransactionOutAndIn>
                <span>
                  <Image src={kacyLogo} alt="asd" width={16} height={16} /> 10
                </span>
                <p>$700,00</p>
              </S.TransactionOutAndIn>
              <S.TransactionOutAndIn>
                <span>10</span>
                <p>$ 700,00</p>
              </S.TransactionOutAndIn>
              <S.TransactionInfo>
                <p>0x3x...cq20</p>
                <span>
                  X days ago
                  <ExternalLink hrefLink="" text="" />
                </span>
              </S.TransactionInfo>
            </S.TransactionContent>
          </S.TBodyActivity>
        </S.TableActivity>
      </S.ActivityTableContainer>
    </>
  )
}

export default ActivityTable
