import React from 'react'

import useMatomoEcommerce from '@/hooks/useMatomoEcommerce'
import { useGithubData } from '@/hooks/query/useGithubData'
import { useMedium } from '@/hooks/query/useMedium'

import GitHubData from './GitHubData'
import ExternalLink from '@/components/ExternalLink'
import FadeInHorizontal from '@/components/Animations/FadeInHorizontal'
import FadeIn from '@/components/Animations/FadeIn'
import Paragraph from '@/components/Paragraph'

import * as S from './styles'

const GitHubStats = () => {
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
    lastYar: number
    currentYar: number
    lastWeek: number
    lastMonth: number
  }>({
    lastYar: 0,
    currentYar: 0,
    lastWeek: 0,
    lastMonth: 0
  })

  const { data } = useGithubData({
    dateLastWeek,
    dateLastMonth,
    dateInitLastYar,
    dateInitCurrentYarn
  })

  const { data: mediumData } = useMedium()

  const { trackEventFunction } = useMatomoEcommerce()

  function accTotalCommit(
    repositories:
      | {
          __typename?: 'RepositoryConnection' | undefined
          nodes?:
            | ({
                __typename?: 'Repository' | undefined
                name: string
                object?:
                  | { __typename?: 'Blob' | undefined }
                  | {
                      __typename?: 'Commit' | undefined
                      history: {
                        __typename?: 'CommitHistoryConnection' | undefined
                        totalCount: number
                      }
                    }
                  | { __typename?: 'Tag' | undefined }
                  | { __typename?: 'Tree' | undefined }
                  | null
                  | undefined
              } | null)[]
            | null
            | undefined
        }
      | undefined
  ) {
    return (
      repositories?.nodes?.reduce((previousValue, currentValue) => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const currentTotalCommits = currentValue?.object?.history?.totalCount
        if (currentTotalCommits) {
          return currentTotalCommits + previousValue
        }
        return previousValue
      }, 0) || 0
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
              onClick={() =>
                trackEventFunction(
                  'click-on-link',
                  'check-out-our-gitHub',
                  'section-foundation'
                )
              }
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
              hrefLink={mediumData?.items[0]?.link}
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
              onClick={() =>
                trackEventFunction(
                  'click-on-link',
                  'read-more-at-our-medium',
                  'section-foundation'
                )
              }
            />
          </S.Medium>
        </S.ArticlesContent>
      </FadeInHorizontal>
    </S.GitHubStatsWrapper>
  )
}

export default GitHubStats
