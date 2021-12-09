import React, { useState } from 'react';
import LoginPage from './LoginPage';
import HomePage from './HomePage';

function ScrollingListApp() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <>
            {!isLoggedIn && <LoginPage setIsLoggedIn={setIsLoggedIn} />}
            {isLoggedIn && <HomePage setIsLoggedIn={setIsLoggedIn} />}
        </>
    );
}

export default ScrollingListApp;
