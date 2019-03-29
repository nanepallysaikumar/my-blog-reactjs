import React from 'react';
import classnames from 'classnames';
import { FormField } from '../form-field/form-field';
import './text-field.css';

export const TextField = props => (
    <FormField
        title={props.title}
        name={props.field.name}
        error={props.error}
        touched={props.touched}
    >
        <input
            placeholder={props.placeholder}
            type={props.type || 'text'}
            {...props.field}
            className={classnames('text-field', {
                error: props.error && props.touched
            })}
        />
    </FormField>
);
