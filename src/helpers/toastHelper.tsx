/**
 Mr : Dang Xuan Truong
 Email: truongdx@runsystem.net
 */
import { toast } from 'react-toastify';

export const toastError = (error) => {
    let message = null;
    if (typeof error === 'object' && error.message) {
        ({ message } = error);
    }
    if (message !== null && typeof message !== 'undefined') {
        toast.error(message);
    }
};

export const toastSuccess = (message) => {
    if (message !== null && typeof message !== 'undefined') {
        toast.success(message);
    }
};
