/**
 Mr : Dang Xuan Truong
 Email: truongdx@runsystem.net
 */
import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@mdi/font/css/materialdesignicons.min.css';
import 'typicons.font/src/font/typicons.css';
import 'font-awesome/css/font-awesome.min.css';
import '../../../public/css/style.css';
import 'jquery';
import 'bootstrap/dist/js/bootstrap.min';
import 'perfect-scrollbar/dist/perfect-scrollbar.min';
import '../../../public/js/hoverable-collapse';
import '../../../public/js/template';
import '../../../public/js/settings';
import '../../../public/js/Chart.min';
import '../../../public/js/chart';

import Navbar from '../../components/Menu/Navbar';
import SettingWrapper from '../../components/Menu/Setting';
import Sidebar from '../../components/Menu/Sidebar';
import Footer from '../../components/Footer/Footer';

interface isState{
	isState: boolean
}

class AdminLayoutRoute extends React.Component <{}, isState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            isState: false,
        };
    }

    render() {
        return (
            <div>
                <Navbar />
                {/* partial */}
                <div className="container-fluid page-body-wrapper">
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
                        <Footer />
                    </div>
                </div>
            </div>
        );
    }
}

export default AdminLayoutRoute;
