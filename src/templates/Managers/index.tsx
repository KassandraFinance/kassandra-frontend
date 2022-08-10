import ChangeAllocations from './ChangeAllocations'
import FundManager from './FundManager'
import HeroManager from './Hero'
import ManagersInterface from './ManagersInterface'
import * as S from './styles'

const Managers = () => (
  <>
    <S.ManagerMainContainer>
      <S.ManagerContainer>
        <S.ManagerContent>
          <HeroManager />
          <FundManager />
          <ChangeAllocations />
          <ManagersInterface />
        </S.ManagerContent>
      </S.ManagerContainer>
    </S.ManagerMainContainer>
  </>
)

export default Managers
