import styled from 'styled-components'
import theme from '../../../../styles/theme'

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  height: 100%;
  img {
    max-width: 100%;
  }
`
export const Image = styled.div`
  border-radius: 50%;
  background: linear-gradient(0deg, #e843c4, #ffbf00);
  margin-bottom: 1.6rem;
  max-width: 100%;
  overflow: hidden;

  img {
    padding: 2px;
    border-radius: 50%;
    width: 88px;
    height: 88px;
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
  font-weight: ${theme.font.weight.normal};
  line-height: 110%;
  letter-spacing: 0.04rem;
  margin-bottom: 1.6rem;
  color: #bdbdbd;
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
  justify-content: space-around;
  width: 116px;
  margin-top: 2.4rem;
`
export const SocialIcon = styled.div`
  background: rgba(33, 20, 38, 0.33);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 50%;
  width: 2.8rem;
  height: 2.8rem;

  img {
    padding: 5px;
  }
`
