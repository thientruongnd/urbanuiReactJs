/**
 Mr : Dang Xuan Truong
 Email: truongdx@runsystem.net
 */
import * as React from 'react';
import Navbar from './Menu/Navbar';
import Sidebar from './Menu/Sidebar';
import Footer from './Footer/Footer';

const path = require('path');
// import '../../../public/js/template';
// import template from '../../../public/js/template';

interface isState{
	isState: boolean
}
interface isProps{
	children: any
}
class Dashboard extends React.Component <isProps, isState> {
    constructor(props) {
        super(props);
        this.state = {
            isState: false,
        };
    }

    componentDidMount() {
	    // eslint-disable-next-line global-require
        /* const src = path.resolve(__dirname, '/public/js/template.js');
        const script = document.createElement('script');
        script.async = true;
        script.src = src;
        console.log(script);
	    document.body.appendChild(script); */
        console.log('componentDidMount Dashboard');
    }

    render() {
	    const {
		    children,
	    } = this.props;
        return (
            <div>
                <Navbar />
                <div className="container-fluid page-body-wrapper">
                    <Sidebar />
                    <div className="main-panel">
	                    {children}
                        <Footer />
                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard;
