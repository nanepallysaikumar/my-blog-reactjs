import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { BlogForm } from '../../elements/blog-form/blog-form';
import { generateId } from '../../../helpers/blog-helper';
import { blogApiActions } from '../../../redux/blog/blog-actions';

class BlogAddBase extends React.Component {
    addBlog = async values => {
        const blog = {
            ...values,
            timestamp: Date.now()
        };

        blog.id = generateId(blog);
        try {
            await this.props.addBlog(blog);
            this.props.history.push('/blogs');
        } catch (err) {
            console.error(err);
        }
    };

    render() {
        return (
            <BlogForm
                onSubmit={this.addBlog}
                blog={{
                    header: '',
                    body: ''
                }}
                goBack={() => this.props.history.goBack()}
                title="Add Blog Entry"
            />
        );
    }
}

export const BlogAdd = withRouter(
    connect(
        null,
        {
            addBlog: blogApiActions.addBlogItem
        }
    )(BlogAddBase)
);
