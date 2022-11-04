import Link from 'next/link'
import Button from '../../../components/Button'
import ScrollAnimation from '../../../components/ScrollAnimation'

import * as S from './styles'

const HeroManager = () => (
  <>
    <S.HeroContainer>
      <S.ImageContent />
      <S.HeroContent>
        <S.ManagerNumberPage>
          <p>02</p>
          <span />
          <p>Manager</p>
        </S.ManagerNumberPage>
        <S.HeroDescription>
          <h1>Earn money managing funds in a uniquely innovative hub</h1>
          <p>
            Be part of a community of skilled managers creating smart investment
            funds and get paid for it
          </p>
          <Link href="https://3j2bd7x9okh.typeform.com/to/bBnYwVOD" passHref>
            <Button
              as="a"
              target="_blank"
              text="Create your fund"
              size="huge"
              backgroundPrimary
              icon={
                <img
                  src="/assets/utilities/go-to-page.svg"
                  alt=""
                  width={16}
                  height={16}
                />
              }
            />
          </Link>
        </S.HeroDescription>
      </S.HeroContent>
      <ScrollAnimation />
    </S.HeroContainer>
  </>
)

export default HeroManager
