import React, { useState, useEffect } from 'react';
import {
    LoginBlock,
    LoginButton, 
    Input,
} from './LoginPage.style';

function LoginPage(props) {
    const { setIsLoggedIn } = props;
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loginDisabled, setLoginDisabled] = useState(true);

    useEffect(() => {
        if(username !== '' && password !== ''){
            setLoginDisabled(false);
        } else{
            setLoginDisabled(true);
        }
    }, [username, password]);

    return (
        <LoginBlock>
            <Input
                type="text"
                placeholder="Username"
                onChange={event => setUsername(event.target.value)}
            />
            <Input
                type="password"
                placeholder="Password"
                onChange={event => setPassword(event.target.value)}
            />
            <LoginButton title="login" disabled={loginDisabled} onClick={() => setIsLoggedIn(true)}>
                Login
            </LoginButton>
        </LoginBlock>
    );
}

export default LoginPage;
