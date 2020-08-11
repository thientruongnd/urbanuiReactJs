/**
 Mr : Dang Xuan Truong
 Email: truongdx@runsystem.net
 */
import * as React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import ThemifyComponents from '../../../../components/Icons/Themify';

interface isState{
	isState: boolean
}

class ThemifyContainer extends React.Component <{}, isState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            isState: false,
        };
    }

    render() {
        return (
            <ThemifyComponents />
        );
    }
}

const withConnect = connect(null, null);
export default compose(
    withConnect,
)(ThemifyContainer);
