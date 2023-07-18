import { device } from '@/styles/theme'
import styled from 'styled-components'

export const Background = styled.div`
  position: absolute;
  top: var(--header-height);
  left: 0px;
  right: 0px;
  bottom: 0px;

  z-index: -1;

  background-image: url('/assets/images/backgroundBlog/background.svg');
  background-size: cover;

  @media ${device.tabletLarge} {
    display: none;
  }
`
