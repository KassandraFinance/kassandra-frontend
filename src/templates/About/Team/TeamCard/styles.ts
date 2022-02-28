import styled from 'styled-components'
import theme from '../../../../styles/theme'

export const Card = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  text-align: center;

  img {
    max-width: 100%;
  }
`

export const Image = styled.div`
  max-width: 100%;
  margin-bottom: 1.6rem;

  background: linear-gradient(0deg, #e843c4, #ffbf00);
  border-radius: 50%;

  overflow: hidden;

  img {
    width: 88px;
    height: 88px;
    padding: 2px;

    border-radius: 50%;
  }
`

export const Name = styled.p`
  margin-bottom: 0.4rem;

  font-size: ${theme.font.sizes.font20};
  font-weight: ${theme.font.weight.bold};
  line-height: 110%;
  letter-spacing: 0.04rem;
`

export const Role = styled.p`
  margin-bottom: 1.6rem;

  font-size: ${theme.font.sizes.font12};
  font-weight: ${theme.font.weight.normal};
  line-height: 110%;
  letter-spacing: 0.04rem;
  color: #bdbdbd;
`

export const CardDivider = styled.div`
  width: 6.6rem;
  margin: 0 auto;

  border: 0.1rem solid #ffffff24;
`

export const Social = styled.div`
  width: 11.6rem;
  margin-top: 1.6rem;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`

export const SocialIcon = styled.div`
  width: 2.8rem;
  height: 2.8rem;

  background-color: rgba(33, 20, 38, 0.33);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 50%;

  img {
    padding: 0.5rem;
  }
`
