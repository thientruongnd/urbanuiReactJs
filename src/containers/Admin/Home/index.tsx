/**
 Mr : Dang Xuan Truong
 Email: truongdx@runsystem.net
 */
import * as React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import HomeComponent from '../../../components/Home'
interface isState{
	isState: boolean
}

class HomeContainer extends React.Component <{}, isState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            isState: false,
        };
    }

    render() {
        return (
            <HomeComponent />
        );
    }
}
const withConnect = connect(null, null);
export default compose(
    withConnect,
)(HomeContainer);
