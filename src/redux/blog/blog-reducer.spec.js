import { blog } from './blog-reducer';
import {
    BLOG_UPDATE_LIST,
    BLOG_ADD_ITEM,
    BLOG_EDIT_ITEM,
    BLOG_REMOVE_ITEM
} from './blog-constants';

describe('blog-reducer', () => {
    const state = {
        list: []
    };

    const data = {
        id: '12122',
        header: 'test header',
        body: 'test body'
    };

    it('should return current state on unknown action', () => {
        const nextState = blog(state, {});
        expect(nextState).toBe(state);
    });

    it('should update the list on BLOG_UPDATE_LIST action', () => {
        const nextState = blog(state, {
            type: BLOG_UPDATE_LIST,
            payload: [data]
        });
        expect(nextState).toMatchSnapshot('updateListSnapshot');
    });

    it('should add item on  BLOG_ADD_ITEM action', () => {
        const nextState = blog(state, {
            type: BLOG_ADD_ITEM,
            payload: data
        });
        expect(nextState).toMatchSnapshot('addItemSnapshot');
    });

    it('should update item on  BLOG_ADD_ITEM action', () => {
        const state = {
            list: [data]
        };
        const nextState = blog(state, {
            type: BLOG_EDIT_ITEM,
            payload: {
                id: data.id,
                header: 'new heading',
                body: 'new body'
            }
        });
        expect(nextState).toMatchSnapshot('updateItemSnapshot');
    });

    it('should remove item on BLOG_ADD_ITEM action', () => {
        const state = {
            list: [data]
        };
        const nextState = blog(state, {
            type: BLOG_REMOVE_ITEM,
            payload: data
        });
        expect(nextState.list.length).toBe(0);
    });
});
