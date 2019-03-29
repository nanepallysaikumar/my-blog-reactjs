const hash = require('object-hash');
const moment = require('moment');

export function generateId(obj) {
    return hash(obj).substr(0, 7);
}

export function dateFormat(date) {
    return moment(date).format('MMM D YYYY HH:mm');
}

export function filterBlogs(search) {
    return function(blog) {
        if (!search) return true;

        const searchLower = search.toLowerCase();
        return (
            blog.header.toLowerCase().search(searchLower) !== -1 ||
            blog.body.toLowerCase().search(searchLower) !== -1
        );
    };
}
