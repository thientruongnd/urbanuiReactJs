/**
 Mr : Dang Xuan Truong
 Email: truongdx@runsystem.net
 */
import * as React from 'react';
import { Route } from 'react-router-dom';
import Default from '../../components/Default';
import 'bootstrap/scss/bootstrap.scss';
import '@mdi/font/css/materialdesignicons.min.css';
import 'typicons.font/src/font/typicons.css';
import 'font-awesome/css/font-awesome.min.css';
import '../../../public/css/style.css';
import 'jquery';
import 'bootstrap/dist/js/bootstrap.min';
import 'perfect-scrollbar/dist/perfect-scrollbar.min';
import '../../../public/js/off-canvas';

interface isState{
	isState: boolean
}
interface isProps{
	path: string,
	name: string,
	exact: boolean,
	component: any,
}
class DefaultLayoutRoute extends React.Component <isProps, isState> {
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
			        <Default {...remainProps}>
				        <YourComponent {...routeProps} />
			        </Default>
		        )}
	        />
        );
    }
}

export default DefaultLayoutRoute;
