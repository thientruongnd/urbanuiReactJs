/**
 Mr : Dang Xuan Truong
 Email: truongdx@runsystem.net
 */
import * as React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import FontAwesomeComponents from '../../../../components/Icons/FontAwesome';

interface isState{
	isState: boolean
}

class FontAwesomeIconsContainer extends React.Component <{}, isState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            isState: false,
        };
    }

    render() {
        return (
            <FontAwesomeComponents />
        );
    }
}

const withConnect = connect(null, null);
export default compose(
    withConnect,
)(FontAwesomeIconsContainer);
