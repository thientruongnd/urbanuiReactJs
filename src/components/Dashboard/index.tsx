/**
 Mr : Dang Xuan Truong
 Email: truongdx@runsystem.net
 */
import * as React from 'react'
import Navbar from './Menu/Navbar';
import Sidebar from './Menu/Sidebar';
import Footer from './Footer/Footer';

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
