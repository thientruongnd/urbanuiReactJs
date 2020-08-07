/**
 Mr : Dang Xuan Truong
 Email: truongdx@runsystem.net
 */
import * as React from 'react';

interface isState{
	isState: boolean
}

class Footer extends React.Component <{}, isState> {
    constructor(props: {}) {
        super(props);
        this.state = {
	        isState: false,
        };
    }

    render() {
        return (
	        <footer className="footer">
		        <div className="card">
			        <div className="card-body">
				        <div className="d-sm-flex justify-content-center justify-content-sm-between">
					        <span className="text-muted text-center text-sm-left d-block d-sm-inline-block">
						        Copyright © 2018 All rights reserved.
					        </span>
				        </div>
			        </div>
		        </div>
	        </footer>
        );
    }
}

export default Footer;
