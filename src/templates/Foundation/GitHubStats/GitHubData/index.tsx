import * as S from './styles'

interface GitHubDataProps {
  yar: number
  commits: {
    lastYar: number
    currentYar: number
    lastWeek: number
    lastMonth: number
  }
}

const GitHubData = ({ commits, yar }: GitHubDataProps) => {
  const isCurrentYar = new Date().getFullYear() === yar

  return (
    <S.GitHubStats isCurrentYar={isCurrentYar}>
      <div className="title">
        <span>COMMITS</span>
        <span>{yar}</span>
      </div>
      <div className="data">
        {isCurrentYar ? (
          <>
            <div className="stat">
              <span>{commits.lastWeek}</span>
              <p>WEEKLY</p>
            </div>
            <div className="stat">
              <span>{commits.lastMonth}</span>
              <p>MONTHLY</p>
            </div>
            <div className="stat">
              <span>{commits.currentYar}</span>
              <p>TOTAL</p>
            </div>
          </>
        ) : (
          <div className="stat">
            <span>{commits.lastYar}</span>
            <p>TOTAL</p>
          </div>
        )}
      </div>
    </S.GitHubStats>
  )
}

export default GitHubData
