import React, {useState, useEffect} from "react";
import {Pane, majorScale, Button, AddIcon, ArrowRightIcon, FormField, TextInput} from "evergreen-ui";
import PropTypes from "prop-types"

const initialForm = {
    login: "",
    password: ""
}
const AuthForm = ({onRegistartion, onLogin, isSended, isLoad}) => {
    const [form, setForm] = useState(initialForm)
    useEffect(() => {
        if (isSended) {
            setForm(initialForm)
        }
    }, [form])
    const onChangeHandler = e => {
        const {value, name} = e.target
        setForm(prev => ({...prev, [name]: value}))
    }
    return (
        <Pane maxWidth={500} paddingX={majorScale(1)} marginX={"auto"}
              background={"blueTint"}>
            <Pane marginBottom={majorScale(1)}>
                <FormField labelFor={"email"} label="Email"/>
                <TextInput name={"login"} onChange={onChangeHandler}
                           value={form.login}
                           type={"email"} required
                           autoComplete={"off"}
                           id={"email"} width={"100%"}/>
            </Pane>
            <Pane>
                <FormField labelFor={"password"} label="Password"/>
                <TextInput name={"password"} onChange={onChangeHandler}
                           value={form.password}
                           type={"password"}
                           id={"password"}
                           width={"100%"}/>
            </Pane>
            <Pane paddingY={majorScale(2)}>
                <Button disabled={isLoad} onClick={onRegistartion.bind(null, form)}
                        iconBefore={AddIcon} marginRight={12}>Register</Button>
                <Button disabled={isLoad} onClick={onLogin.bind(null, form)}
                        iconAfter={ArrowRightIcon} appearance={"primary"}>Login</Button>
            </Pane>
        </Pane>
    );
};
AuthForm.propTypes = {
    onRegistration: PropTypes.func,
    onLogin: PropTypes.func,
    isSended: PropTypes.bool
}

export default AuthForm;
