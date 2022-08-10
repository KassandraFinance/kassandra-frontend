import FundManager from './FundManager'
import HeroManager from './Hero'
import * as S from './styles'

const Managers = () => (
  <>
    <S.ManagerMainContainer>
      <S.ManagerContainer>
        <S.ManagerContent>
          <HeroManager />
          <FundManager />
        </S.ManagerContent>
      </S.ManagerContainer>
    </S.ManagerMainContainer>
  </>
)

export default Managers
