import Button from '../../../components/Button'
import Scroll from '../../../components/Scroll'

import * as S from './styles'

const HeroManager = () => (
  <>
    <S.HeroContainer>
      <S.HeroContent>
        <S.ImageContent>
          <img src="/assets/images/manager-hero.svg" alt="" />
        </S.ImageContent>

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
          <Button
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
        </S.HeroDescription>
      </S.HeroContent>
      <S.ScrollContainer>
        <Scroll />
      </S.ScrollContainer>
    </S.HeroContainer>
  </>
)

export default HeroManager
