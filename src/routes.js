import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { BlogList } from './components/pages/blog-list/blog-list';
import { BlogAdd } from './components/pages/blog-add/blog-add';
import { BlogEdit } from './components/pages/blog-edit/blog-edit';
import { BlogDelete } from './components/pages/blog-delete/blog-delete';

export const Routes = () => (
    <Switch>
        <Route exact path="/blogs" component={BlogList} />
        <Route exact path="/blogs/add" component={BlogAdd} />
        <Route exact path="/blogs/:id/delete" component={BlogDelete} />
        <Route exact path="/blogs/:id/edit" component={BlogEdit} />
    </Switch>
);
