import styled, { css } from "styled-components";
import theme from '../../styles/theme'
import { ToastContainer } from "react-toastify";
import toastConfig from "../../config/toastConfig";


export const StyledToastContainer = styled(ToastContainer).attrs({
  ...toastConfig,
})`
  ${({ theme }) => css`
    .Toastify__toast {
      font-family: 'Rubik';
      font-weight: ${theme.font.weight.light};
      width: 352px;
      min-height: 68px;
      padding: 0;
      margin-right: 20px;
      position: absolute;
      right: 0;
    }
    .Toastify__close-button {
      position: absolute;
      right: 12px;
      top: 12px;
    }
    .Toastify__toast--error {
      border: 1.6px solid #E8372C;
      border-radius: ${theme.border.radius};
      background: ${theme.colors.darkPurple}
;
      color: ${theme.colors.snow};

      font-size: ${theme.font.sizes.font16};
      font-weight: ${theme.font.weight.light};
      .Toastify__progress-bar {
        background: #E8372C;
      }
    }
    .Toastify__toast--success {
      border: 1.6px solid #2CE878;
      border-radius: ${theme.border.radius};
      background: ${theme.colors.darkPurple}
;
      color: ${theme.colors.snow};

      font-size: ${theme.font.sizes.font16};
      font-weight: ${theme.font.weight.light};
      .Toastify__progress-bar {
        background: #2CE878;
      }
    }
    .Toastify__toast--warning {
      border: 1.6px solid #FFBF00;
      border-radius: ${theme.border.radius};
      background: ${theme.colors.darkPurple}
;
      color: ${theme.colors.snow};

      font-size: ${theme.font.sizes.font16};
      font-weight: ${theme.font.weight.light};
      .Toastify__progress-bar {
        background: #FFBF00;
      }
    }
    .Toastify__toast--info {
      border: 1.6px solid ${theme.colors.cyan};
      border-radius: ${theme.border.radius};
      background: ${theme.colors.darkPurple}
;
      color: ${theme.colors.snow};

      font-size: ${theme.font.sizes.font16};
      font-weight: ${theme.font.weight.light};
      .Toastify__progress-bar {
        background: ${theme.colors.cyan};
      }
    }
  `}
`;
