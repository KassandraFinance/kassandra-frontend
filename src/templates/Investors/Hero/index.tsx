import Button from '../../../components/Button'
import ScrollAnimation from '../../../components/ScrollAnimation'

import * as S from './styles'

const Hero = () => {
  return (
    <S.Hero>
      <S.BackgroundImage />
      <S.Title>
        <span>01</span>
        <hr />
        <span>INVESTORS</span>
      </S.Title>
      <h1>Diversify with simple steps through managers and their strategies</h1>
      <S.Description>
        <span>
          Social trading made safe: know who is delegating your money, split
          your exposure and change strategies anytime to save money or scale in
          positions.
        </span>
      </S.Description>
      <Button
        className="start-investing"
        backgroundPrimary
        size="huge"
        text="Start Investing"
        icon={<img src="/assets/utilities/go-to-page.svg" alt="go to page" />}
        as="a"
        href="https://app.kassandra.finance/explore"
      />
      <S.ScroolContainer>
        <ScrollAnimation />
      </S.ScroolContainer>
    </S.Hero>
  )
}
export default Hero
