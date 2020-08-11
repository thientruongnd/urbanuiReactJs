/**
 Mr : Dang Xuan Truong
 Email: truongdx@runsystem.net
 */
import * as React from 'react';
import { compose } from 'redux';
import { withRouter } from 'react-router';
import { NavLink } from 'react-router-dom';

interface isState{
	isOpen: boolean
}
interface isProps{
	history: any
}
class SidebarComponent extends React.Component <isProps, isState> {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
        };
    }

    render() {
	    return (
	        <nav className="sidebar sidebar-offcanvas" id="sidebar">
	            <ul className="nav">
		            <li className="nav-item">
			            <NavLink className="nav-link" to="/admin/">
				            <i className="typcn typcn-device-desktop menu-icon" />
				            <span className="menu-title">Dashboard</span>
				            <div className="badge badge-danger">new</div>
			            </NavLink>
		            </li>
		            <li className="nav-item">
			            <a
	                        className="nav-link"
	                        data-toggle="collapse"
	                        href="#auth"
	                        aria-expanded="false"
			               aria-controls="auth"
			            >
				            <i className="typcn typcn-user-add-outline menu-icon" />
				            <span className="menu-title">User Pages</span>
				            <i className="menu-arrow" />
			            </a>
			            <div className="collapse" id="auth">
				            <ul className="nav flex-column sub-menu">
					            <li className="nav-item">
						            <NavLink className="nav-link" to="/admin/users">Danh sách nhân viên</NavLink>
					            </li>
					            <li className="nav-item">
						            <a className="nav-link" href="pages/samples/login-2.html"> Login 2 </a></li>
					            <li className="nav-item">
						            <a className="nav-link" href="pages/samples/register.html"> Register </a></li>
					            <li className="nav-item">
						            <a className="nav-link" href="pages/samples/register-2.html"> Register 2 </a></li>
					            <li className="nav-item">
						            <a className="nav-link" href="pages/samples/lock-screen.html"> Lockscreen </a></li>
				            </ul>
			            </div>
		            </li>
		            <li className="nav-item">
			            <a
				            className="nav-link"
				            data-toggle="collapse"
				            href="#icons"
				            aria-expanded="false"
				            aria-controls="icons"
			            >
				            <i className="typcn typcn-compass menu-icon" />
				            <span className="menu-title">Icons</span>
				            <i className="menu-arrow" />
			            </a>
			            <div className="collapse" id="icons">
				            <ul className="nav flex-column sub-menu">
					            <li className="nav-item">
						            <NavLink className="nav-link" to="/admin/icons/flag">Flag icons</NavLink>
					            </li>
					            <li className="nav-item">
						            <NavLink className="nav-link" to="/admin/icons/mdi">Mdi icons</NavLink>
					            </li>
					            <li className="nav-item">
						            <NavLink className="nav-link" to="/admin/icons/font-awesome">Font Awesome</NavLink>
					            </li>
					            <li className="nav-item">
						            <a className="nav-link" href="pages/icons/simple-line-icon.html">Simple line icons</a>
					            </li>
					            <li className="nav-item">
						            <a className="nav-link" href="pages/icons/themify.html">Themify icons </a>
					            </li>
				            </ul>
			            </div>
		            </li>
	            </ul>
	        </nav>
	    );
    }
}

export default compose(
    withRouter,
)(SidebarComponent);
