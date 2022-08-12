import Header from '../../components/Header/newHeader'
import HeroManager from './Hero'
import FundManager from './FundManager'
import ChangeAllocations from './ChangeAllocations'
import AllocationsInexpensive from './AllocationsInexpensive'
import ManagersInterface from './ManagersInterface'
import CreateFund from './CreateFunds'
import Contribute from '../DAO/Contribute'

import * as S from './styles'

const Managers = () => (
  <>
    <S.HeaderContainer>
      <Header />
    </S.HeaderContainer>

    <S.ManagerMainContainer>
      <S.ManagerContainer>
        <S.ManagerContent>
          <HeroManager />
          <FundManager />
          <ChangeAllocations />
          <ManagersInterface />
          <AllocationsInexpensive />
          <CreateFund />
          <Contribute />
        </S.ManagerContent>
      </S.ManagerContainer>
    </S.ManagerMainContainer>
  </>
)

export default Managers
