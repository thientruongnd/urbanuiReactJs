/**
 Mr : Dang Xuan Truong
 Email: truongdx@runsystem.net
 */
import * as React from 'react';
// @ts-ignore
import Logo from '../../public/assets/logo/logo-salefie.png';
// @ts-ignore
import face6 from '../../public/images/faces/face6.jpg';
// @ts-ignore
import face5 from '../../public/images/faces/face5.jpg';
// @ts-ignore
import face4 from '../../public/images/faces/face4.jpg';
// @ts-ignore
import face3 from '../../public/images/faces/face3.jpg';
// @ts-ignore
import face2 from '../../public/images/faces/face2.jpg';
// @ts-ignore
import face1 from '../../public/images/faces/face1.jpg';

interface isState{
	isOpen: boolean
}

class App extends React.Component <{}, isState> {
	constructor(props: {}) {
		super(props);
		this.state = {
			isOpen: false
		};
	}
	toggle=()=>{
		this.setState({ isOpen: !this.state.isOpen })
	}
	handleClick = (e): void=>{
		console.log(e);
		e.preventDefault();
	};
	render(){
		const {isOpen} = this.state ;
		return (
			<div>
				<nav className="navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
					<div className="navbar-brand-wrapper d-flex justify-content-center">
						<div className="navbar-brand-inner-wrapper d-flex justify-content-between align-items-center w-100">
							<a className="navbar-brand brand-logo">
								<img src={Logo} alt="logo"  />
							</a>
							<a className="navbar-brand brand-logo-mini">
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
								<a className="nav-link" data-toggle="dropdown" id="profileDropdown">
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
								<a className="nav-link d-flex justify-content-center align-items-center" onClick={(e)=>this.handleClick(e)}>
									<h6 className="date mb-0">Today : Mar 23</h6>
									<i className="typcn typcn-calendar" />
								</a>
							</li>
							<li className="nav-item dropdown">
								<a className="nav-link count-indicator dropdown-toggle d-flex justify-content-center align-items-center"
								   id="messageDropdown" onClick={(e)=>this.handleClick(e)} data-toggle="dropdown">
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
								<a className="nav-link count-indicator dropdown-toggle d-flex align-items-center justify-content-center" id="notificationDropdown" data-toggle="dropdown">
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
				{/* partial */}
				<div className="container-fluid page-body-wrapper">
					{/* partial:../../partials/_settings-panel.html */}
					<div className="theme-setting-wrapper">
						<div id="settings-trigger"><i className="typcn typcn-cog-outline" /></div>
						<div id="theme-settings" className="settings-panel">
							<i className="settings-close typcn typcn-times" />
							<p className="settings-heading">SIDEBAR SKINS</p>
							<div className="sidebar-bg-options selected" id="sidebar-light-theme"><div className="img-ss rounded-circle bg-light border mr-3" />Light</div>
							<div className="sidebar-bg-options" id="sidebar-dark-theme"><div className="img-ss rounded-circle bg-dark border mr-3" />Dark</div>
							<p className="settings-heading mt-2">HEADER SKINS</p>
							<div className="color-tiles mx-0 px-4">
								<div className="tiles success" />
								<div className="tiles warning" />
								<div className="tiles danger" />
								<div className="tiles info" />
								<div className="tiles dark" />
								<div className="tiles default" />
							</div>
						</div>
					</div>
					<div id="right-sidebar" className="settings-panel">
						<i className="settings-close typcn typcn-times" />
						<ul className="nav nav-tabs" id="setting-panel" role="tablist">
							<li className="nav-item">
								<a className="nav-link active" id="todo-tab"
								   data-toggle="tab" href="#todo-section" onClick={(e)=>this.handleClick(e)}
								   role="tab" aria-controls="todo-section" aria-expanded="true">TO DO LIST</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" id="chats-tab" data-toggle="tab"
								   href="#chats-section" onClick={(e)=>this.handleClick(e)}
								   role="tab" aria-controls="chats-section">CHATS</a>
							</li>
						</ul>
						<div className="tab-content" id="setting-content">
							<div className="tab-pane fade show active scroll-wrapper" id="todo-section" role="tabpanel" aria-labelledby="todo-section">
								<div className="add-items d-flex px-3 mb-0">
									<form className="form w-100">
										<div className="form-group d-flex">
											<input type="text" className="form-control todo-list-input" placeholder="Add To-do" />
											<button type="submit" className="add btn btn-primary todo-list-add-btn" id="add-task">Add</button>
										</div>
									</form>
								</div>
								<div className="list-wrapper px-3">
									<ul className="d-flex flex-column-reverse todo-list">
										<li>
											<div className="form-check">
												<label className="form-check-label">
													<input className="checkbox" type="checkbox" />
													Team review meeting at 3.00 PM
												</label>
											</div>
											<i className="remove typcn typcn-delete-outline" />
										</li>
										<li>
											<div className="form-check">
												<label className="form-check-label">
													<input className="checkbox" type="checkbox" />
													Prepare for presentation
												</label>
											</div>
											<i className="remove typcn typcn-delete-outline" />
										</li>
										<li>
											<div className="form-check">
												<label className="form-check-label">
													<input className="checkbox" type="checkbox" />
													Resolve all the low priority tickets due today
												</label>
											</div>
											<i className="remove typcn typcn-delete-outline" />
										</li>
										<li className="completed">
											<div className="form-check">
												<label className="form-check-label">
													<input className="checkbox" type="checkbox" defaultChecked />
													Schedule meeting for next week
												</label>
											</div>
											<i className="remove typcn typcn-delete-outline" />
										</li>
										<li className="completed">
											<div className="form-check">
												<label className="form-check-label">
													<input className="checkbox" type="checkbox" defaultChecked />
													Project review
												</label>
											</div>
											<i className="remove typcn typcn-delete-outline" />
										</li>
									</ul>
								</div>
								<div className="events py-4 border-bottom px-3">
									<div className="wrapper d-flex mb-2">
										<i className="typcn typcn-media-record-outline text-primary mr-2" />
										<span>Feb 11 2018</span>
									</div>
									<p className="mb-0 font-weight-thin text-gray">Creating component page</p>
									<p className="text-gray mb-0">build a js based app</p>
								</div>
								<div className="events pt-4 px-3">
									<div className="wrapper d-flex mb-2">
										<i className="typcn typcn-media-record-outline text-primary mr-2" />
										<span>Feb 7 2018</span>
									</div>
									<p className="mb-0 font-weight-thin text-gray">Meeting with Alisa</p>
									<p className="text-gray mb-0 ">Call Sarah Graves</p>
								</div>
							</div>
							{/* To do section tab ends */}
							<div className="tab-pane fade" id="chats-section" role="tabpanel" aria-labelledby="chats-section">
								<div className="d-flex align-items-center justify-content-between border-bottom">
									<p className="settings-heading border-top-0 mb-3 pl-3 pt-0 border-bottom-0 pb-0">Friends</p>
									<small className="settings-heading border-top-0 mb-3 pt-0 border-bottom-0 pb-0 pr-3 font-weight-normal">See All</small>
								</div>
								<ul className="chat-list">
									<li className="list active">
										<div className="profile"><img src={face1} alt="image" /><span className="online" /></div>
										<div className="info">
											<p>Thomas Douglas</p>
											<p>Available</p>
										</div>
										<small className="text-muted my-auto">19 min</small>
									</li>
									<li className="list">
										<div className="profile"><img src={face2} alt="image" /><span className="offline" /></div>
										<div className="info">
											<div className="wrapper d-flex">
												<p>Catherine</p>
											</div>
											<p>Away</p>
										</div>
										<div className="badge badge-success badge-pill my-auto mx-2">4</div>
										<small className="text-muted my-auto">23 min</small>
									</li>
									<li className="list">
										<div className="profile">
											<img src={face3} alt="image" />
										<span className="online" /></div>
										<div className="info">
											<p>Daniel Russell</p>
											<p>Available</p>
										</div>
										<small className="text-muted my-auto">14 min</small>
									</li>
									<li className="list">
										<div className="profile">
											<img src={face4} alt="image" />
											<span className="offline" /></div>
										<div className="info">
											<p>James Richardson</p>
											<p>Away</p>
										</div>
										<small className="text-muted my-auto">2 min</small>
									</li>
									<li className="list">
										<div className="profile">
											<img src={face5} alt="image" />
											<span className="online" /></div>
										<div className="info">
											<p>Madeline Kennedy</p>
											<p>Available</p>
										</div>
										<small className="text-muted my-auto">5 min</small>
									</li>
									<li className="list">
										<div className="profile">
											<img src={face6} alt="image" />
											<span className="online" />
										</div>
										<div className="info">
											<p>Sarah Graves</p>
											<p>Available</p>
										</div>
										<small className="text-muted my-auto">47 min</small>
									</li>
								</ul>
							</div>
							{/* chat tab ends */}
						</div>
					</div>
					{/* partial */}
					{/* partial:../../partials/_sidebar.html */}
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
								<a className="nav-link" data-toggle="collapse"
								   href="#ui-basic" onClick={(e)=>this.handleClick(e)}
								   aria-expanded="false" aria-controls="ui-basic"
								>
									<i className="typcn typcn-document-text menu-icon" />
									<span className="menu-title">UI Elements</span>
									<i className="menu-arrow" />
								</a>
								<div className="collapse" id="ui-basic">
									<ul className="nav flex-column sub-menu">
										<li className="nav-item">
											<a className="nav-link">Accordions</a>
										</li>
										<li className="nav-item">
											<a className="nav-link">Buttons</a>
										</li>
										<li className="nav-item">
											<a className="nav-link">Badges</a>
										</li>
										<li className="nav-item">
											<a className="nav-link">Breadcrumbs</a>
										</li>
										<li className="nav-item">
											<a className="nav-link">Dropdowns</a>
										</li>
										<li className="nav-item">
											<a className="nav-link">Modals</a>
										</li>
										<li className="nav-item">
											<a className="nav-link">Progress bar</a>
										</li>
										<li className="nav-item">
											<a className="nav-link">Pagination</a>
										</li>
										<li className="nav-item">
											<a className="nav-link">Tabs</a>
										</li>
										<li className="nav-item">
											<a className="nav-link">Typography</a>
										</li>
										<li className="nav-item">
											<a className="nav-link">Tooltips</a>
										</li>
									</ul>
								</div>
							</li>
							<li className="nav-item">
								<a className="nav-link" data-toggle="collapse"
								   href="#ui-advanced" onClick={(e)=>this.handleClick(e)}
								   aria-expanded="false" aria-controls="ui-advanced">
									<i className="typcn typcn-cog-outline menu-icon" />
									<span className="menu-title">Advanced UI</span>
									<i className="menu-arrow" />
								</a>
								<div className="collapse" id="ui-advanced">
									<ul className="nav flex-column sub-menu">
										<li className="nav-item">
											<a className="nav-link">Dragula</a>
										</li>
										<li className="nav-item">
											<a className="nav-link">Clipboard</a>
										</li>
										<li className="nav-item">
											<a className="nav-link">Context menu</a>
										</li>
										<li className="nav-item">
											<a className="nav-link">Sliders</a>
										</li>
										<li className="nav-item">
											<a className="nav-link">Carousel</a>
										</li>
										<li className="nav-item">
											<a className="nav-link">Colcade</a>
										</li>
										<li className="nav-item">
											<a className="nav-link">Loaders</a>
										</li>
									</ul>
								</div>
							</li>
							<li className="nav-item">
								<a className="nav-link" data-toggle="collapse"
								   href="#form-elements" onClick={(e)=>this.handleClick(e)}
								   aria-expanded="false" aria-controls="form-elements">
									<i className="typcn typcn-film menu-icon" />
									<span className="menu-title">Form elements</span>
									<i className="menu-arrow" />
								</a>
								<div className="collapse" id="form-elements">
									<ul className="nav flex-column sub-menu">
										<li className="nav-item">
											<a className="nav-link">Basic Elements</a>
										</li>
										<li className="nav-item">
											<a className="nav-link">Advanced Elements</a>
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
								<a className="nav-link" data-toggle="collapse"
								   href="#editors" onClick={(e)=>this.handleClick(e)}
								   aria-expanded="false" aria-controls="editors">
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
								<a className="nav-link" data-toggle="collapse"
								   href="#charts" onClick={(e)=>this.handleClick(e)}
								   aria-expanded="false" aria-controls="charts">
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
											<a className="nav-link">Google charts</a>
										</li>
										<li className="nav-item">
											<a className="nav-link">Sparkline js</a>
										</li>
										<li className="nav-item">
											<a className="nav-link">C3 charts</a>
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
								<a className="nav-link" data-toggle="collapse"
								   href="#tables" onClick={(e)=>this.handleClick(e)}
								   aria-expanded="false" aria-controls="tables">
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
								<a className="nav-link" data-toggle="collapse"
								   href="#icons" onClick={(e)=>this.handleClick(e)}
								   aria-expanded="false" aria-controls="icons">
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
											<a className="nav-link">Mdi icons</a>
										</li>
										<li className="nav-item">
											<a className="nav-link">Font Awesome</a>
										</li>
										<li className="nav-item">
											<a className="nav-link">Simple line icons</a>
										</li>
										<li className="nav-item">
											<a className="nav-link">Themify icons</a>
										</li>
									</ul>
								</div>
							</li>
							<li className="nav-item">
								<a className="nav-link" data-toggle="collapse"
								   href="#maps" onClick={(e)=>this.handleClick(e)}
								   aria-expanded="false" aria-controls="maps">
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
											<a className="nav-link">Google Map</a></li>
									</ul>
								</div>
							</li>
							<li className="nav-item">
								<a className="nav-link" data-toggle="collapse"
								   href="#auth" onClick={(e)=>this.handleClick(e)}
								   aria-expanded="false" aria-controls="auth">
									<i className="typcn typcn-user-add-outline menu-icon" />
									<span className="menu-title">User Pages</span>
									<i className="menu-arrow" />
								</a>
								<div className="collapse" id="auth">
									<ul className="nav flex-column sub-menu">
										<li className="nav-item">
											<a className="nav-link"> Login </a></li>
										<li className="nav-item">
											<a className="nav-link"> Login 2 </a>
										</li>
										<li className="nav-item">
											<a className="nav-link"> Register </a></li>
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
								<a className="nav-link" data-toggle="collapse"
								   href="#error" onClick={(e)=>this.handleClick(e)}
								   aria-expanded="false" aria-controls="error">
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
								<a className="nav-link" data-toggle="collapse"
								   href="#general-pages" onClick={(e)=>this.handleClick(e)}
								   aria-expanded="false" aria-controls="general-pages">
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
											<a className="nav-link"> Timeline </a></li>
										<li className="nav-item">
											<a className="nav-link"> Search Results </a>
										</li>
										<li className="nav-item">
											<a className="nav-link"> Portfolio </a>
										</li>
									</ul>
								</div>
							</li>
							<li className="nav-item">
								<a className="nav-link" data-toggle="collapse"
								   href="#e-commerce" aria-expanded="false" aria-controls="e-commerce"
								   onClick={(e)=>this.handleClick(e)}
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
											<a className="nav-link"> Pricing Table </a></li>
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
					{/* partial */}
					<div className="main-panel">
						<div className="content-wrapper">
							<div className="row">
								<div className="col-lg-6 grid-margin stretch-card">
									<div className="card">
										<div className="card-body">
											<h4 className="card-title">Line chart</h4>
											<canvas id="lineChart"></canvas>
										</div>
									</div>
								</div>
								<div className="col-lg-6 grid-margin stretch-card">
									<div className="card">
										<div className="card-body">
											<h4 className="card-title">Bar chart</h4>
											<canvas id="barChart"></canvas>
										</div>
									</div>
								</div>
							</div>
							<div className="row">
								<div className="col-lg-6 grid-margin stretch-card">
									<div className="card">
										<div className="card-body">
											<h4 className="card-title">Area chart</h4>
											<canvas id="areaChart"></canvas>
										</div>
									</div>
								</div>
								<div className="col-lg-6 grid-margin stretch-card">
									<div className="card">
										<div className="card-body">
											<h4 className="card-title">Doughnut chart</h4>
											<canvas id="doughnutChart"></canvas>
										</div>
									</div>
								</div>
							</div>
							<div className="row">
								<div className="col-lg-6 grid-margin grid-margin-lg-0 stretch-card">
									<div className="card">
										<div className="card-body">
											<h4 className="card-title">Pie chart</h4>
											<canvas id="pieChart"></canvas>
										</div>
									</div>
								</div>
								<div className="col-lg-6 grid-margin grid-margin-lg-0 stretch-card">
									<div className="card">
										<div className="card-body">
											<h4 className="card-title">Scatter chart</h4>
											<canvas id="scatterChart"></canvas>
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
