/**
 Mr : Dang Xuan Truong
 Email: truongdx@runsystem.net
 */
import * as React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import MdiIconsComponents from '../../../../components/Icons/MdiI';

interface isState{
	isState: boolean
}

class MdiIconsContainer extends React.Component <{}, isState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            isState: false,
        };
    }

    render() {
        return (
            <MdiIconsComponents />
        );
    }
}

const withConnect = connect(null, null);
export default compose(
    withConnect,
)(MdiIconsContainer);
