import Image from 'next/image'

import schemaManager from '../../../../public/assets/images/schema-managers.svg'

import * as S from './styles'

const Advantages = () => {
  return (
    <>
      <S.Managers>
        <h1>Connecting investors and managers in a seamless fashion</h1>
        <span>
          Managers are compensated for each investor in their funds while users
          safely surf the waves of the market
        </span>
      </S.Managers>
      <S.Schema>
        <Image src={schemaManager} />
        <div className="connecting">
          <div className="description-connecting">
            <span>Investors</span>
            <p>
              Investing in a dynamic community of social traders and managers.
            </p>
          </div>
          <div className="description-connecting">
            <span>Protocol</span>
            <p>
              Automated processes that save money and make managing dETFs
              easier.
            </p>
          </div>
          <div className="description-connecting">
            <span>Manager</span>
            <p>
              Developing smart strategies with exclusive tools and intuitive
              interface.
            </p>
          </div>
        </div>
      </S.Schema>

      <S.FundSafety>
        <S.DescriptionSafety>
          <S.DescriptionSafetyContent>
            <S.Span>FUND SAFETY</S.Span>
            <h1>
              Managers can only trade tokens whitelisted by our governance
              protocol.
            </h1>
            <span>
              Users can utilize our forum to debate and vote on which tokens
              should or shouldn’t be invested/traded inside KassandraDAO.
            </span>
          </S.DescriptionSafetyContent>
        </S.DescriptionSafety>
        <S.ImageFundSafety>
          <img src="/assets/images/fund-safety.png" />
        </S.ImageFundSafety>
      </S.FundSafety>
      <S.Rebalance>
        <S.ImageRebalance>
          <img src="/assets/images/grafic-rebalance.png" />
        </S.ImageRebalance>
        <S.DescriptionRebalance>
          <S.DescriptionRebalanceContent>
            <S.Span>SMOOTH TRANSACTIONS</S.Span>
            <h1>Avoid big losses that come with abrupt allocation changes</h1>
            <span>
              Allocations can only change so much in a calculated period. Token
              exchanges are carried out gradually, avoiding large losses of
              funds to rebalance the strategies.
            </span>
          </S.DescriptionRebalanceContent>
        </S.DescriptionRebalance>
      </S.Rebalance>
      <S.FundAutonomy>
        <S.DescriptionAutonomy>
          <S.DescriptionAutonomyContent>
            <S.Span>HIGH AUTONOMY</S.Span>
            <h1>Move your funds in and out, whenever you want</h1>
            <span>
              Your funds will never be held hostage. Have complete freedom to
              remanage your investments around at a moments notice and no lock
              periods inside funds.
            </span>
          </S.DescriptionAutonomyContent>
        </S.DescriptionAutonomy>
        <S.ImageFundAutonomy>
          <img src="/assets/images/high-autonomy.png" />
        </S.ImageFundAutonomy>
      </S.FundAutonomy>
      <S.BenefitsContainer>
        <h1>No compromise, have everything you want</h1>
        <span>
          All features you need to invest in successful funds, diversify your
          holdings, and follow relevant managers are here.
        </span>
        <S.BenefitsImagesContainer>
          <S.BenefitsImagesContent>
            <S.BeneficitImage>
              <img
                className="delegation"
                src={'/assets/iconGradient/team-worker.svg'}
                width={72}
                height={72}
              />
            </S.BeneficitImage>
            <span>DELEGATION</span>
          </S.BenefitsImagesContent>
          <S.BenefitsImagesContent>
            <S.BeneficitImage>
              <img
                className="risk-reduction"
                src={'/assets/iconGradient/gauge-chart.svg'}
                width={74}
                height={43}
              />
            </S.BeneficitImage>
            <span>RISK REDUCTION</span>
          </S.BenefitsImagesContent>
          <S.BenefitsImagesContent>
            <S.BeneficitImage>
              <img
                className="network"
                src={'/assets/iconGradient/nodos.svg'}
                width={76}
                height={64}
              />
            </S.BeneficitImage>
            <span>NETWORK</span>
          </S.BenefitsImagesContent>
        </S.BenefitsImagesContainer>
      </S.BenefitsContainer>
    </>
  )
}

export default Advantages
