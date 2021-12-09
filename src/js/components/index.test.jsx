import React from 'react';
import {
    render, fireEvent,
} from '@testing-library/react';
import ScrollingListApp from './index';

describe('ScrollingListApp component', () => {
    let usernameElement;
    let passwordElement;
    let screen;
    window.IntersectionObserver = () => { return { observe() {}, disconnect() {} }};

    beforeEach(() => {
        screen = render(<ScrollingListApp />);
        usernameElement = screen.container.querySelectorAll('input')[0];
        passwordElement = screen.container.querySelectorAll('input')[1];
    });

    test('should render login page intially', () => {
        expect(usernameElement).toBeInTheDocument();
        expect(passwordElement).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /login/i })).toBeInTheDocument();
    });

    test('login button should be disabled initially', () => {
        expect(screen.getByRole('button', { name: /login/i })).toBeDisabled();
    });

    test('on entering username and password, login button should get enabled', () => {
        fireEvent.change(usernameElement, { target: { value: 'abc' } });
        fireEvent.change(passwordElement, { target: { value: 'xyz' } });
        expect(screen.getByRole('button', { name: /login/i })).not.toBeDisabled();
    });

    test('on login button click, should render home screen', () => {
        fireEvent.change(usernameElement, { target: { value: 'abc' } });
        fireEvent.change(passwordElement, { target: { value: 'xyz' } });
        fireEvent.click(screen.getByRole('button', { name: /login/i }));

        expect(screen.getByRole('button', { name: /logout/i })).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /up arrow/i })).toBeInTheDocument();
    });

    test('on logout button click, should render login screen', () => {
        fireEvent.change(usernameElement, { target: { value: 'abc' } });
        fireEvent.change(passwordElement, { target: { value: 'xyz' } });
        fireEvent.click(screen.getByRole('button', { name: /login/i }));
        fireEvent.click(screen.getByRole('button', { name: /logout/i }));
        
        expect(screen.getByRole('button', { name: /login/i })).toBeInTheDocument();
    });
});
