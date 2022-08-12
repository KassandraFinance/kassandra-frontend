import { request } from 'graphql-request'
import React from 'react'
import useSWR from 'swr'
import ExternalLink from '../../../components/ExternalLink'
import GitHubData from './GitHubData'
import { GET_DATA_GITHUB } from './graphql'

import * as S from './styles'

const GitHubStats = () => {
  const GIT_HUB_TOKEN = process.env.NEXT_PUBLIC_GIT_HUB_TOKEN
  const currentYar = new Date().getFullYear()
  const dateInitLastYar = new Date(
    `${currentYar - 1}-01-01 00:00`
  ).toISOString()
  const dateInitCurrentYarn = new Date(
    `${currentYar}-01-01 00:00`
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

  return (
    <>
      <S.GitHubStatsWrapper>
        <h1>GitHub Stats</h1>
        <S.Divider />
        <S.GitHubStatsContent>
          <S.GitHub>
            <div className="logoGitHub">
              <img src="/assets/socialMidia/github.svg" alt="logo github" />
              <span>GITHUB</span>
            </div>
            <h1>Welcome to open-source world</h1>
            <p>
              Our team is always hard at work, updating our product daily in
              order to stay at the cutting edge of DeFi.
            </p>
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
        <S.ArticlesContent>
          <S.ArticlesData>
            <h1>Safety and Numbers</h1>
            <ExternalLink
              hrefLink="https://kassandrafoundation.medium.com/welcome-to-august-kassandra-newsletter-5-ef7bb65655ac"
              text="Latest article"
            />
            <span className="totalArticles">16</span>
            <p>Total Articles (2022)</p>
          </S.ArticlesData>
          <S.Medium>
            <div className="logoGitHub">
              <img src="/assets/socialMidia/medium.svg" alt="logo github" />
              <span>MEDIUM</span>
            </div>
            <h1>Behind-the-scenes updates</h1>
            <p>
              Know what has been going on behind the scenes, have early access
              to sneak peeks and beta-test new features before everyone by
              signing to our newsletter.
            </p>
            <ExternalLink
              hrefLink="https://kassandrafoundation.medium.com/"
              text="Read more at our medium"
            />
          </S.Medium>
        </S.ArticlesContent>
      </S.GitHubStatsWrapper>
    </>
  )
}

export default GitHubStats
