/**
 Mr : Dang Xuan Truong
 Email: truongdx@runsystem.net
 */
import * as React from 'react';
import { Route } from 'react-router-dom';
import Dashboard from '../../components/Dashboard';
import template from '../../../public/js/template';

interface isState{
	isState: boolean
}
interface isProps{
	path: string,
	name: string,
	exact: boolean,
	component: any,
}
interface window {
	A: any;
}
const scriptLoaded = () => {
    // @ts-ignore
    console.log(window);
    // window.$.sort();
};

const loadScript = function (src) {
    const script = document.createElement('script');
    script.async = true;
    script.src = src;
    console.log(script);
    document.head.appendChild(script);
    document.body.appendChild(script);
};

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
