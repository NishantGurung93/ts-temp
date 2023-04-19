import { ReactNode, RefObject } from "react";

export interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    close: string;
    closeOnOverlayClick?: boolean;
    initialFocusRef?: RefObject<HTMLInputElement>;
    finalFocusRef?: RefObject<HTMLButtonElement>;
    children: ReactNode;
}
