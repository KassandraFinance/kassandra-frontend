import Image from 'next/image'

import FadeIn from '../../../components/Animations/FadeIn'
import FadeInHorizontal from '../../../components/Animations/FadeInHorizontal'
import FadeInVertical from '../../../components/Animations/FadeInVertical'
import Paragraph from '../../../components/Paragraph'
import SectionSubtitle from '../../../components/SectionSubtitle'

import schemaManager from '../../../../public/assets/images/schema-managers.png'

import * as S from './styles'

const Advantages = () => {
  return (
    <>
      <FadeIn threshold={0.5}>
        <S.Managers>
          <SectionSubtitle text="Connecting investors and managers in a seamless fashion" />

          <Paragraph
            text="Managers are compensated for each investor in their funds while
            users safely surf the waves of the market"
          />
        </S.Managers>
      </FadeIn>

      <FadeIn threshold={0.5}>
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
      </FadeIn>

      <S.DescriptionContainer>
        <FadeInHorizontal threshold={0.5}>
          <S.FundSafety>
            <S.DescriptionSafety>
              <S.DescriptionSafetyContent>
                <S.Span>FUND SAFETY</S.Span>
                <SectionSubtitle
                  text="Managers can only trade tokens whitelisted by our governance
                  protocol."
                />
                <Paragraph
                  text="Users can utilize our forum to debate and vote on which tokens
                  should or shouldn’t be invested/traded inside KassandraDAO."
                />
              </S.DescriptionSafetyContent>
            </S.DescriptionSafety>

            <S.ImageFundSafety>
              <img src="/assets/images/fund-safety.png" />
            </S.ImageFundSafety>
          </S.FundSafety>
        </FadeInHorizontal>

        <FadeInHorizontal threshold={0.5} invert>
          <S.Rebalance>
            <S.ImageRebalance>
              <img src="/assets/images/grafic-rebalance.png" />
            </S.ImageRebalance>

            <S.DescriptionRebalance>
              <S.DescriptionRebalanceContent>
                <S.Span>SMOOTH TRANSACTIONS</S.Span>
                <SectionSubtitle text="Avoid big losses that come with abrupt allocation changes" />
                <Paragraph
                  text="Allocations can only change so much in a calculated period.
                  Token exchanges are carried out gradually, avoiding large
                  losses of funds while rebalancing strategies."
                />
              </S.DescriptionRebalanceContent>
            </S.DescriptionRebalance>
          </S.Rebalance>
        </FadeInHorizontal>

        <FadeInHorizontal threshold={0.5}>
          <S.FundAutonomy>
            <S.DescriptionAutonomy>
              <S.DescriptionAutonomyContent>
                <S.Span>HIGH AUTONOMY</S.Span>
                <SectionSubtitle text="Move your funds in and out, whenever you want" />
                <Paragraph
                  text="Your funds will never be held hostage. Have complete freedom
                  to remanage your investments around at a moments notice and no
                  lock periods inside funds."
                />
              </S.DescriptionAutonomyContent>
            </S.DescriptionAutonomy>

            <S.ImageFundAutonomy>
              <img src="/assets/images/high-autonomy.png" />
            </S.ImageFundAutonomy>
          </S.FundAutonomy>
        </FadeInHorizontal>
      </S.DescriptionContainer>

      <S.BenefitsContainer>
        <FadeInVertical threshold={0.5}>
          <S.BeneficitsTitleWrapper>
            <SectionSubtitle text="No compromise, have everything you want" />

            <Paragraph
              text="All features you need to invest in successful funds, diversify
              your holdings, and follow relevant managers are here."
            />
          </S.BeneficitsTitleWrapper>
        </FadeInVertical>

        <S.BenefitsImagesContainer>
          <FadeInVertical threshold={0.5}>
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
          </FadeInVertical>

          <FadeInVertical threshold={0.5}>
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
          </FadeInVertical>

          <FadeInVertical threshold={0.5}>
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
          </FadeInVertical>
        </S.BenefitsImagesContainer>
      </S.BenefitsContainer>
    </>
  )
}

export default Advantages
