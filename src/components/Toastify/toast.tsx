import React from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import ToastContent from './content'

export const ToastError = (textContent: string) => toast.error(<ToastContent type="error" title="Error" message={textContent}/>);
export const ToastInfo = (textContent: string) => toast.info(<ToastContent type="info" title="Info" message={textContent}/>);
export const ToastSuccess = (textContent: string) => toast.success(<ToastContent type="success" title="Success" message={textContent}/>);
