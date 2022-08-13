import Link from 'next/link'
import Button from '../../../components/Button'
import Scroll from '../../../components/Scroll'

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
            Be part of a community of skilled fund managers and help us create
            smart investment funds, earning additional income when people invest
            in them
          </p>
          <Link href="https://3j2bd7x9okh.typeform.com/to/bBnYwVOD" passHref>
            <Button
              as="a"
              target="_blank"
              text="Create your fund"
              size="medium"
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
      <S.ScrollContainer>
        <Scroll />
      </S.ScrollContainer>
    </S.HeroContainer>
  </>
)

export default HeroManager
