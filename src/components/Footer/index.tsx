import Image from 'next/image'
import { useRouter } from 'next/router'
import useMatomo from '@/hooks/useMatomo'

import Categories from './Categories'
import SocialMedia from './SocialMedia'

import kassandraLogo from '@assets/logos/kassandra-footer.svg'
import certikLogo from '@assets/logos/certik.svg'

import * as S from './styles'

const Footer = () => {
  const { trackEvent } = useMatomo()
  const router = useRouter()

  return (
    <S.Footer>
      <S.Wrapper>
        <S.FooterLeft>
          <S.LogoContainer>
            <Image src={kassandraLogo} alt="White kassandra logo" />

            <S.Info>© 2021-{new Date().getFullYear()} Kassandra.</S.Info>
          </S.LogoContainer>

          <S.LogoContainer>
            <S.CertikLink
              href="https://www.certik.com/projects/kassandra-finance"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                trackEvent({
                  category: router.pathname,
                  action: `click-on-link | Footer | ${router.pathname}`,
                  name: 'certik'
                })
              }
            >
              <S.Certik>Audited by</S.Certik>
              <Image src={certikLogo} alt="Certik logo" />
            </S.CertikLink>

            <SocialMedia />
          </S.LogoContainer>
        </S.FooterLeft>

        <Categories />
      </S.Wrapper>
    </S.Footer>
  )
}

export default Footer
