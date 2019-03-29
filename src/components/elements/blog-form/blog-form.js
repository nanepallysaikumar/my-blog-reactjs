import React from 'react';
import { Formik, Form, Field } from 'formik';
import { blogSchema } from '../../../schemas/blog-schema';
import { TextField } from '../text-field/text-field';
import { TextArea } from '../text-area-field/text-area-field';

import './blog-form.css';

export const BlogForm = ({ blog, onSubmit, goBack, title }) => (
    <section className="blog-form">
        <h1>{title}</h1>
        <Formik
            initialValues={blog}
            validationSchema={blogSchema}
            onSubmit={onSubmit}
        >
            {({ errors, touched }) => (
                <Form>
                    <Field
                        name="header"
                        render={({ field }) => (
                            <TextField
                                error={errors[field.name]}
                                touched={touched[field.name]}
                                title="Header"
                                field={{
                                    ...field,
                                    'data-testid': 'header-input'
                                }}
                            />
                        )}
                    />
                    <Field
                        name="body"
                        render={({ field }) => (
                            <TextArea
                                error={errors[field.name]}
                                touched={touched[field.name]}
                                title="Body"
                                field={{
                                    ...field,
                                    'data-testid': 'body-input'
                                }}
                            />
                        )}
                    />
                    <div className="blog-form-buttons">
                        <button
                            className="button-primary"
                            type="submit"
                            data-testid="submit"
                        >
                            Submit
                        </button>
                        <button
                            onClick={goBack}
                            type="button"
                            data-testid="cancel"
                            className="button"
                        >
                            Cancel
                        </button>
                    </div>
                </Form>
            )}
        </Formik>
    </section>
);
