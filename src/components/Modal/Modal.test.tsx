import { render } from "@testing-library/react";
import { ModalComponent } from "./Modal"
import { axe, toHaveNoViolations } from "jest-axe";

expect.extend(toHaveNoViolations)

describe("Modal component", () => {
    const mockOnClose = jest.fn();

    const defaultProps = {
        isOpen: true,
        onClose: mockOnClose,
        closeOnOverlayClick: false,
        title: "Register",
        close: "Submit",
    };

    /* 
        Using jest-axe to assert against accesbility violations
        https://github.com/nickcolley/jest-axe
        This checks that aria labels and attributes have been set
    */
    it('does not violate any checks form jest-axe', async () => {
        const { container } = render(
            <ModalComponent {...defaultProps}>
                <p>ModalBody</p>
            </ModalComponent>);
        const results = await axe(container)

        expect(results).toHaveNoViolations();
    });
});
