import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { BlogForm } from '../../elements/blog-form/blog-form';
import { blogApiActions } from '../../../redux/blog/blog-actions';

class BlogEditBase extends React.Component {
    state = {};

    static getDerivedStateFromProps(props, state) {
        if (props.items && !state.blog) {
            const id = props.match.params.id;
            return {
                blog: props.items.find(item => item.id === id)
            };
        }

        return null;
    }

    editBlog = async values => {
        const blog = {
            ...this.state.blog,
            ...values,
            timestamp: Date.now()
        };

        try {
            await this.props.editBlog(blog);
            this.props.history.goBack();
        } catch (err) {
            console.log(err);
        }
    };

    render() {
        const { blog } = this.state;
        return blog ? (
            <BlogForm
                blog={{
                    header: blog.header,
                    body: blog.body
                }}
                onSubmit={this.editBlog}
                goBack={() => this.props.history.goBack()}
                title="Edit Blog Entry"
            />
        ) : null;
    }
}

export const BlogEdit = withRouter(
    connect(
        state => ({
            items: state.blog.list
        }),
        {
            editBlog: blogApiActions.editBlogItem
        }
    )(BlogEditBase)
);
