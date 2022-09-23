// import FAQ from './FAQ'
import Hero from './Hero'
import Products from './Products'
import Advantages from './Advantages'
import Partners from './Partners'
import Contribute from '../../components/Contribute'

import * as S from './styles'

const Investors = () => {
  return (
    <>
      <S.InvestorsContainer>
        <Hero />

        <Products />

        <Advantages />

        <Partners />

        {/* <FAQ /> */}
      </S.InvestorsContainer>

      <Contribute
        title="Invest in your favorite funds and get KACY"
        text="Accumulate $KACY and earn a stake in all of our protocol fees."
      />
    </>
  )
}

export default Investors
