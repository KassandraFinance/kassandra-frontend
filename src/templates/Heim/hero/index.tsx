import React from 'react'

// eslint-disable-next-line import/extensions
import * as S from './styles'
import Button from '../../../components/Button'
import MediaMatch from '../../../components/MediaMatch'

export const Hero = () => (

      <S.Container>
        <div>
          <S.Title>Get exposure to the hottest communities in the market.</S.Title>
            <S.SubTitle>Introducing a single asset that tracks the performance of the cryptocurrencies with the most solid and engaged communities</S.SubTitle>
            {/* <a href="https://twitter.com/dao_kassandra" target="_blank" rel="noopener noreferrer">Coming soon...</a> */}
            <MediaMatch greaterThan="large">
              <S.Link>
                <S.ButtonWrapper>
                  <Button backgroundPrimary size="medium">
                    Get Early Access
                  </Button>
                  <Button  size="medium" color=''>
                    Join the community
                  </Button>
                </S.ButtonWrapper>
              </S.Link>
            </MediaMatch>
              <MediaMatch lessThan="large">
                <S.Link>
                  <S.ButtonWrapper>
                    <Button backgroundPrimary size="small">
                      Get Early Access
                    </Button>
                    <Button  size="small" >
                      Join the community
                    </Button>
                  </S.ButtonWrapper>
                </S.Link>
              </MediaMatch>
        </div>
        <S.Image>
          <img src="assets/HeimCurrency.svg" alt="Imagem de uma estatua na cor roxa, com uma aura brilhante, também roxa, na cabeça"/>
        </S.Image>
      </S.Container>


)


export default Hero
