import React from 'react'
import Image from 'next/image'
import useSWR from 'swr'

import FadeIn from '../../../components/Animations/FadeIn'
import FadeInHorizontal from '../../../components/Animations/FadeInHorizontal'

import * as S from './styles'

type KacyMarketDataType = {
  value: string,
  title: string
}

const Tokenomics = () => {
  // eslint-disable-next-line prettier/prettier
  const [kacyMarketData, setKacyMarketData] = React.useState<
    KacyMarketDataType[]
  >([
    {
      value: '0',
      title: 'Price'
    },
    {
      value: '0',
      title: 'Market Cap'
    },
    {
      value: '10000000',
      title: 'Total Supply'
    },
    {
      value: '0',
      title: 'Circ. Supply'
    }
  ])

  const { data } = useSWR('/api/overview')

  React.useEffect(() => {
    if (data) {
      const price = data.kacyPrice?.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2
      })
      const marketCap = data.marketCap?.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0
      })
      const totalSup = (10000000).toLocaleString('en-US')
      const circSup = data.supply?.toLocaleString('en-US')

      setKacyMarketData([
        {
          value: price,
          title: 'Price'
        },
        {
          value: marketCap,
          title: 'Market Cap'
        },
        {
          value: totalSup,
          title: 'Total Supply'
        },
        {
          value: circSup,
          title: 'Circ. Supply'
        }
      ])
    }
  }, [data])

  return (
    <S.Wrapper>
      <FadeIn threshold={0.5}>
        <S.Title>
          <h2>Tokenomics</h2>
          <p>
            With a total supply of 10.000.000 that is only avaiable through the
            staking, locking and farming of KACY, we have crafted a sustainable
            approach to inflation while keeping rewards for our early
            contributors high.
          </p>
        </S.Title>
      </FadeIn>

      <S.Container>
        <FadeInHorizontal threshold={0.5} invert>
          <S.Row1>
            <S.KassandraImageWrapper>
              <Image src="/assets/images/kassandra-circle.svg" layout="fill" />
            </S.KassandraImageWrapper>

            <S.ValuesContainer>
              {kacyMarketData.map((item: { value: string, title: string }) => {
                return (
                  <>
                    <S.ValueContent>
                      <p>{item.title}</p>
                      <span>{item.value}</span>
                    </S.ValueContent>
                  </>
                )
              })}
            </S.ValuesContainer>
          </S.Row1>
        </FadeInHorizontal>

        <FadeInHorizontal threshold={0.5}>
          <S.Row2>
            <S.Info>
              <span>Distribution</span>
              <h3>Fair and community driven token distribuition</h3>
              <p>
                To create a fully decentralized organization with a
                well-distributed token, we chose to have a big part of the total
                supply (50%) slowly available through rewards to people that
                engage and help Kassandra in the early stages.
              </p>
            </S.Info>
            <S.PieChartImageWrapper>
              <Image
                src="/assets/images/chart-pie-token-holder.svg"
                layout="fill"
              />
            </S.PieChartImageWrapper>
          </S.Row2>
        </FadeInHorizontal>

        <FadeInHorizontal threshold={0.5} invert>
          <S.Row3>
            <S.BarChartImageWrapper>
              <Image
                src="/assets/images/tokenomics-chart-2.svg"
                layout="fill"
              />
            </S.BarChartImageWrapper>
            <S.Info>
              <span>Release schedule</span>
              <h3>Slow inflation</h3>
              <p>
                Through the vesting of private sales, seed sales, team tokens
                and foundation reserves, we have created a slowly-inflating
                token that rewards early hodlers without punishing new ones.
              </p>
            </S.Info>
          </S.Row3>
        </FadeInHorizontal>
      </S.Container>
    </S.Wrapper>
  )
}

export default Tokenomics
