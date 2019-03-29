import React from 'react';
import './form-field.css';

export const FormField = ({ title, children, error, touched, name }) => (
    <div className="form-field">
        <label className="form-field-label">{title}</label>
        {children}
        {error && touched && (
            <div
                data-testid={`form-field-error-${name}`}
                className="form-field-error"
            >
                {error}
            </div>
        )}
    </div>
);
