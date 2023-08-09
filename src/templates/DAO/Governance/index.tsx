import Image from 'next/image'
import { useRouter } from 'next/router'

import useMatomo from '@/hooks/useMatomo'

import Button from '../../../components/Button'
import FadeInHorizontal from '../../../components/Animations/FadeInHorizontal'
import Paragraph from '../../../components/Paragraph'
import SectionSubtitle from '../../../components/SectionSubtitle'

import * as S from './styles'

const Governance = () => {
  const { trackEvent } = useMatomo()
  const router = useRouter()

  return (
    <S.Wrapper>
      <FadeInHorizontal threshold={0.5}>
        <S.Text>
          <S.SeasonTitle>GOVERNANCE</S.SeasonTitle>
          <SectionSubtitle
            text="Gather your friends and use voting power to take matters into your
            hands."
          />
          <Paragraph
            text="Don’t like something? Change it. Direct where Kassandra Foundation
            will allocate funds, such as development and innovation. Change
            curated funds. Nothing is absolute; the community has the final say."
          />
          <span id="buttonContainer">
            <Button
              as="a"
              className="button"
              icon={
                <Image
                  src="/assets/icons/arrow-right-circle.svg"
                  width={18}
                  height={18}
                />
              }
              backgroundSecondary
              text="Explore Governance"
              size="huge"
              href="https://app.kassandra.finance/gov"
              onClick={() =>
                trackEvent({
                  category: router.pathname,
                  action: `click-on-link | Governance | ${router.pathname}`,
                  name: 'Explore Governance'
                })
              }
            />
          </span>
        </S.Text>
      </FadeInHorizontal>

      <FadeInHorizontal threshold={0.5}>
        <S.Image>
          <img src="/assets/images/proposal-img.png" />
          <span />
        </S.Image>
      </FadeInHorizontal>
    </S.Wrapper>
  )
}

export default Governance
