import Header from '../../components/Header/newHeader'
import FAQ from './FAQ'
import Hero from './Hero'
import Products from './Products'
import Advantages from './Advantages'
import Partners from './Partners'

import * as S from './styles'

const Investors = () => {
  return (
    <>
      <Header />
      <S.InvestorsContainer>
        <Hero />
        <Products />
        <Advantages />
        <Partners />
        <FAQ />
      </S.InvestorsContainer>
    </>
  )
}

export default Investors
