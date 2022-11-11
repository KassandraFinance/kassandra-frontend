import React from 'react'
import useSWR from 'swr'
import { request } from 'graphql-request'

import { GET_DATA_GITHUB } from './graphql'
import { MEDIUM_FEED_URL } from '../../../constants/tokenAddresses'

import ExternalLink from '../../../components/ExternalLink'
import GitHubData from './GitHubData'
import FadeInHorizontal from '../../../components/Animations/FadeInHorizontal'
import FadeIn from '../../../components/Animations/FadeIn'
import Paragraph from '../../../components/Paragraph'

import * as S from './styles'

interface IMediumPost {
  author: string;
  categories: string[];
  content: string;
  description: string;
  enclosure: object;
  guid: string;
  link: string;
  pubDate: string;
  thumbnail: string;
  title: string;
}

const GitHubStats = () => {
  const GIT_HUB_TOKEN = process.env.NEXT_PUBLIC_GIT_HUB_TOKEN
  const currentYar = new Date().getFullYear()
  const dateInitLastYar = new Date(
    `${currentYar - 1}/01/01 00:00`
  ).toISOString()
  const dateInitCurrentYarn = new Date(
    `${currentYar}/01/01 00:00`
  ).toISOString()
  const dateLastWeek = new Date(
    Math.trunc(Date.now() - 60 * 60 * 24 * 7 * 1000)
  ).toISOString()
  const dateLastMonth = new Date(
    Math.trunc(Date.now() - 60 * 60 * 24 * 31 * 1000)
  ).toISOString()

  const [commits, setCommits] = React.useState<{
    lastYar: number,
    currentYar: number,
    lastWeek: number,
    lastMonth: number
  }>({
    lastYar: 0,
    currentYar: 0,
    lastWeek: 0,
    lastMonth: 0
  })
  const [mediumPosts, setMediumPosts] = React.useState<IMediumPost[]>([])

  const { data } = useSWR([GET_DATA_GITHUB, GIT_HUB_TOKEN], query =>
    request(
      'https://api.github.com/graphql',
      query,
      {
        dateInitLastYar,
        dateInitCurrentYarn,
        dateLastWeek,
        dateLastMonth
      },
      { Authorization: `token ${GIT_HUB_TOKEN}` }
    )
  )

  const fetcher = async (url: string) => {
    const res = await fetch(url)
    return res.json()
  }

  const { data: data2 } = useSWR(MEDIUM_FEED_URL, fetcher)

  interface ICommitData {
    nodes: { object: { history: { totalCount: number } } }[];
  }

  function accTotalCommit(repositories: ICommitData) {
    return repositories.nodes?.reduce(
      (
        previousValue: number,
        currentValue: { object: { history: { totalCount: number } } }
      ) => {
        const currentTotalCommits = currentValue.object?.history?.totalCount
        if (currentTotalCommits) {
          return currentTotalCommits + previousValue
        }
        return previousValue
      },
      0
    )
  }

  React.useEffect(() => {
    if (data) {
      const lastYar = accTotalCommit(data.lastYar?.repositories)
      const currentYar = accTotalCommit(data.currentYar?.repositories)
      const lastWeek = accTotalCommit(data.lastWeek?.repositories)
      const lastMonth = accTotalCommit(data.lastMonth?.repositories)

      setCommits({
        lastWeek,
        lastMonth,
        currentYar,
        lastYar
      })
    }
  }, [data])

  React.useEffect(() => {
    if (data2) {
      setMediumPosts(data2.items)
    }
  }, [data2])

  return (
    <S.GitHubStatsWrapper>
      <FadeIn threshold={0.5}>
        <S.GitHubStatsTitleWrapper>
          <h1>Team Stats</h1>

          <S.Divider />
        </S.GitHubStatsTitleWrapper>
      </FadeIn>

      <FadeInHorizontal threshold={0.5}>
        <S.GitHubStatsContent>
          <S.GitHub>
            <div className="logoGitHub">
              <img src="/assets/socialMidia/github.svg" alt="logo github" />
              <span>GITHUB</span>
            </div>
            <h1>Welcome to the open-source world</h1>
            <Paragraph
              text="Our team is always hard at work, updating our product daily in
              order to stay at the cutting edge of DeFi."
            />
            <ExternalLink
              hrefLink="https://github.com/KassandraFinance"
              text="Check out our gitHub"
            />
          </S.GitHub>
          <S.GitHubStatsData>
            <GitHubData commits={commits} yar={currentYar} />
            <GitHubData commits={commits} yar={currentYar - 1} />
          </S.GitHubStatsData>
        </S.GitHubStatsContent>
      </FadeInHorizontal>

      <FadeInHorizontal threshold={0.5}>
        <S.ArticlesContent>
          <S.ArticlesData>
            <h1>Track our development</h1>
            <ExternalLink
              hrefLink={mediumPosts[0]?.link}
              text="Latest article"
            />
            <span className="totalArticles">19</span>
            <p>Total Articles (2022)</p>
          </S.ArticlesData>
          <S.Medium>
            <div className="logoGitHub">
              <img src="/assets/socialMidia/medium.svg" alt="logo github" />
              <span>MEDIUM</span>
            </div>
            <h1>Behind-the-scenes updates</h1>
            <Paragraph
              text="Know what has been going on behind the scenes, have early access
              to sneak peeks and beta-test new features before everyone by
              signing to our newsletter."
            />
            <ExternalLink
              hrefLink="https://kassandrafoundation.medium.com/"
              text="Read more at our medium"
            />
          </S.Medium>
        </S.ArticlesContent>
      </FadeInHorizontal>
    </S.GitHubStatsWrapper>
  )
}

export default GitHubStats
