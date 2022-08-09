import styled from 'styled-components'

export const InvestorsContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  background: url('/assets/images/bg-investors-1920.webp'),
    url('/assets/images/bg-investors-1920.png');
  background-repeat: no-repeat;
  background-size: auto;
  background-position: top left;

  @media (max-width: 768px) {
    background: url('/assets/images/bg-investors-768.webp'),
      url('/assets/images/bg-investors-768.png');
  }

  @media (max-width: 360px) {
    background: url('/assets/images/bg-investors-360.webp'),
      url('/assets/images/bg-investors-360.png');
  }
`
