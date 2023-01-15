import { toastr } from 'react-redux-toastr';

export const getContentType = () => {
  return {
    'Content-Type': 'application/json'
  };
};

export const errorCatch = (error: any): string => {
  if (error?.response?.data) {
    const message = error.response.data;

    return typeof message === 'object' ? message[0] : message;
  }

  return error.message;
};

export const toastError = (error: any, title = 'Error request') => {
  const message = errorCatch(error);

  toastr.error(title, message);
};
