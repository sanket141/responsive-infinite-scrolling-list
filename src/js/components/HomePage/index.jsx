import React from 'react';
import {
    LogoutButton,
    ButtonImage,
    UpArrowButton,
} from './HomePage.style';
import ContactListPage from '../ContactListPage';
import LogoutSrc from '../../../media/logout.png';
import UpArrowSrc from '../../../media/up-arrow.png';

function HomePage(props) {
    const { setIsLoggedIn } = props;

    function scrollToTop() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    return (
        <>
            <LogoutButton title="logout" onClick={() => setIsLoggedIn(false)}>
                <ButtonImage src={LogoutSrc} alt="logout"/>
            </LogoutButton>
            <ContactListPage />
            <UpArrowButton title="Up arrow" onClick={scrollToTop}>
                <ButtonImage src={UpArrowSrc} alt="up-arrow"/>
            </UpArrowButton>
        </>
    );
}

export default HomePage;
