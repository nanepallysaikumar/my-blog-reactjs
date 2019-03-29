import {
    render,
    fireEvent,
    cleanup,
    waitForDomChange,
    wait
} from 'react-testing-library';
import React from 'react';
import { BlogForm } from './blog-form';

const setup = (title, blog) => {
    const onSubmit = jest.fn();
    const goBack = jest.fn();
    const { getByTestId } = render(
        <BlogForm
            blog={blog}
            onSubmit={onSubmit}
            goBack={goBack}
            title={title}
        />
    );

    return {
        onSubmit,
        goBack,
        getByTestId
    };
};

describe('Form', () => {
    it('cancel button to call goBackCallback', async () => {
        const { goBack, getByTestId } = setup('Add Form', {
            header: '',
            body: ''
        });
        await fireEvent.click(getByTestId('cancel'));
        expect(goBack).toBeCalled();
    });

    it('show error message on invalid input', async () => {
        const { getByTestId } = setup('Add Form', {
            header: '',
            body: ''
        });
        await fireEvent.click(getByTestId('submit'));
        await waitForDomChange();
        expect(getByTestId('header-input').classList.contains('error')).toBe(
            true
        );
        expect(getByTestId('body-input').classList.contains('error')).toBe(
            true
        );
    });

    it('should call onsubmit on valid input', async () => {
        const { getByTestId, onSubmit } = setup('Add Form', {
            header: '',
            body: ''
        });
        await fireEvent.change(getByTestId('header-input'), {
            target: { value: 'test heading' }
        });
        await fireEvent.change(getByTestId('body-input'), {
            target: { value: 'test body' }
        });
        await fireEvent.click(getByTestId('submit'));
        await wait();
        expect(onSubmit).toBeCalled();
    });

    afterEach(cleanup);
});
