import AllocationsInexpensive from './AllocationsInexpensive'
import ChangeAllocations from './ChangeAllocations'
import CreateFund from './CreateFunds'
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
          <AllocationsInexpensive />
          <CreateFund />
        </S.ManagerContent>
      </S.ManagerContainer>
    </S.ManagerMainContainer>
  </>
)

export default Managers
