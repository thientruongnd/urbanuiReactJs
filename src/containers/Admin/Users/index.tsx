/**
 Mr : Dang Xuan Truong
 Email: truongdx@runsystem.net
 */
import * as React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

interface isState{
	isState: boolean
}

class UsersContainer extends React.Component <{}, isState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            isState: false,
        };
    }

    render() {
        return (
            <div><h1>This is user</h1></div>
        );
    }
}

const withConnect = connect(null, null);
export default compose(
    withConnect,
)(UsersContainer);
