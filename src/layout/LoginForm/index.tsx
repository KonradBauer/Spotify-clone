import React from "react";
import {Container, Form, Input, Label, Line, LogInButton, StyledLogo} from "./styled";

interface Form {
    Input: string
    placeholder: string
}

export const LoginForm: React.FC = () => {

    const btnText: string = "zaloguj się"
    const uppercaseText: string = btnText.toUpperCase();

    return (
        <>
            <Container>
                <StyledLogo/>
                <Line/>
                <Form>
                    <Input placeholder={"Login"}/>
                    <Input type="password" placeholder={"Hasło"}/>
                </Form>
                <LogInButton>{uppercaseText}</LogInButton>
            </Container>

        </>
    )
}