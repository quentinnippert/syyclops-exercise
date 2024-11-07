import React, { createContext, useCallback, useContext, useState } from 'react'
import Toast from '../components/feedback/Toast';

const ToastContext = createContext(undefined);

export const ToastContextProvider = ({ children }) => {
    const [toastProps, setToastProps] = useState({
        display: false,
        message: '',
        type: 't-success',
    });

    const showToast = useCallback((options) => {
        setToastProps({
            ...options,
            display: true,
        });
        setTimeout(() => {
            setToastProps((prev) => ({ ...prev, display: false }));
        }, options.duration || 3000);
    }, []);

    return (
        <ToastContext.Provider value={{ showToast }}>
            <Toast {...toastProps} />
            <div>{children}</div>
        </ToastContext.Provider>
    );
};

export const useToastContext = () => {
    const context = useContext(ToastContext);

    if (!context) {
        throw new Error(
            "useToastContext have to be used within ToastContextProvider"
        );
    }

    return context;
};