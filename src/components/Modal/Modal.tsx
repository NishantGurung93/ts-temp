import {
    Button,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay
} from "@chakra-ui/react";
import { ModalProps } from "./types";

// Making a re-usable modal component for Chakra, an accessibility friendly component library https://chakra-ui.com/docs/components/modal#accessibility
export const ModalComponent = ({
    isOpen,
    onClose,
    title,
    close,
    initialFocusRef,
    finalFocusRef,
    closeOnOverlayClick = true,
    children
}: ModalProps): JSX.Element => (
    <Modal
        closeOnOverlayClick={closeOnOverlayClick}
        initialFocusRef={initialFocusRef}
        finalFocusRef={finalFocusRef}
        isOpen={isOpen}
        onClose={onClose}
        returnFocusOnClose
    >
        <ModalOverlay />
        <ModalContent>
            <ModalHeader>{title}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>{children}</ModalBody>
            <ModalFooter>
                <Button onClick={onClose}>{close}</Button>
            </ModalFooter>
        </ModalContent>
    </Modal>
);
