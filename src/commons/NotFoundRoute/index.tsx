/**
 Mr : Dang Xuan Truong
 Email: truongdx@runsystem.net
 */
import * as React from 'react';
import { Route } from 'react-router-dom';
import NotFound from '../../components/NotFound';

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
