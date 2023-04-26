import useMatomoEcommerce from '../../hooks/useMatomoEcommerce'

import Hero from '../../components/Hero'
import FundManager from './FundManager'
import ChangeAllocations from './ChangeAllocations'
import AllocationsInexpensive from './AllocationsInexpensive'
import ManagersInterface from './ManagersInterface'
import CreateFund from './CreateFunds'
import Contribute from '../../components/Contribute'
import Button from '../../components/Button'

import * as S from './styles'

const Managers = () => {
  const { trackEventFunction } = useMatomoEcommerce()

  return (
    <>
      <S.ManagerMainContainer>
        <S.ManagerContainer>
          <S.ManagerContent>
            <Hero
              titleNumber="02"
              title="manager"
              titleColor="#26dbdb"
              subTitle="Earn money managing assets in a uniquely innovative hub"
              description="Be part of a community of skilled managers creating smart investment
            funds and get paid for it"
              backgroundImg="/assets/images/manager-hero.svg"
              backgroundImgHight="calc(100vh - 7.6rem)"
            >
              <Button
                as="a"
                href="https://3j2bd7x9okh.typeform.com/to/bBnYwVOD"
                target="_blank"
                text="Create your Pool"
                size="huge"
                backgroundPrimary
                onClick={() =>
                  trackEventFunction(
                    'click-on-button',
                    'create-your-fund',
                    `section-managers`
                  )
                }
                icon={
                  <img
                    src="/assets/utilities/go-to-page.svg"
                    alt=""
                    width={16}
                    height={16}
                  />
                }
              />
            </Hero>
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
}

export default Managers
