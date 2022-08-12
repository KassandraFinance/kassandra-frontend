import Button from '../../../components/Button'
import Scroll from '../../../components/Scroll'

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
      <h1>Diversify with simple steps through managers and strategies</h1>
      <S.Description>
        <span>
          Social trading made safe: Know who is delegating your money, split
          your exposure and change strategies anytime to save money or scale in
          positions.
        </span>
      </S.Description>
      <Button
        className="start-investing"
        backgroundPrimary
        size="large"
        text="Start Investing"
        icon={<img src="/assets/utilities/go-to-page.svg" alt="go to page" />}
        as="a"
        href="https://app.kassandra.finance/explore"
      />
      <S.ScroolContainer>
        <Scroll />
      </S.ScroolContainer>
    </S.Hero>
  )
}
export default Hero
