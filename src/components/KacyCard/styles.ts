import styled from 'styled-components'
import theme from '../../styles/theme'

import * as ButtonStyles from '../Button/styles'

export const Container = styled.div`
  max-width: 100%;
  margin: 0 auto 16rem;
  padding: 10rem 0 0;

  background: url('assets/BlurDivisor.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  @media (max-width: 1050px) {
    margin: 0 auto 7rem;
    padding: 0 3.2rem;
  }

  @media (max-width: 560px) {
    margin: 0 auto 4rem;
  }
`
export const KassandraToken = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;

  max-width: 100rem;
  margin: 0 auto 14rem;
  gap: 3.2rem;

  @media (max-width: 960px) {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
  }
`
export const KassandraInfo = styled.div`
  max-width: 45.5rem;

  @media (max-width: 960px) {
    margin: 0 auto;
  }

  h1 {
    margin: 0;

    font-size: ${theme.font.sizes.font48};
    font-weight: ${theme.font.weight.bold};
    line-height: 5rem;

    @media (max-width: 960px) {
      font-size: ${theme.font.sizes.font36};
    }
    @media (max-width: 450px) {
      font-size: ${theme.font.sizes.font32};
    }
  }

  p {
    margin-bottom: 1.2rem;

    color: #e843c4;
    font-size: ${theme.font.sizes.font14};
    letter-spacing: 0.4rem;
  }

  span {
    display: inline-block;
    margin-top: 3.2rem;

    color: #bdbdbd;
    font-size: ${theme.font.sizes.font16};
    font-weight: ${theme.font.weight.light};
    line-height: 155%;
  }
`

export const SocialContainer = styled.div`
  display: flex;
  margin-top: 3rem;
  gap: 2.6rem;
`

export const Card = styled.div`
  max-width: 45.6rem;
  max-height: max-content;

  border-radius: 1.2rem;
  background: rgba(31, 31, 31, 0.72);
  box-shadow: 0px 4px 69px -17px rgba(0, 0, 0, 0, 51);

  @media (max-width: 960px) {
    width: 100%;
    margin: 0 auto;
    margin-top: 3rem;
  }
`

export const KassandraCardHeader = styled.div`
  position: relative;

  width: 100%;
  height: 10rem;

  background: #130916 url('assets/kassandra-600-cardHeader.png') no-repeat;
  background-position: right 20% bottom 60%;
  background-size: 65%;
  border-radius: 1.2rem;

  -webkit-box-shadow: inset 0px -81px 61px -20px rgba(19, 9, 22, 0.75);
  -moz-box-shadow: inset 0px -81px 61px -20px rgba(19, 9, 22, 0.75);
  box-shadow: inset 0px -81px 61px -20px rgba(19, 9, 22, 0.75);
`

export const ImageWrapper = styled.div`
  position: absolute;
  left: 4.9rem;
  top: 3.6rem;

  display: flex;
  align-items: center;
  justify-content: center;

  height: 9.6rem;
  width: 9.6rem;

  background-color: #211426;
  border-radius: 50%;

  @media (max-width: 530px) {
    left: 3.2rem;
    top: 3.6rem;

    height: 8.6rem;
    width: 8.6rem;
  }
`

export const TextWrapper = styled.div`
  max-width: 36rem;
  margin: 5.5rem auto 2.4rem;

  text-align: left;

  @media (max-width: 960px) {
    margin: 4rem auto;
  }
  @media (max-width: 530px) {
    padding: 0 3.2rem;
  }

  p {
    margin: 0.8rem 0;

    color: #bdbdbd;
    font-size: ${theme.font.sizes.font12};
    text-align: left;
    letter-spacing: 0;
  }

  span {
    margin-top: 3rem;

    font-size: ${theme.font.sizes.font14};
    font-weight: ${theme.font.weight.light};
    line-height: 180%;
  }
