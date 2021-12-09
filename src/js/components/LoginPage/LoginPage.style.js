import styled from 'styled-components';

const LoginBlock = styled.div`
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    border-radius: 1vw;
    border: 0.1vw solid #808080;
    padding: 3vw 5vw;
    width: 30vw;
`;

const Input = styled.input`
    position: relative;
    margin-left: 10%;
    width: 80%;
    margin-top: 2vw;
    border: none;
    border-bottom: 0.1vw solid #808080;
    outline: none;
    font-size: 2vw;
`;

const LoginButton = styled.button`
    position: relative;
    margin-left: 35%;
    margin-top: 2vw;
    width: 30%;
    height: 4vw;
    background-color: #d7263d;
    font-size: 2vw;
    color: #FFFFFF;
    border: none;
    cursor: pointer;
    border-radius: 1vw;
    &[disabled] {
        pointer-events: none;
        outline: none;
        opacity: 0.4;
    }
`;

export {
    LoginBlock,
    Input,
    LoginButton,
};
