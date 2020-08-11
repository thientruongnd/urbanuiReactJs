/**
 Mr : Dang Xuan Truong
 Email: truongdx@runsystem.net
 */
import * as React from 'react';
import { Route } from 'react-router-dom';
import NotFound from '../../components/NotFound';
import 'bootstrap/scss/bootstrap.scss';
import '@mdi/font/css/materialdesignicons.min.css';
import 'typicons.font/src/font/typicons.css';
import 'font-awesome/css/font-awesome.min.css';
import '../../../public/css/style.css';
import 'jquery';
import 'bootstrap/dist/js/bootstrap.min';

interface isState{
}
interface isProps{
}
class NotFoundLayoutRoute extends React.Component <isProps, isState> {

    render() {
        return (
	        <Route path="*" component={NotFound} />
        );
    }
}

export default NotFoundLayoutRoute;
