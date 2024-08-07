import React from "react";
import useEscape from "../../hooks/use-escape";
export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([
    { id: crypto.randomUUID(), message: "msg1", variant: "notice" },
    { id: crypto.randomUUID(), message: "msg4", variant: "error" },
  ]);

  function addToast(message, variant) {
    setToasts([
      ...toasts,
      {
        id: crypto.randomUUID(),
        message: message,
        variant: variant,
      },
    ]);
  }

  function removeToast(id) {
    const newToasts = toasts.filter((toast) => toast.id !== id);
    setToasts(newToasts);
  }

  const removeAllToasts = React.useCallback(() => {
    setToasts([]);
  }, []);

  useEscape(removeAllToasts);

  return (
    <ToastContext.Provider
      value={{
        toasts,
        addToast,
        removeToast,
        removeAllToasts,
      }}
    >
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
