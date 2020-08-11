/**
 Mr : Dang Xuan Truong
 Email: truongdx@runsystem.net
 */
import * as React from 'react';
import { compose } from 'redux';
import { withRouter } from 'react-router';
// @ts-ignore
import Logo from '../../../assets/logo/logo-salefie.png';
// @ts-ignore
import face5 from '../../../../public/images/faces/face5.jpg';
// @ts-ignore
import face4 from '../../../../public/images/faces/face4.jpg';
// @ts-ignore
import face2 from '../../../../public/images/faces/face2.jpg';
// @ts-ignore
import face3 from '../../../../public/images/faces/face3.jpg';

interface isState{
	isOpen: boolean
}
interface isProps{
	history: any
}
class NavbarComponent extends React.Component <isProps, isState> {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
        };
    }
	handleClick = (e): void => {
		console.log(e);
		e.preventDefault();
	};

    render() {
        return (
            <nav className="navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
                <div className="navbar-brand-wrapper d-flex justify-content-center">
                    <div className="navbar-brand-inner-wrapper d-flex justify-content-between align-items-center w-100">
                        <a
                            className="navbar-brand brand-logo"
						   href="../../../index.html"
                        >
                            <img src={Logo} alt="logo" />
                        </a>
                        <a className="navbar-brand brand-logo-mini" href="../../../index.html">
                            <img src={Logo} alt="logo" />
                        </a>
                        <button className="navbar-toggler navbar-toggler align-self-center" type="button" data-toggle="minimize">
                            <span className="typcn typcn-th-menu" />
                        </button>
                    </div>
                </div>
                <div className="navbar-menu-wrapper d-flex align-items-center justify-content-end">
                    <ul className="navbar-nav mr-lg-2">
                        <li className="nav-item nav-profile dropdown">
                            <a className="nav-link" href="#" data-toggle="dropdown" id="profileDropdown">
                                <img src={face5} alt="profile" />
                                <span className="nav-profile-name">Eugenia Mullins</span>
                            </a>
                            <div className="dropdown-menu dropdown-menu-right navbar-dropdown" aria-labelledby="profileDropdown">
                                <a className="dropdown-item">
                                    <i className="typcn typcn-cog-outline text-primary" />
									Settings
                                </a>
                                <a className="dropdown-item">
                                    <i className="typcn typcn-eject text-primary" />
									Logout
                                </a>
                            </div>
                        </li>
                        <li className="nav-item nav-user-status dropdown">
                            <p className="mb-0">Last login was 23 hours ago.</p>
                        </li>
                    </ul>
                    <ul className="navbar-nav navbar-nav-right">
                        <li className="nav-item nav-date dropdown">
                            <a className="nav-link d-flex justify-content-center align-items-center">
                                <h6 className="date mb-0">Today : Mar 23</h6>
                                <i className="typcn typcn-calendar" />
                            </a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link count-indicator dropdown-toggle d-flex justify-content-center align-items-center" id="messageDropdown" href="#" data-toggle="dropdown">
                                <i className="typcn typcn-cog-outline mx-0" />
                                <span className="count" />
                            </a>
                            <div className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list" aria-labelledby="messageDropdown">
                                <p className="mb-0 font-weight-normal float-left dropdown-header">Messages</p>
                                <a className="dropdown-item preview-item">
                                    <div className="preview-thumbnail">
                                        <img src={face4} alt="image" className="profile-pic" />
                                    </div>
                                    <div className="preview-item-content flex-grow">
                                        <h6 className="preview-subject ellipsis font-weight-normal">David Grey
                                        </h6>
                                        <p className="font-weight-light small-text text-muted mb-0">
											The meeting is cancelled
                                        </p>
                                    </div>
                                </a>
                                <a className="dropdown-item preview-item">
                                    <div className="preview-thumbnail">
                                        <img src={face2} alt="image" className="profile-pic" />
                                    </div>
                                    <div className="preview-item-content flex-grow">
                                        <h6 className="preview-subject ellipsis font-weight-normal">Tim Cook
                                        </h6>
                                        <p className="font-weight-light small-text text-muted mb-0">
											New product launch
                                        </p>
                                    </div>
                                </a>
                                <a className="dropdown-item preview-item">
                                    <div className="preview-thumbnail">
                                        <img src={face3} alt="image" className="profile-pic" />
                                    </div>
                                    <div className="preview-item-content flex-grow">
                                        <h6 className="preview-subject ellipsis font-weight-normal"> Johnson
                                        </h6>
                                        <p className="font-weight-light small-text text-muted mb-0">
											Upcoming board meeting
                                        </p>
                                    </div>
                                </a>
                            </div>
                        </li>
                        <li className="nav-item dropdown mr-0">
                            <a className="nav-link count-indicator dropdown-toggle d-flex align-items-center justify-content-center" id="notificationDropdown" href="#" data-toggle="dropdown">
                                <i className="typcn typcn-bell mx-0" />
                                <span className="count" />
                            </a>
                            <div className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list" aria-labelledby="notificationDropdown">
                                <p className="mb-0 font-weight-normal float-left dropdown-header">Notifications</p>
                                <a className="dropdown-item preview-item">
                                    <div className="preview-thumbnail">
                                        <div className="preview-icon bg-success">
                                            <i className="typcn typcn-info mx-0" />
                                        </div>
                                    </div>
                                    <div className="preview-item-content">
                                        <h6 className="preview-subject font-weight-normal">Application Error</h6>
                                        <p className="font-weight-light small-text mb-0 text-muted">
											Just now
                                        </p>
                                    </div>
                                </a>
                                <a className="dropdown-item preview-item">
                                    <div className="preview-thumbnail">
                                        <div className="preview-icon bg-warning">
                                            <i className="typcn typcn-cog-outline mx-0" />
                                        </div>
                                    </div>
                                    <div className="preview-item-content">
                                        <h6 className="preview-subject font-weight-normal">Settings</h6>
                                        <p className="font-weight-light small-text mb-0 text-muted">
											Private message
                                        </p>
                                    </div>
                                </a>
                                <a className="dropdown-item preview-item">
                                    <div className="preview-thumbnail">
                                        <div className="preview-icon bg-info">
                                            <i className="typcn typcn-user mx-0" />
                                        </div>
                                    </div>
                                    <div className="preview-item-content">
                                        <h6 className="preview-subject font-weight-normal">New user registration</h6>
                                        <p className="font-weight-light small-text mb-0 text-muted">
											2 days ago
                                        </p>
                                    </div>
                                </a>
                            </div>
                        </li>
                    </ul>
                    <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="offcanvas">
                        <span className="typcn typcn-th-menu" />
                    </button>
                </div>
            </nav>
        );
    }
}
export default compose(
	withRouter,
)(NavbarComponent);
