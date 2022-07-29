import styled from 'styled-components'
import theme from '../../../styles/theme'

export const HeimOperationContainerMobile = styled.div`
  background-color: #151117;

  display: flex;
  align-items: center;
  justify-content: space-around;

  position: fixed;
  bottom: 8.3rem;
  left: 2.5rem;
  right: 2.5rem;
  z-index: 19;
  border-radius: 1.6rem;

  @media (min-width: 961px) {
    display: none;
  }

  @media (min-width: 840px) {
    bottom: 2rem;
  }
`

export const SelectOperatorMobile = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 100%;

  background: rgba(31, 31, 31, 0.72);
  border-radius: 1.2rem;
`

export const InputMobile = styled.input`
  display: none;
`

interface ILabelMobileProps {
  selectedMobile: boolean;
}

// prettier-ignore
export const LabelMobile = styled.label<ILabelMobileProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: ${theme.spacings.space24} 0;

  color: ${props => (props.selectedMobile ? '#fff' : theme.colors.gray)};
  font-size: ${theme.font.sizes.font16};
  font-weight: ${theme.font.weight.normal};
  text-align: center;
  text-transform: capitalize;

  border-bottom: 0.2rem solid ${props =>
    props.selectedMobile ? theme.colors.cyan : 'rgba(31,31,31,0.72)'};

  cursor: pointer;

  &:first-of-type {
    margin-left: 1.2rem;
  }
  &:last-child {
    margin-right: 1.2rem;
  }

  @media (max-width: 375px) {
    padding: 1.8rem;
    font-size: 1.3rem;
  }

  @media (max-width: 330px) {
    padding: 1.6rem;
    font-size: ${theme.font.sizes.font12};
  }
`
