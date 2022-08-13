import Header from '../../components/Header/newHeader'
import FAQ from './FAQ'
import Hero from './Hero'
import Products from './Products'
import Advantages from './Advantages'
import Partners from './Partners'

import * as S from './styles'
import Contribute from '../DAO/Contribute'

const Investors = () => {
  return (
    <>
      <S.HeaderWrapper>
        <Header />
      </S.HeaderWrapper>
      <S.InvestorsContainer>
        <Hero />
        <Products />
        <Advantages />
        <Partners />
        {/* <FAQ /> */}
      </S.InvestorsContainer>
      <Contribute />
    </>
  )
}

export default Investors
