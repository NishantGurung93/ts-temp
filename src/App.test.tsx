// There's a contradictory rule around using 'act' but it adds too much noise in the terminal so I've done this as a bandaid solution
/* eslint-disable testing-library/no-unnecessary-act */
import { render, waitFor, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

/* In here please contribute a test or tests that 
show the modal meets WCAG 2.1 AA Standards, you can
put your tests in different files to this one */

describe("App", () => {
    describe("when clicking on sign up button to open registration modal,", () => {
        it("focuses on the email field", async () => {
            render(<App />);

            expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
            expect(screen.getByRole("button", { name: /Sign up/ })).toBeVisible();

            act(() => {
                userEvent.click(screen.getByRole("button", { name: /Sign up/ }));
            })

            await waitFor(() => {
                expect(screen.queryByRole("dialog")).toBeVisible();
            });

            expect(screen.getByRole("textbox")).toHaveFocus(); // Checking WCAG 1.1
        });

        it("can be closed by tabbing into close button and hitting enter", async () => {
            render(<App />);
            const signUpButton = screen.getByRole("button", { name: /Sign up/ });

            act(() => {
                userEvent.click(signUpButton);
            });

            await waitFor(() => {
                expect(screen.queryByRole("textbox")).toHaveFocus();
            });

            // Tab to focus on submit button, WCAG 2.1.1
            userEvent.tab();
            expect(screen.getByRole("button", { name: /Submit/ })).toHaveFocus();

            // Tab again to focus on close button, WCAG 2.1.1
            userEvent.tab();
            expect(screen.getByRole("button", { name: /Close/ })).toHaveFocus();

            act(() => {
                userEvent.keyboard("[Enter]"); // Hitting 'enter' to close modal, WCAG 2.1.2
            });

            await waitFor(() => {
                // Modal closes
                expect(screen.getByRole("dialog")).not.toBeVisible();
            });

            await waitFor(() => {
                // Sign up button is focused again, WCAG 1.2
                expect(screen.getByRole("button", { name: /Sign up/ })).toHaveFocus();
            });
        });
    });


    describe("when using keyboard to open registration modal,", () => {
        it("can be closed by hitting escape key", async () => {
            render(<App />);
            const signUpButton = screen.getByRole("button", { name: /Sign up/ });

            // Tab to focus on sign up button. Checking WCAG 2.1.1
            userEvent.tab();
            expect(signUpButton).toHaveFocus();

            act(() => {
                userEvent.keyboard("[Enter]");
            });

            await waitFor(() => {
                expect(screen.getByRole("dialog")).toBeVisible();
            });

            // Hitting escape key to close modal, WCAG 2.1.2
            act(() => {
                userEvent.keyboard("{Escape}");
            });
            await waitFor(() => {
                expect(screen.getByRole("dialog")).not.toBeVisible();
            });

            await waitFor(() => {
                // Sign up button is focused again, WCAG 1.2
                expect(screen.getByRole("button", { name: /Sign up/ })).toHaveFocus();
            });
        });
    });
});
