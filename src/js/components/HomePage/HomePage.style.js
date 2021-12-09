import styled from 'styled-components';

const Button = styled.button`
    position: fixed;
    right: 1%;
    border: none;
    background: none;
    cursor: pointer;
`;

const LogoutButton = styled(Button)`
    top: 2%;
    width: 5.5vw;
    height: 5vw;
`;

const ButtonImage = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`;

const UpArrowButton = styled(Button)`
    bottom: 7%;
    width: 4.5vw;
    height: 4vw;
`;

export {
    LogoutButton,
    ButtonImage,
    UpArrowButton,
};
