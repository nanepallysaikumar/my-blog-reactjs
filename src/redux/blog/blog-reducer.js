import {
    BLOG_UPDATE_LIST,
    BLOG_ADD_ITEM,
    BLOG_REMOVE_ITEM,
    BLOG_EDIT_ITEM
} from './blog-constants';

const initialState = {
    list: []
};

function editBlogItem(state, item) {
    const index = state.list.findIndex(blog => blog.id === item.id);
    if (index === -1) {
        return state;
    }
    return {
        list: [
            ...state.list.slice(0, index),
            { ...item },
            ...state.list.slice(index + 1)
        ]
    };
}

function removeBlogItem(state, id) {
    const index = state.list.findIndex(blog => blog.id === id);
    if (index === -1) {
        return state;
    }
    return {
        list: [...state.list.slice(0, index), ...state.list.slice(index + 1)]
    };
}

export function blog(state = initialState, action) {
    switch (action.type) {
        case BLOG_UPDATE_LIST:
            return {
                list: [...action.payload]
            };

        case BLOG_ADD_ITEM:
            return {
                list: [...state.list, action.payload]
            };

        case BLOG_EDIT_ITEM:
            return editBlogItem(state, action.payload);

        case BLOG_REMOVE_ITEM:
            return removeBlogItem(state, action.payload.id);

        default:
            return state;
    }
}
