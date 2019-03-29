import { render, cleanup } from 'react-testing-library';
import React from 'react';
import { TextArea } from './text-area-field';

const setup = (touched, error) => {
    return render(
        <TextArea
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

describe('text-area-field', () => {
    it('should render normal text-area', async () => {
        const { container } = setup(false, undefined);
        expect(container).toMatchSnapshot('text-area-normal-snapshot');
    });

    it('should render error text-area', async () => {
        const { container } = setup(true, 'Invalid');
        expect(container).toMatchSnapshot('text-area-error-snapshot');
    });

    afterEach(cleanup);
});
