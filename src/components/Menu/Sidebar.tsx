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
                        <a className="nav-link">
                            <i className="typcn typcn-device-desktop menu-icon" />
                            <span className="menu-title">Dashboard</span>
                            <div className="badge badge-danger">new</div>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link">
                            <i className="typcn typcn-archive menu-icon" />
                            <span className="menu-title">Widgets</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a
                            className="nav-link"
                            data-toggle="collapse"
                            href="#ui-basic"
                            aria-expanded="false"
						   aria-controls="ui-basic"
                        >
                            <i className="typcn typcn-document-text menu-icon" />
                            <span className="menu-title">UI Elements</span>
                            <i className="menu-arrow" />
                        </a>
                        <div className="collapse" id="ui-basic">
                            <ul className="nav flex-column sub-menu">
                                <li className="nav-item">
                                    <a className="nav-link" href="javascript:void(0)" onClick={(e) => this.handleClick(e)}>Accordions</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" onClick={(e) => this.handleClick(e)}>Buttons</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" onClick={(e) => this.handleClick(e)}>Badges</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" onClick={(e) => this.handleClick(e)}>Breadcrumbs</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" onClick={(e) => this.handleClick(e)}>Dropdowns</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" onClick={(e) => this.handleClick(e)}>Modals</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" onClick={(e) => this.handleClick(e)}>Progressbar</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" onClick={(e) => this.handleClick(e)}>Pagination</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" onClick={(e) => this.handleClick(e)}>Tabs</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" onClick={(e) => this.handleClick(e)}>Typography</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" onClick={(e) => this.handleClick(e)}>Tooltips</a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a
                            className="nav-link"
                            data-toggle="collapse"
                            href="#ui-advanced"
                            aria-expanded="false"
						   aria-controls="ui-advanced"
                        >
                            <i className="typcn typcn-cog-outline menu-icon" />
                            <span className="menu-title">Advanced UI</span>
                            <i className="menu-arrow" />
                        </a>
                        <div className="collapse" id="ui-advanced">
                            <ul className="nav flex-column sub-menu">
                                <li className="nav-item">
                                    <a className="nav-link" onClick={(e) => this.handleClick(e)}>Dragula</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" onClick={(e) => this.handleClick(e)}>Clipboard</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" onClick={(e) => this.handleClick(e)}>Context
									menu
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" onClick={(e) => this.handleClick(e)}>Sliders</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" onClick={(e) => this.handleClick(e)}>Carousel</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" onClick={(e) => this.handleClick(e)}>Colcade</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" onClick={(e) => this.handleClick(e)}>Loaders</a>
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
                                    <a className="nav-link">Basic
									Elements
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link">Advanced
									Elements
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link">Validation</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link">Wizard</a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a
                            className="nav-link"
                            data-toggle="collapse"
                            href="#editors"
                            aria-expanded="false"
						   aria-controls="editors"
                        >
                            <i className="typcn typcn-point-of-interest-outline menu-icon" />
                            <span className="menu-title">Editors</span>
                            <i className="menu-arrow" />
                        </a>
                        <div className="collapse" id="editors">
                            <ul className="nav flex-column sub-menu">
                                <li className="nav-item">
                                    <a className="nav-link">Text editors</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link">Code editors</a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a
                            className="nav-link"
                            data-toggle="collapse"
                            href="#charts"
                            aria-expanded="false"
						   aria-controls="charts"
                        >
                            <i className="typcn typcn-chart-pie-outline menu-icon" />
                            <span className="menu-title">Charts</span>
                            <i className="menu-arrow" />
                        </a>
                        <div className="collapse" id="charts">
                            <ul className="nav flex-column sub-menu">
                                <li className="nav-item">
                                    <a className="nav-link">ChartJs</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link">Morris</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link">Flot</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link">Google
									charts
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link">Sparkline js</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link">C3
									charts
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link">Chartists</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link">JustGage</a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a
                            className="nav-link"
                            data-toggle="collapse"
                            href="#tables"
                            aria-expanded="false"
						   aria-controls="tables"
                        >
                            <i className="typcn typcn-th-small-outline menu-icon" />
                            <span className="menu-title">Tables</span>
                            <i className="menu-arrow" />
                        </a>
                        <div className="collapse" id="tables">
                            <ul className="nav flex-column sub-menu">
                                <li className="nav-item">
                                    <a className="nav-link">Basic table</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link">Data table</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link">Js-grid</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link">Sortable table</a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link">
                            <i className="typcn typcn-radar-outline menu-icon" />
                            <span className="menu-title">Popups</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link">
                            <i className="typcn typcn-bell menu-icon" />
                            <span className="menu-title">Notifications</span>
                        </a>
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
                                    <a className="nav-link">Flag icons</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link">Mdiicons</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link">Font Awesome</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link">Simple line
									icons
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link">Themifyicons</a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a
                            className="nav-link"
                            data-toggle="collapse"
                            href="#maps"
                            aria-expanded="false"
						   aria-controls="maps"
                        >
                            <i className="typcn typcn-map menu-icon" />
                            <span className="menu-title">Maps</span>
                            <i className="menu-arrow" />
                        </a>
                        <div className="collapse" id="maps">
                            <ul className="nav flex-column sub-menu">
                                <li className="nav-item">
                                    <a className="nav-link">Mapael</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link">Vector Map</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link">Google Map</a>
                                </li>
                            </ul>
                        </div>
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
                                    <a className="nav-link"> Login </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link"> Login 2 </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link"> Register </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link"> Register 2 </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link"> Lockscreen </a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a
                            className="nav-link"
                            data-toggle="collapse"
                            href="#error"
                            aria-expanded="false"
						   aria-controls="error"
                        >
                            <i className="typcn typcn-globe-outline menu-icon" />
                            <span className="menu-title">Error pages</span>
                            <i className="menu-arrow" />
                        </a>
                        <div className="collapse" id="error">
                            <ul className="nav flex-column sub-menu">
                                <li className="nav-item">
                                    <a className="nav-link"> 404 </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link"> 500 </a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a
                            className="nav-link"
                            data-toggle="collapse"
                            href="#general-pages"
                            aria-expanded="false"
						   aria-controls="general-pages"
                        >
                            <i className="typcn typcn-document-delete menu-icon" />
                            <span className="menu-title">General Pages</span>
                            <i className="menu-arrow" />
                        </a>
                        <div className="collapse" id="general-pages">
                            <ul className="nav flex-column sub-menu">
                                <li className="nav-item">
                                    <a className="nav-link"> Blank Page </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link"> Profile </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link"> FAQ </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link"> FAQ 2 </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link"> News grid </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link"> Timeline </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link"> Search
									Results
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link"> Portfolio </a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a
                            className="nav-link"
                            data-toggle="collapse"
                            href="#e-commerce"
                            aria-expanded="false"
						   aria-controls="e-commerce"
                        >
                            <i className="typcn typcn-briefcase menu-icon" />
                            <span className="menu-title">E-commerce</span>
                            <i className="menu-arrow" />
                        </a>
                        <div className="collapse" id="e-commerce">
                            <ul className="nav flex-column sub-menu">
                                <li className="nav-item">
                                    <a className="nav-link"> Invoice </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link"> Pricing
									Table
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link"> Orders </a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link">
                            <i className="typcn typcn-mail menu-icon" />
                            <span className="menu-title">E-mail</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link">
                            <i className="typcn typcn-calendar-outline menu-icon" />
                            <span className="menu-title">Calendar</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link">
                            <i className="typcn typcn-device-phone menu-icon" />
                            <span className="menu-title">Todo List</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link">
                            <i className="typcn typcn-image menu-icon" />
                            <span className="menu-title">Gallery</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link">
                            <i className="typcn typcn-mortar-board menu-icon" />
                            <span className="menu-title">Documentation</span>
                        </a>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Sidebar;
