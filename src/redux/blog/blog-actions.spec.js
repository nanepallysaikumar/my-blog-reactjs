import { blogList, addBlog, editBlog, removeBlog } from './blog-actions';

describe('blog-actions', () => {
    const blog = {
        heading: 'test heading',
        body: 'test body'
    };

    describe('blogList', () => {
        it('should generate valid action object', () => {
            expect(blogList([blog])).toMatchSnapshot('blogList');
        });
    });
    describe('addBlog', () => {
        it('should generate valid action object', () => {
            expect(addBlog(blog)).toMatchSnapshot('addBlog');
        });
    });

    describe('editBlog', () => {
        it('should generate valid action object', () => {
            expect(editBlog(blog)).toMatchSnapshot('editBlog');
        });
    });

    describe('removeBlog', () => {
        it('should generate valid action object', () => {
            expect(removeBlog(blog)).toMatchSnapshot('removeBlog');
        });
    });
});
