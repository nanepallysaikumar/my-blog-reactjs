import React from 'react';
import { withRouter } from 'react-router-dom';
import { LoginForm } from '../../elements/login-form/login-form';

class LoginBase extends React.Component {
    render() {
        return (
            <div className="container">
                <main className="content">
                    {' '}
                    <LoginForm onSubmit={() => {
                        this.props.history.push('/blogs');
                    }} title="Login" />
                </main>
                <footer className="footer">
                    Copyright &copy; 2019 rights reserved
                </footer>
            </div>
        );
    }
}

export const Login = withRouter(LoginBase);
