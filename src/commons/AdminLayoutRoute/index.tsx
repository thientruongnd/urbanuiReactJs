/**
 Mr : Dang Xuan Truong
 Email: truongdx@runsystem.net
 */
import * as React from 'react';
import { Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@mdi/font/css/materialdesignicons.min.css';
import 'typicons.font/src/font/typicons.css';
import 'font-awesome/css/font-awesome.min.css';
import '../../../public/css/style.css';
import 'jquery';
import 'bootstrap/dist/js/bootstrap.min';
import 'perfect-scrollbar/dist/perfect-scrollbar.min';
import 'chart.js/dist/Chart.min';
import '../../../public/js/off-canvas';
import '../../../public/js/hoverable-collapse';
import '../../../public/js/template';
import '../../../public/js/settings';
import '../../../public/js/todolist';

import Dashboard from '../../components/Dashboard';

interface isState{
	isState: boolean
}
interface isProps{
	path: string,
	name: string,
	exact: boolean,
	component: any,
}

class AdminLayoutRoute extends React.Component <isProps, isState> {
    constructor(props) {
	    super(props);
        this.state = {
            isState: false,
        };
    }

    render() {
    	console.log(this.props);
        const { component: YourComponent, ...remainProps } = this.props;
        return (
            <Route
                {...remainProps}
                render={(routeProps) => (
		                <Dashboard {...remainProps}>
			                <YourComponent {...routeProps} />
		                </Dashboard>
	                )}
            />
        );
    }
}

export default AdminLayoutRoute;
