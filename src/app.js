import React from 'react';
import { Container } from './components/elements/container/container';
import { connect } from 'react-redux';
import { blogApiActions } from './redux/blog/blog-actions';
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import { Routes } from './routes';
import { Login } from './components/pages/login/login';

class AppBase extends React.Component {
    componentDidMount() {
        this.props.loadBlogItems();
    }

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Login} />
                    <Route
                        render={() => (
                            <Container>
                                <Routes />
                            </Container>
                        )}
                    />
                </Switch>
            </BrowserRouter>    
        );
    }
}

export const App = connect(
    null,
    {
        loadBlogItems: blogApiActions.fetchBlogItems
    }
)(AppBase);
