import { toast } from 'react-toastify';

const errorToast = (message: string): void => {
  toast.error(message);
};

const successToast = (message: string): void => {
  toast.success(message);
};

const warnToast = (message: string): void => {
  toast.warn(message);
};

const toasts = { errorToast, successToast, warnToast };

export default toasts;
