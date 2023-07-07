import useMatomoEcommerce from '../../hooks/useMatomoEcommerce'

import Hero from '../../components/Hero'
import Button from '../../components/Button'
import Products from './Products'
import Advantages from './Advantages'
import Partners from './Partners'
import Contribute from '../../components/Contribute'

import * as S from './styles'

const Investors = () => {
  const { trackEventFunction } = useMatomoEcommerce()

  return (
    <>
      <S.Investors>
        <Hero
          titleNumber="01"
          title="investors"
          titleColor="#ffbf00"
          subTitle="Diversify with simple steps through managers and their strategies"
          description="Social trading made safe: know who you are delegating your money to, split your
        exposure and change strategies anytime to save money or scale in
        positions."
          backgroundImg="/assets/images/hero-investor.png"
          backgroundImgHight="calc(100vh - 10rem)"
        >
          <Button
            className="start-investing"
            backgroundPrimary
            size="huge"
            text="Start Investing"
            icon={
              <img src="/assets/utilities/go-to-page.svg" alt="go to page" />
            }
            as="a"
            href="https://app.kassandra.finance"
            onClick={() =>
              trackEventFunction(
                'click-on-button',
                'start-investing',
                `section-investors`
              )
            }
          />
        </Hero>
        <Products />

        <Advantages />

        <Partners />
      </S.Investors>

      <Contribute
        title="Invest in your favorite funds and get KACY"
        text="Accumulate $KACY and earn a stake in all of our protocol fees."
      />
    </>
  )
}

export default Investors
