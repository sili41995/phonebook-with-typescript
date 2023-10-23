import { ToastContainer } from 'react-toastify';

const Toast = () => (
  <ToastContainer
    position="top-right"
    autoClose={2000}
    hideProgressBar
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="colored"
  />
);

export default Toast;
