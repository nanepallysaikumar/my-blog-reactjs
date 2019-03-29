import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { blogApiActions } from '../../../redux/blog/blog-actions';

import './blog-delete.css';

class BlogDeleteBase extends React.Component {
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

    render() {
        const { blog } = this.state;
        return blog ? (
            <section className="blog-delete">
                <h2>Are you sure to delete '{blog.header}' </h2>
                <div className="blog-delete-buttons">
                    <button
                        type="button"
                        className="button-danger"
                        onClick={async () => {
                            await this.props.deleteBlog(blog);
                            this.props.history.goBack();
                        }}
                    >
                        Delete
                    </button>
                    <button
                        type="button"
                        className="button"
                        onClick={() => {
                            this.props.history.goBack();
                        }}
                    >
                        Cancel
                    </button>
                </div>
            </section>
        ) : null;
    }
}

export const BlogDelete = withRouter(
    connect(
        state => ({
            items: state.blog.list
        }),
        {
            deleteBlog: blogApiActions.removeBlogItem
        }
    )(BlogDeleteBase)
);
