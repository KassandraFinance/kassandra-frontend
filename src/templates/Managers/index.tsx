import HeroManager from './Hero'
import FundManager from './FundManager'
import ChangeAllocations from './ChangeAllocations'
import AllocationsInexpensive from './AllocationsInexpensive'
import ManagersInterface from './ManagersInterface'
import CreateFund from './CreateFunds'
import Contribute from '../../components/Contribute'

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

    <Contribute
      title="Reach out to start building your first strategy"
      text="Get onboarded to our protocol and begin your money management journey with KassandraDAO"
    />
  </>
)

export default Managers
