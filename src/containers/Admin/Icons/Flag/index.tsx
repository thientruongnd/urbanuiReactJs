/**
 Mr : Dang Xuan Truong
 Email: truongdx@runsystem.net
 */
import * as React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import FlagIconsComponents from '../../../../components/Icons/Flag';

interface isState{
	isState: boolean
}

class FlagIconsContainer extends React.Component <{}, isState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            isState: false,
        };
    }

    render() {
        return (
            <FlagIconsComponents />
        );
    }
}

const withConnect = connect(null, null);
export default compose(
    withConnect,
)(FlagIconsContainer);
