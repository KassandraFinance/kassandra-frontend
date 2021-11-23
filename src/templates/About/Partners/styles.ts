import styled from 'styled-components'
import theme from '../../../styles/theme'

export const Container = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 94.3rem;
  margin: 0 auto;
  border-bottom: 1px solid #ffffff24;
`

export const TitleAndIcon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: left;
  margin-bottom: 2.6rem;
`
export const Title = styled.h1`
  font-size: ${theme.font.sizes.font40};
  font-weight: ${theme.font.weight.black};
  line-height: 114%;
  color: #ffffff;
`

export const Icon = styled.div`
  background: #ffffff0a;
  border-radius: 100%;
  width: 4.7rem;
  height: 4.4rem;
  align-items: center;
  display: flex;
  justify-content: center;
  margin-bottom: 2.4rem;
  img {
    max-width: 100%;
  }
`
export const Partners = styled.div`
  width: 55.3rem;
  display: flex;
  justify-content: space-evenly;
  padding-top: 5rem;
  img {
    max-width: 100%;
    max-height: 2.9rem;
  }
`
