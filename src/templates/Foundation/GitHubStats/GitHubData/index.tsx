import * as S from './styles'

const GitHubData = () => {
  return (
    <S.GitHubStats>
      <div className="title">
        <span>COMMITS</span>
        <span>2022</span>
      </div>
      <div className="data">
        <div className="stat">
          <span>23</span>
          <p>WEEKLY</p>
        </div>
        <div className="stat">
          <span>80</span>
          <p>MONTHLY</p>
        </div>
        <div className="stat">
          <span>1049</span>
          <p>TOTAL</p>
        </div>
      </div>
    </S.GitHubStats>
  )
}

export default GitHubData
