/**
 Mr : Dang Xuan Truong
 Email: truongdx@runsystem.net
 */
import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from '../redux/configureStore';

import AdminLayoutRoute from '../commons/AdminLayoutRoute';
import DefaultLayoutRoute from '../commons/DefaultLayoutRoute';
import NotFoundRoute from '../commons/NotFoundRoute';
import { ADMIN_ROUTES, ROUTES } from '../constants';

const store = configureStore();

interface isState{
	isOpen: boolean
}

class App extends React.Component <{}, isState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            isOpen: false,
        };
    }

	renderAdminRoutes = (): any => {
	    const xhtml = ADMIN_ROUTES.map((route) => (
			    <AdminLayoutRoute
				    key={route.id}
				    path={route.pathRoute}
				    component={route.component}
				    exact={route.exact}
				    name={route.name}
			    />
		    ));
	    return xhtml;
	}

	renderDefaultRoutes = (): any => {
	    const xhtml = ROUTES.map((route) => (
	        <DefaultLayoutRoute
	            key={route.id}
	            path={route.pathRoute}
	            component={route.component}
	            exact={route.exact}
	            name={route.name}
	        />
	    ));
	    return xhtml;
	}

	renderNotFoundRoute = (): any => <NotFoundRoute />

	render() {
	    return (
		    <Provider store={store}>
			    <BrowserRouter>
				    <Switch>
					    {this.renderDefaultRoutes()}
					    {this.renderAdminRoutes()}
					    {this.renderNotFoundRoute()}
				    </Switch>
	            </BrowserRouter>
		    </Provider>
	    );
	}
}

export default App;
