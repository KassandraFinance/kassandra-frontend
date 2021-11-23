import styled from 'styled-components'
import theme from '../../../../styles/theme'

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  img {
    max-width: 100%;
  }
`
export const Image = styled.div`
  img {
    margin-bottom: 1.6rem;
    max-width: 100%;
  }
`
export const Name = styled.h2`
  font-size: ${theme.font.sizes.font20};
  font-weight: ${theme.font.weight.bold};
  line-height: 110%;
  letter-spacing: 0.04rem;
  margin-bottom: 0.4rem;
`
export const Role = styled.h3`
  font-size: ${theme.font.sizes.font12};
  line-height: 110%;
  letter-spacing: 0.04rem;
  margin-bottom: 1.6rem;
  color: #c4c4c4;
`

export const CardDivider = styled.div`
  width: 6.6rem;
  border: 0.1rem solid #ffffff24;
  margin: 0 auto;
`
export const Social = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 2.4rem;
`
export const SocialIcon = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-right: 1.6rem;
  img {
    max-width: 2.8rem;
  }
`
