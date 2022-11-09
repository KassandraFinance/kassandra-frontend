import Image from 'next/image'

import FadeIn from '../../../components/Animations/FadeIn'
import Paragraph from '../../../components/Paragraph'

import ManagerFunds from '../../../../public/assets/images/manager-funds.svg'

import * as S from './styles'

const FundManager = () => (
  <S.FundManagerContainer>
    <FadeIn threshold={0.5}>
      <S.TittleWrapper>
        <h1>It’s easy to tokenize your portfolio and become a fund manager</h1>
        <Paragraph
          text="Select tokens straight from your wallet, create your own tokenized
          ERC-20 standard investment fund, and start making money with fees!"
        />
      </S.TittleWrapper>
    </FadeIn>

    <FadeIn threshold={0.5}>
      <S.ImageContent>
        <span>
          <Image
            src={ManagerFunds}
            alt=""
            width={1005}
            height={295}
            layout="responsive"
          />
        </span>
        <S.ImageDescription>
          <p>SELECTED TOKENS</p>
          <span />
          <p>
            KASSANDRA <br /> PROTOCOL
          </p>
          <span />
          <p>INDEX FUND</p>
        </S.ImageDescription>
      </S.ImageContent>
    </FadeIn>
  </S.FundManagerContainer>
)

export default FundManager
