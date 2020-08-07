/**
 Mr : Dang Xuan Truong
 Email: truongdx@runsystem.net
 */
import * as React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from '../../redux/configureStore';

import AdminLayoutRoute from '../../commons/AdminLayoutRoute/AdminLayoutRoute';

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

    render() {
	    return (
		    <Provider store={store}>
			    <BrowserRouter>
				    <Switch>
				        <AdminLayoutRoute />
				    </Switch>
                </BrowserRouter>
		    </Provider>
	    );
    }
}

export default App;
