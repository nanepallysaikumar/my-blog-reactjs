import { addBlog, removeBlog, editBlog, blogList } from './blog-actions';
import { BLOG_URL } from '../../constants/urls';

export function createApiActions(fetch) {
    return {
        addBlogItem(blog) {
            return async dispatch => {
                const response = await fetch(BLOG_URL, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(blog)
                });
                if (response.status === 201) {
                    dispatch(addBlog(await response.json()));
                } else {
                    throw new Error('Failed to save the blog item');
                }
            };
        },

        removeBlogItem(blog) {
            return async dispatch => {
                const response = await fetch(`${BLOG_URL}/${blog.id}`, {
                    method: 'DELETE'
                });
                if (response.status === 200) {
                    dispatch(removeBlog(blog));
                }
            };
        },

        editBlogItem(blog) {
            return async dispatch => {
                const response = await fetch(`${BLOG_URL}/${blog.id}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(blog)
                });
                if (response.status === 200) {
                    dispatch(editBlog(await response.json()));
                }
            };
        },

        fetchBlogItems() {
            return async dispatch => {
                const response = await fetch(BLOG_URL);
                if (response.status === 200) {
                    dispatch(blogList(await response.json()));
                }
            };
        }
    };
}
