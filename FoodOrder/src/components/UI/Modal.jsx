import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = ({ children, open, className = "", onClose }) => {
  const dialogRef = useRef(null);
  useEffect(() => {
    const modal = dialogRef.current;
    if (open) {
      modal.showModal();
    }

    return () => {
      return modal.close();
    };
  }, [open]);
  const modalClass = `modal ${className}`;
  return createPortal(
    <dialog ref={dialogRef} className={modalClass} onClose={onClose}>
      {children}
    </dialog>,
    document.getElementById("modal")
  );
};

export default Modal;
