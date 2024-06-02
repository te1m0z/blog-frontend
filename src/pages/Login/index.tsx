import { useContext, useEffect, useState } from "react";
import { useForm, FieldValues } from "react-hook-form";
import { Navigate, redirect } from "react-router-dom";
import { UserContext } from "@/app/contexts/user";
import { observer } from "mobx-react-lite";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import cn from "classnames";

function LoginPage() {
    const userStore = useContext(UserContext);

    const [csrf, setCsrf] = useState("");
    const [formMessage, setFormMessage] = useState("");

    const { register, handleSubmit, formState, watch, setError } = useForm({
        mode: "onTouched",
        reValidateMode: "onSubmit",
    });

    useEffect(() => {
        async function fetchCsrfToken() {
            const token = await userStore.fetchCsrfToken();
            if (token) {
                setCsrf(token);
            }
        }

        fetchCsrfToken();
    }, [userStore]);

    async function onSubmitHandler({ login, password }: FieldValues) {
        const response = await userStore.login({
            login,
            password,
            csrf,
        });

        if (response) {
            throw redirect("/admin");
        }

        setError("login", { type: "wrong_data" });
        setError("password", { type: "wrong_data" });

        setFormMessage('Неправильный логин или пароль');
    }

    useEffect(() => {
        const subscription = watch((value, { name, type }) => {
            console.log(">>", value, name, type);
        });

        return () => subscription.unsubscribe();
    }, [watch]);

    if (userStore.isAuth) {
        return <Navigate to={"/admin"} replace={true} />;
    }

    return (
        <Form onSubmit={handleSubmit(onSubmitHandler)}>
            <Form.Group className="mb-3" controlId="loginFormLogin">
                <Form.Label>Login</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter login"
                    {...register("login", { required: true })}
                    className={cn({ 'is-invalid': formState.errors.login })}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="loginFormPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type="password"
                    placeholder="Password"
                    {...register("password", { required: true })}
                    className={cn({ 'is-invalid': formState.errors.password })}
                />
            </Form.Group>
            <Button type="submit">Submit</Button>
            <div className="mt-3">{formMessage}</div>
        </Form>
    )
}

const Component = observer(LoginPage);

Component.displayName = "LoginPage";

export { Component };
