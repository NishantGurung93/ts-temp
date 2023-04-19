import "./styles.css";
import Modal from "./components/Modal";
import { Button, Flex, useDisclosure, Input, Box } from "@chakra-ui/react";
import React from "react";

/*

Interview Task:

Create a WCAG 2.1 AA Compliant Modal

Put any content you want in the modal,
ensure it is dismissable or closable,
include comments to help us understand
your choices, the modal must prevent 
interaction with the underlying page
until dismissed or actioned

Write some tests to confirm that the
modal works and is compliant

Create some styles, remember any styles
should also be WCAG 2.1 AA Compliant

NB: Getting the task done is more important than
it being complete, don't worry about implementing 
the solution in a single file

Use comments to explain missing parts of the 
implementation or to explain where you stopped
and why - the more comments you leave us the
easier it will be for use to understand how you
write code :)

Feel free to add libraries on the left,
the test runner is in a tab on the right

*/

export default function App() {
    const { onOpen, isOpen, onClose } = useDisclosure();
    const initialRef = React.useRef<HTMLInputElement>(null);
    const finalRef = React.useRef<HTMLButtonElement>(null);

    return (
        <Box className="App" mt={4}>
            <h1>NewDay</h1>
            <h2>Click the button below to register</h2>
            <Button onClick={onOpen} ref={finalRef}>
                Sign up
            </Button>

            <Modal
                isOpen={isOpen}
                onClose={onClose}
                closeOnOverlayClick={false}
                initialFocusRef={initialRef}
                finalFocusRef={finalRef}
                title="Register"
                close="Submit"
            >
                <div>
                    <Flex direction="column" gap={4}>
                        <label htmlFor="email" id="email-label">
                            To register, enter your email
                        </label>
                        <Input
                            id="email"
                            name="email"
                            ref={initialRef}
                            placeholder="john@doe.com"
                            aria-labelledby="email-label"
                            autoComplete="off"
                            type="email"
                        />
                    </Flex>
                </div>
            </Modal>
        </Box>
    );
}
