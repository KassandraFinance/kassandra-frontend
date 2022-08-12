import ExternalLink from '../../../components/ExternalLink'
import GitHubData from './GitHubData'

import * as S from './styles'

const GitHubStats = () => {
  return (
    <>
      <S.GitHubStatsWrapper>
        <h1>GitHub Stats</h1>
        <hr />
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
            <GitHubData />
            <GitHubData />
          </S.GitHubStatsData>
        </S.GitHubStatsContent>
        <S.ArticlesContent>
          <S.ArticlesData>
            <h1>Safety and Numbers</h1>
            <ExternalLink
              hrefLink="https://github.com/KassandraFinance"
              text="Latest article"
            />
            <span className="totalArticles">15</span>
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
              hrefLink="https://github.com/KassandraFinance"
              text="Read more at our medium"
            />
          </S.Medium>
        </S.ArticlesContent>
      </S.GitHubStatsWrapper>
    </>
  )
}

export default GitHubStats
