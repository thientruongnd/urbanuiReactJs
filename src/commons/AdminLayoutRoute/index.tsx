/**
 Mr : Dang Xuan Truong
 Email: truongdx@runsystem.net
 */
import * as React from 'react';
import { Route } from 'react-router-dom';
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
