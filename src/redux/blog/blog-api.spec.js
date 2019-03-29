import { createApiActions } from './blog-api';
import {
    BLOG_ADD_ITEM,
    BLOG_EDIT_ITEM,
    BLOG_REMOVE_ITEM,
    BLOG_UPDATE_LIST
} from './blog-constants';

describe('blog-api', () => {
    const blog = {
        id: '34123',
        header: 'test heading',
        body: 'test body'
    };

    describe('addBlogItem', () => {
        it('should call fetch/dispatch with proper arguments', async () => {
            const jsonMock = jest.fn().mockResolvedValue(blog);
            const dispatchMock = jest.fn().mockResolvedValue({});
            const fetchMock = jest.fn().mockResolvedValue({
                status: 201,
                json: jsonMock
            });
            const blogApi = createApiActions(fetchMock);
            await blogApi.addBlogItem(blog)(dispatchMock);
            expect(fetchMock).toBeCalled();
            expect(dispatchMock).toBeCalledWith({
                type: BLOG_ADD_ITEM,
                payload: blog
            });
        });
    });

    describe('editBlogItem', () => {
        it('should call fetch/dispatch with proper arguments', async () => {
            const jsonMock = jest.fn().mockResolvedValue(blog);
            const dispatchMock = jest.fn().mockResolvedValue({});
            const fetchMock = jest.fn().mockResolvedValue({
                status: 200,
                json: jsonMock
            });
            const blogApi = createApiActions(fetchMock);
            await blogApi.editBlogItem(blog)(dispatchMock);
            expect(fetchMock).toBeCalled();
            expect(dispatchMock).toBeCalledWith({
                type: BLOG_EDIT_ITEM,
                payload: blog
            });
        });
    });

    describe('removeBlogItem', () => {
        it('should call fetch/dispatch with proper arguments', async () => {
            const dispatchMock = jest.fn().mockResolvedValue({});
            const fetchMock = jest.fn().mockResolvedValue({
                status: 200
            });
            const blogApi = createApiActions(fetchMock);
            await blogApi.removeBlogItem(blog)(dispatchMock);
            expect(fetchMock).toBeCalled();
            expect(dispatchMock).toBeCalledWith({
                type: BLOG_REMOVE_ITEM,
                payload: blog
            });
        });
    });

    describe('fetchBlogItem', () => {
        it('should call fetch/dispatch with proper arguments', async () => {
            const output = [blog];
            const jsonMock = jest.fn().mockResolvedValue(output);
            const dispatchMock = jest.fn().mockResolvedValue({});
            const fetchMock = jest.fn().mockResolvedValue({
                status: 200,
                json: jsonMock
            });
            const blogApi = createApiActions(fetchMock);
            await blogApi.fetchBlogItems()(dispatchMock);
            expect(fetchMock).toBeCalled();
            expect(dispatchMock).toBeCalledWith({
                type: BLOG_UPDATE_LIST,
                payload: output
            });
        });
    });
});
