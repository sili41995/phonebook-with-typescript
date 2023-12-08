import { toast } from 'react-toastify';
import { Message } from 'types/types';

const errorToast = (message: Message): void => {
  toast.error(message);
};

const successToast = (message: Message): void => {
  toast.success(message);
};

const warnToast = (message: Message): void => {
  toast.warn(message);
};

const toasts = { errorToast, successToast, warnToast };

export default toasts;
