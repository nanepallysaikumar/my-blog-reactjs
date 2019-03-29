import React from 'react';
import classnames from 'classnames';
import { FormField } from '../form-field/form-field';

import './text-area-field.css';

export const TextArea = props => (
    <FormField title={props.title} error={props.error} touched={props.touched}>
        <textarea
            placeholder={props.placeholder}
            {...props.field}
            className={classnames('text-area-field', {
                error: props.error && props.touched
            })}
        />
    </FormField>
);
