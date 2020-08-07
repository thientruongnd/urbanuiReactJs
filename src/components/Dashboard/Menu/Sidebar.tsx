/**
 Mr : Dang Xuan Truong
 Email: truongdx@runsystem.net
 */
import * as React from 'react';

interface isState{
	isOpen: boolean
}

class Sidebar extends React.Component <{}, isState> {
    constructor(props: {}) {
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
	        <nav className="sidebar sidebar-offcanvas" id="sidebar">
	            <ul className="nav">
		            <li className="nav-item">
			            <a className="nav-link" href="../../../index.html">
				            <i className="typcn typcn-device-desktop menu-icon" />
				            <span className="menu-title">Dashboard</span>
				            <div className="badge badge-danger">new</div>
			            </a>
		            </li>
		            <li className="nav-item">
			            <a className="nav-link" href="../../pages/widgets/widgets.html">
				            <i className="typcn typcn-archive menu-icon" />
				            <span className="menu-title">Widgets</span>
			            </a>
		            </li>
		            <li className="nav-item">
			            <a className="nav-link" data-toggle="collapse" href="#ui-basic" aria-expanded="false" aria-controls="ui-basic">
				            <i className="typcn typcn-document-text menu-icon" />
				            <span className="menu-title">UI Elements</span>
				            <i className="menu-arrow" />
			            </a>
			            <div className="collapse" id="ui-basic">
				            <ul className="nav flex-column sub-menu">
					            <li className="nav-item">
						            <a className="nav-link" href="../../pages/ui-features/accordions.html">Accordions</a>
					            </li>
					            <li className="nav-item">
						            <a className="nav-link" href="../../pages/ui-features/buttons.html">Buttons</a>
					            </li>
					            <li className="nav-item">
						            <a className="nav-link" href="../../pages/ui-features/badges.html">Badges</a>
					            </li>
				            </ul>
			            </div>
		            </li>
		            <li className="nav-item">
			            <a
	                        className="nav-link"
	                        data-toggle="collapse"
	                        href="#form-elements"
	                        aria-expanded="false"
			               aria-controls="form-elements"
			            >
				            <i className="typcn typcn-film menu-icon" />
				            <span className="menu-title">Form elements</span>
				            <i className="menu-arrow" />
			            </a>
			            <div className="collapse" id="form-elements">
				            <ul className="nav flex-column sub-menu">
					            <li className="nav-item">
						            <a className="nav-link" href="../../pages/forms/basic_elements.html">Basic Elements</a>
					            </li>
					            <li className="nav-item">
						            <a className="nav-link" href="../../pages/forms/advanced_elements.html">Advanced Elements</a>
					            </li>
					            <li className="nav-item">
						            <a className="nav-link" href="../../pages/forms/validation.html">Validation</a>
					            </li>
					            <li className="nav-item">
						            <a className="nav-link" href="../../pages/forms/wizard.html">Wizard</a>
					            </li>
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
						            <a className="nav-link" href="pages/icons/flag-icons.html">Flag icons </a>
					            </li>
					            <li className="nav-item">
						            <a className="nav-link" href="pages/icons/mdi.html">Mdi icons</a>
					            </li>
					            <li className="nav-item">
						            <a className="nav-link" href="pages/icons/font-awesome.html">Font Awesome </a>
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

export default Sidebar;
