import styled from 'styled-components'
import theme from '../../styles/theme'

interface IHeimOperationsContainerProps {
  inputChecked: string;
  typeWithdrawChecked: string;
}

// eslint-disable-next-line prettier/prettier
export const HeimOperationsContainer = styled.div<IHeimOperationsContainerProps>`
  background-color: rgba(255, 255, 255, 0.04);
  border-radius: 12px;

  max-width: 448px;
  max-height: calc(100vh - 40px);

  position: -webkit-sticky;
  position: sticky; 
  top: 20px;
  z-index: 10;
  
  @media (max-width: 1200px) {
    margin: 0 auto;
    display: block;
  }
  @media (max-width: 960px) {
    max-width: 100%;
    margin: 0 0 80px;
  }
`

export const SelectOperator = styled.div`
  background: rgba(31, 31, 31, 0.72);
  border-radius: 12px 12px 0 0;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`

export const Input = styled.input`
  display: none;
`

interface ILabelProps {
  selected: boolean;
}

// eslint-disable-next-line prettier/prettier
export const Label = styled.label<ILabelProps>`
  border-bottom: 2px solid ${props =>
    props.selected ? theme.colors.cyan : 'rgba(255, 255, 255, 0.15)'};
  color: ${props => (props.selected ? '#fff' : theme.colors.gray)};
  font-size: ${theme.font.sizes.font18};
  font-weight: ${theme.font.weight.normal};
  text-align: center;
  text-transform: capitalize;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: ${theme.spacings.space24} 0;

  cursor: pointer;

  @media (max-width: 375px) {
    font-size: 13px;
    padding: 10px 18px;
  }
  @media (max-width: 330px) {
    font-size: ${theme.font.sizes.font12};
    padding: 8px 14px;
  }
`

export const TypeWithdraw = styled.div`
  background: rgba(31, 31, 31, 0.72);
  border-bottom: 2px solid rgba(255, 255, 255, 0.15);

  display: flex;
  flex-direction: column;
  gap: 16px;

  padding: ${theme.spacings.space24} ${theme.spacings.space40};
`

export const TypeRadio = styled.div`
  display: flex;
  align-items: center;

  .radio {
    display: block;
    text-align: left;

    cursor: pointer;
    user-select: none;
    & + .radio {
      margin-top: 7px;
    }
    input {
      display: none;
      & + span {
        line-height: ${theme.font.sizes.font16};
        font-size: ${theme.font.sizes.font16};
        display: inline-block;
        position: relative;
        padding-left: 24px;
        &:before {
          content: '';
          display: block;

          border: 1px solid ${theme.colors.darkGray};
          border-radius: 50%;
          background: ${theme.colors.darkGray};

          width: 16px;
          height: 16px;
          margin-right: 10px;

          position: absolute;
          top: 0px;
          left: 0px;
        }
        &:after {
          content: '';
          display: block;

          background: ${theme.colors.cyan};
          border-radius: 50%;

          width: 10px;
          height: 10px;

          position: absolute;
          top: 3px;
          left: 3px;
          opacity: 0;
          transform: scale(0, 0);
          transition: all 0.2s cubic-bezier(0.64, 0.57, 0.67, 1.53);
        }
      }
      &:checked + span:after {
        opacity: 1;
        transform: scale(1, 1);
      }
    }
  }
`

export const InputWithdraw = styled.input``
