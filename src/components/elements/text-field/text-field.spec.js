import { render, cleanup } from 'react-testing-library';
import React from 'react';
import { TextField } from './text-field';

const setup = (touched, error) => {
    return render(
        <TextField
            title="Test Title"
            field={{
                name: 'test',
                value: 'test',
                onChange: jest.fn()
            }}
            touched={touched}
            error={error}
        />
    );
};

describe('text-field', () => {
    it('should render normal text-field', async () => {
        const { container } = setup(false, undefined);
        expect(container).toMatchSnapshot('text-field-normal-snapshot');
    });

    it('should render error text-field', async () => {
        const { container } = setup(true, 'Invalid');
        expect(container).toMatchSnapshot('text-field-error-snapshot');
    });

    afterEach(cleanup);
});
