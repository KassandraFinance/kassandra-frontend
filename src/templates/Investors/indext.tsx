import Button from '../../components/Button'
import Header from '../../components/Header'
import { products } from '../../constants/tokenAddresses'
import FundCard from './FundCard'
import * as S from './styles'

const Investors = () => {
  return (
    <>
      <Header />
      <S.InvestorsContainer>
        <S.Hero>
          <S.Title>
            <span>01</span>
            <hr />
            <span>Investors</span>
          </S.Title>
          <h1>
            Diversify with simple steps through trustworthy managers and
            strategies.
          </h1>
          <S.Description>
            <span>
              Social trading made safe: Know who is delegating your money, split
              your exposure and change strategies anytime to save money or scale
              in positions.
            </span>
          </S.Description>
          <Button
            className="start-investing"
            backgroundPrimary
            size="large"
            text="Start Investing"
            icon={
              <img src="/assets/utilities/go-to-page.svg" alt="go to page" />
            }
          />
        </S.Hero>
        <S.Products>
          <h1>Start exploring KassandraDAO</h1>
          <span>Here are some index funds created by us...</span>
          <S.FundsCards>
            {products.map(product => (
              <FundCard key={product.symbol} fund={product} />
            ))}
          </S.FundsCards>
        </S.Products>
      </S.InvestorsContainer>
    </>
  )
}

export default Investors
