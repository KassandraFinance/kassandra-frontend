import styled from "styled-components";
import { ToastContainer } from "react-toastify";
import toastConfig from "../../config/toastConfig";


export const StyledToastContainer = styled(ToastContainer).attrs({
  ...toastConfig,
})`
  .Toastify__toast {
    font-family: 'Rubik';
    font-weight: 300;
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
    border-radius: 6px;
    background: #211426;
    color: #FCFCFC;

    font-size: 16px;
    font-weight: 300;
    .Toastify__progress-bar {
      background: #E8372C;
    }
  }
  .Toastify__toast--success {
    border: 1.6px solid #2CE878;
    border-radius: 6px;
    background: #211426;
    color: #FCFCFC;

    font-size: 16px;
    font-weight: 300;
    .Toastify__progress-bar {
      background: #2CE878;
    }
  }

`;