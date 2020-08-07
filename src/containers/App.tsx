/**
 Mr : Dang Xuan Truong
 Email: truongdx@runsystem.net
 */
import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from '../redux/configureStore';

import AdminLayoutRoute from '../commons/AdminLayoutRoute';
import { ADMIN_ROUTES } from '../constants';

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
				    pathRoute={route.pathRoute}
				    component={route.component}
				    exact={route.exact}
				    name={route.name}
			    />
		    ));
	    return xhtml;
	}

	render() {
	    return (
		    <Provider store={store}>
			    <BrowserRouter>
				    <Switch>
					    {this.renderAdminRoutes()}
				    </Switch>
	            </BrowserRouter>
		    </Provider>
	    );
	}
}

export default App;
