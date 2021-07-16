import styled from 'styled-components'

export const FarmContainer = styled.section`
  h1 {
    font-size: 24px;
    font-weight: 400;
    @media (max-width: 420px) {
      padding: 0 10px;
    }
  }
  h3 {
    font-size: 20px;
    font-weight: 400;
    margin: 16px 0 32px;
    @media (max-width: 420px) {
      padding: 0 10px;
    }
  }
`

export const GridStaking = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 16px;
  margin: 40px 0 64px;
  @media (max-width: 1160px) {
    grid-template-columns: 1fr 1fr;
    gap: 32px;
    height: 100%;
  }
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
  @media (max-width: 420px) {
    gap: 32px;
  }
`

export const TotalVoting = styled.div`
  height: 93px;
  margin: 80px 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  fieldset {
    border: 2px solid #FFBF00;
    font-size: 18px;

    display: flex;
    justify-content: space-between;
    
    width: 100%;
    @media (max-width: 420px) {
      font-size: 16px;
    }
    &:nth-child(1) {
      border-right: none;
      legend {
        margin-left: 32px;
        padding: 0 8px;
      }
      span {
        display: flex;
        align-items: center;
        margin-left: 40px;
      }
    }
    &:nth-child(2) {
      border-left: none;
      legend {
        margin-left:  auto;
        margin-right: 32px;
        padding: 0 8px;
      }
      span {
        display: flex;
        align-items: center;
        margin-left:  auto;
        margin-right: 40px;
      }
    }
  }
`

