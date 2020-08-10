/**
 Mr : Dang Xuan Truong
 Email: truongdx@runsystem.net
 */
import * as React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import LoginComponent from '../../../components/Default/Login';

interface isState{
	isState: boolean
}

class LoginContainer extends React.Component <{}, isState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            isState: false,
        };
    }

    render() {
        return (
            <LoginComponent />
        );
    }
}
const withConnect = connect(null, null);
export default compose(
    withConnect,
)(LoginContainer);
