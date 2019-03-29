import React from 'react';
import { Formik, Form, Field } from 'formik';
import { loginSchema } from '../../../schemas/blog-schema';
import { TextField } from '../text-field/text-field';
import logoUrl from '../container/logo.svg';

import './login-form.css';

export const LoginForm = ({ onSubmit, title }) => (
    <section className="login-form">
        <h1>
            <img className="header-logo-image" src={logoUrl} alt="logo" />
            {title}
        </h1>
        <Formik validationSchema={loginSchema} onSubmit={onSubmit}>
            {({ errors, touched }) => (
                <Form>
                    <Field
                        name="email"
                        render={({ field }) => (
                            <TextField
                                error={errors[field.name]}
                                touched={touched[field.name]}
                                title="Email"
                                field={{
                                    ...field,
                                    'data-testid': 'email-input'
                                }}
                            />
                        )}
                    />
                    <Field
                        name="password"
                        render={({ field }) => (
                            <TextField
                                error={errors[field.name]}
                                touched={touched[field.name]}
                                title="Password"
                                type="password"
                                field={{
                                    ...field,
                                    'data-testid': 'password-input'
                                }}
                            />
                        )}
                    />
                    <div className="login-form-buttons">
                        <button
                            className="button-primary"
                            type="submit"
                            data-testid="submit"
                        >
                            Login
                        </button>
                    </div>
                </Form>
            )}
        </Formik>
    </section>
);
