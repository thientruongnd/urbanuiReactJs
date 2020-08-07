/**
 Mr : Dang Xuan Truong
 Email: truongdx@runsystem.net
 */
import * as React from 'react';

import AdminLayoutRoute from '../../commons/AdminLayoutRoute/AdminLayoutRoute';

interface isState{
	isOpen: boolean
}

class App extends React.Component <{}, isState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            isOpen: false,
        };
    }

    render() {
	    return (
	        <AdminLayoutRoute />
	    );
    }
}

export default App;
