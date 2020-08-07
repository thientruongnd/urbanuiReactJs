/**
 Mr : Dang Xuan Truong
 Email: truongdx@runsystem.net
 */
import * as React from 'react';

interface isState{
	isState: boolean
}

class Users extends React.Component <{}, isState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            isState: false,
        };
    }

    render() {
        return (
            <div>
                <h1>This is users</h1>
            </div>
        );
    }
}

export default Users;