`

export const NameAndSymbol = styled.div`
  display: flex;
  align-items: center;

  h1 {
    margin: 0;

    font-size: ${theme.font.sizes.font48};
    font-weight: ${theme.font.weight.light};
    line-height: 104%;

    @media (max-width: 960px) {
      font-size: ${theme.font.sizes.font36};
    }
    @media (max-width: 450px) {
      font-size: ${theme.font.sizes.font32};
    }
  }

  h3 {
    margin-top: 0.6rem;
    margin-left: 1.6rem;
    padding: 0.8rem 1.2rem;

    font-size: ${theme.font.sizes.font12};
    font-weight: ${theme.font.weight.light};

    background-color: rgba(0, 0, 0, 0.19);
    border-radius: 1rem;
  }
`

export const TokenInfo = styled.div`
  display: flex;
  justify-content: space-between;
  justify-items: center;
  gap: 5rem;

  margin: auto;
  max-width: 36rem;
  margin-bottom: 1.4rem;

  @media (max-width: 530px) {
    padding: 0 3.2rem;
  }
`

interface IKacyPriceProps {
  isValuePercentage: boolean;
}
// eslint-disable-next-line prettier/prettier
export const Price = styled.div<IKacyPriceProps>`
  display: flex;
  align-items: center;

  > div {
    display: flex;
    align-items: center;
    margin-left: 1.2rem;

    p {
      margin-left: 0.2rem;

      color: ${props => (props.isValuePercentage ? '#5ee56b' : '#E8372C')};
      font-size: ${theme.font.sizes.font16};
      font-weight: ${theme.font.weight.light};
    }
  }

  span {
    font-size: ${theme.font.sizes.font14};
    font-weight: ${theme.font.weight.light};
  }
`

export const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;

  margin: 2.8rem auto;
  max-width: 36rem;

  @media (max-width: 960px) {
    flex-direction: column;
    align-items: center;
  }
  @media (max-width: 530px) {
    padding: 0 3.2rem;
  }

  ${ButtonStyles.Wrapper} {
    width: 65%;

    @media (max-width: 960px) {
      margin-bottom: 1.6rem;
      width: 100%;
    }
  }

  a {
    text-decoration: none;
    color: ${theme.colors.snow};
    font-size: ${theme.font.sizes.font14};
    font-weight: ${theme.font.weight.light};
  }
`

export const Responsabilities = styled.section`
  display: flex;
  margin: 0 auto;
  max-width: 100rem;

  @media (max-width: 960px) {
    margin: 4rem 0;
  }
  @media (max-width: 820px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`
export const ResponsabilitiesTitle = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 22rem;
  margin-right: 8rem;

  h1 {
    font-size: 3.6rem;
    line-height: 104%;
    font-weight: ${theme.font.weight.semibold};
  }

  @media (max-width: 960px) {
    margin: 0 3.2rem 3rem;
  }
  @media (max-width: 820px) {
    max-width: 100%;
    margin: 0 0 3rem;
  }
`

export const ResponsabilitiesDivider = styled.div`
  max-width: 10rem;
  margin-block: 1.8rem;

  border: 0.1rem solid ${theme.colors.cyan};
`

export const MobileCards = styled.div`
  @media (min-width: 621px) {
    display: flex;
  }

  @media (max-width: 820px) {
    margin: 0 0;
  }

  @media (max-width: 620px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`

export const ResponsabilitiesCards = styled.div`
  max-width: 14rem;
  margin-right: 4rem;
  margin-left: 4rem;

  span {
    display: inline-block;
    margin-top: 2.6rem;

    font-size: ${theme.font.sizes.font16};
    font-weight: ${theme.font.weight.light};
    line-height: 104%;

    @media (max-width: 960px) {
      margin-bottom: 2.4rem;
      max-width: 10rem;

      font-size: ${theme.font.sizes.font14};
    }
  }
`

export const IconWrapper = styled.div`
  display: table-cell;
  vertical-align: middle;

  max-width: auto;
  width: 7.8rem;
  height: 7.3rem;

  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 1.2rem;
  text-align: center;
`
