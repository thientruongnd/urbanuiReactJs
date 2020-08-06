/**
 Mr : Dang Xuan Truong
 Email: truongdx@runsystem.net
 */
import * as React from 'react';

import Navbar from '../../components/Menu/Navbar';
import Sidebar from '../../components/Menu/Sidebar';
import SettingWrapper from '../../components/Menu/Setting';

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

	toggle=() => {
    	this.setState({ isOpen: !this.state.isOpen });
	}

	handleClick = (e): void => {
	    console.log(e);
	    e.preventDefault();
	};

	render() {
	    const { isOpen } = this.state;
	    return (
	        <div>
	            <Navbar />
	            {/* partial */}
	            <div className="container-fluid page-body-wrapper">
	                {/* partial:../../partials/_settings-panel.html */}
	                <SettingWrapper />
	                <Sidebar />
	                <div className="main-panel">
	                    <div className="content-wrapper">
	                        <div className="row">
	                            <div className="col-lg-6 grid-margin stretch-card">
	                                <div className="card">
	                                    <div className="card-body">
	                                        <h4 className="card-title">Line chart</h4>
	                                        <canvas id="lineChart" />
	                                    </div>
	                                </div>
	                            </div>
	                            <div className="col-lg-6 grid-margin stretch-card">
	                                <div className="card">
	                                    <div className="card-body">
	                                        <h4 className="card-title">Bar chart</h4>
	                                        <canvas id="barChart" />
	                                    </div>
	                                </div>
	                            </div>
	                        </div>
	                        <div className="row">
	                            <div className="col-lg-6 grid-margin stretch-card">
	                                <div className="card">
	                                    <div className="card-body">
	                                        <h4 className="card-title">Area chart</h4>
	                                        <canvas id="areaChart" />
	                                    </div>
	                                </div>
	                            </div>
	                            <div className="col-lg-6 grid-margin stretch-card">
	                                <div className="card">
	                                    <div className="card-body">
	                                        <h4 className="card-title">Doughnut chart</h4>
	                                        <canvas id="doughnutChart" />
	                                    </div>
	                                </div>
	                            </div>
	                        </div>
	                        <div className="row">
	                            <div className="col-lg-6 grid-margin grid-margin-lg-0 stretch-card">
	                                <div className="card">
	                                    <div className="card-body">
	                                        <h4 className="card-title">Pie chart</h4>
	                                        <canvas id="pieChart" />
	                                    </div>
	                                </div>
	                            </div>
	                            <div className="col-lg-6 grid-margin grid-margin-lg-0 stretch-card">
	                                <div className="card">
	                                    <div className="card-body">
	                                        <h4 className="card-title">Scatter chart</h4>
	                                        <canvas id="scatterChart" />
	                                    </div>
	                                </div>
	                            </div>
	                        </div>
	                    </div>
	                    <footer className="footer">
	                        <div className="card">
	                            <div className="card-body">
	                                <div className="d-sm-flex justify-content-center justify-content-sm-between">
	                                    <span className="text-muted text-center text-sm-left d-block d-sm-inline-block">Copyright © 2018 <a href="https://www.urbanui.com/" className="text-muted" target="_blank">Urbanui</a>. All rights reserved.</span>
	                                    <span className="float-none float-sm-right d-block mt-1 mt-sm-0 text-center text-muted">Hand-crafted &amp; made with <i className="typcn typcn-heart-full-outline text-danger" /></span>
	                                </div>
	                            </div>
	                        </div>
	                    </footer>
	                </div>
	                {/* main-panel ends */}
	            </div>
	        </div>
	    );
	}
}

export default App;
