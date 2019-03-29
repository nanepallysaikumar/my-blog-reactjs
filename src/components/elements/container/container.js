import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import logoUrl from './logo.svg';
import profileUrl from './profile.jpg';
import './container.css';

export const Container = ({ children }) => (
    <div className="container">
        <header className="header">
            <div className="header-logo">
                <Link className="link" to="/">
                    <img
                        className="header-logo-image"
                        src={logoUrl}
                        alt="logo"
                    />
                    <span className="header-logo-text">My Blog</span>
                </Link>
            </div>
            <nav className="header-menu">
                <Link className="link" to="/">
                    <img
                        className="profile-logo-image"
                        src={profileUrl}
                        alt="logo"
                    />{' '}
                     <span className="profile-logo-text">Logout</span>
                </Link>
            </nav>
        </header>
        <main className="content">{children}</main>
        <footer className="footer">
            Copyright &copy; 2019 rights reserved
        </footer>
    </div>
);

Container.propTypes = {
    children: PropTypes.element
};
