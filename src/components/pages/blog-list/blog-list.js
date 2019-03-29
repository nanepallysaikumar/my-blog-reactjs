import React from 'react';
import { connect } from 'react-redux';
import { BlogItem } from '../../elements/blog-item/blog-item';
import { Link } from 'react-router-dom';

import './blog-list.css';
import { filterBlogs } from '../../../helpers/blog-helper';

class BlogListBase extends React.Component {
    state = {
        search: ''
    };

    onSearchValueChange = evt => {
        this.setState({
            search: evt.target.value
        });
    };
    render() {
        return (
            <section className="blog-list">
                <div className="blog-list-search">
                    <input
                        type="text"
                        placeholder="Search..."
                        value={this.state.search}
                        onChange={this.onSearchValueChange}
                    />
                    <Link className="link-button" to="/blogs/add">
                        Add Blog
                    </Link>
                </div>
                {this.props.blogList
                    .filter(filterBlogs(this.state.search))
                    .map(blog => (
                        <BlogItem key={blog.id} blog={blog} />
                    ))}
            </section>
        );
    }
}

const mapStateToProps = state => ({
    blogList: state.blog.list.sort((a, b) => b.timestamp - a.timestamp)
});

export const BlogList = connect(
    mapStateToProps,
    null
)(BlogListBase);
