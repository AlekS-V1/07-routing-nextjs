'use client';
import css from './Modal.module.css';
import { useRouter } from 'next/navigation';
import { createPortal } from 'react-dom';

type Props = {
  children: React.ReactNode;
  noteTag: string;
};

const ModalPreview = ({ children, noteTag }: Props) => {
  const router = useRouter();

  const close = () => {
    router.back();
  };

  return createPortal(
    <div
      className={css.backdrop}
      onClick={close}
      role="dialog"
      aria-modal="true"
    >
      <div onClick={(e) => e.stopPropagation()} className={css.modal}>
        <button
          className={css.closeButton}
          onClick={close}
          aria-label="Close modal"
        >
          &times;
        </button>
        {children}
      </div>
    </div>,
    document.body
  );
};

export default ModalPreview;
