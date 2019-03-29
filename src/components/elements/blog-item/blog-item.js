import React from 'react';
import { Link } from 'react-router-dom';
import { dateFormat } from '../../../helpers/blog-helper';

import './blog-item.css';

const MAX_BODY_LENGTH = 80;
export class BlogItem extends React.Component {
    state = {
        more: false
    };

    nl2br(string) {
        if (!string) return string;
        return string.split('\n').map((item, key) => {
            return (
                <span key={key}>
                    {item}
                    <br />
                </span>
            );
        });
    }

    renderBody(body) {
        if (!body) {
            return body;
        }

        if (this.state.more || body.length <= MAX_BODY_LENGTH) {
            return this.nl2br(body);
        }

        return (
            <React.Fragment>
                {body.substr(0, MAX_BODY_LENGTH)} ...
                <a
                    className="link"
                    href="#read-more"
                    onClick={evt => {
                        evt.preventDefault();
                        this.setState({
                            more: true
                        });
                    }}
                >
                    Read More
                </a>
            </React.Fragment>
        );
    }

    render() {
        const { blog } = this.props;
        return (
            <article className="blog-item">
                <h2 className="blog-item-heading">{blog.header}</h2>
                {blog.timestamp && (
                    <span className="blog-item-date">
                        Published on {dateFormat(blog.timestamp)}
                    </span>
                )}
                <p>{this.renderBody(blog.body)}</p>
                <div className="blog-item-links">
                    <Link to={`/blogs/${blog.id}/edit`} className="link">
                        edit
                    </Link>
                    <Link to={`/blogs/${blog.id}/delete`} className="link">
                        delete
                    </Link>
                </div>
            </article>
        );
    }
}
