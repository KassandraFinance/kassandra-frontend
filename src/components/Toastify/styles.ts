import styled from "styled-components";
import theme from '../../styles/theme'
import { ToastContainer } from "react-toastify";
import toastConfig from "../../config/toastConfig";


export const StyledToastContainer = styled(ToastContainer).attrs({
  ...toastConfig,
})`
  .Toastify__toast {
    font-family: 'Rubik';
    font-weight: ${theme.font.weight.light};
    width: 352px;
    min-height: 68px;
    padding: 0;
    margin-left: 20px;
    position: absolute;
    left: 0;
    bottom: 0px;
  }
  .Toastify__close-button {
    position: absolute;
    right: 12px;
    top: 12px;
  }
  .Toastify__toast--error {
    border-radius: 4px;
    background: rgba(31, 31, 31, 0.82);
    color: ${theme.colors.snow};

    font-size: ${theme.font.sizes.font16};
    font-weight: ${theme.font.weight.light};
    .Toastify__progress-bar {
      background: #E8372C;
    }
  }
  .Toastify__toast--success {
    border-radius: 4px;
    background: rgba(31, 31, 31, 0.82);
    color: ${theme.colors.snow};

    font-size: ${theme.font.sizes.font16};
    font-weight: ${theme.font.weight.light};
    .Toastify__progress-bar {
      background: #2CE878;
    }
  }
  .Toastify__toast--warning {
    border-radius: 4px;
    background: rgba(31, 31, 31, 0.82);
    color: ${theme.colors.snow};

    font-size: ${theme.font.sizes.font16};
    font-weight: ${theme.font.weight.light};
    .Toastify__progress-bar {
      background: #FFBF00;
    }
  }
  .Toastify__toast--info {
    border-radius: 4px;
    background: rgba(31, 31, 31, 0.82);
    color: ${theme.colors.snow};

    font-size: ${theme.font.sizes.font16};
    font-weight: ${theme.font.weight.light};
    .Toastify__progress-bar {
      background: ${theme.colors.cyan};
    }
  }
`;
