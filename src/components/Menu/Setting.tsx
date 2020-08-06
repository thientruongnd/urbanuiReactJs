/**
 Mr : Dang Xuan Truong
 Email: truongdx@runsystem.net
 */
import * as React from 'react';
// @ts-ignore
import * as face1 from '../../public/images/faces/face1.jpg';
// @ts-ignore
import * as face2 from '../../public/images/faces/face2.jpg';
// @ts-ignore
import * as face3 from '../../public/images/faces/face3.jpg';
// @ts-ignore
import * as face4 from '../../public/images/faces/face4.jpg';
// @ts-ignore
import * as face5 from '../../public/images/faces/face5.jpg';
// @ts-ignore
import * as face6 from '../../public/images/faces/face6.jpg';

interface isState{
	isOpen: boolean
}

class SettingWrapper extends React.Component <{}, isState> {
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
	        <div>
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
	                        <a
	                            className="nav-link active"
	                            id="todo-tab"
							   data-toggle="tab"
	                            href="#todo-section"
	                            onClick={(e) => this.handleClick(e)}
							   role="tab"
	                            aria-controls="todo-section"
	                            aria-expanded="true"
	                        >TO DO LIST
	                        </a>
	                    </li>
	                    <li className="nav-item">
	                        <a
	                            className="nav-link"
	                            id="chats-tab"
	                            data-toggle="tab"
							   href="#chats-section"
	                            onClick={(e) => this.handleClick(e)}
							   role="tab"
	                            aria-controls="chats-section"
	                        >CHATS
	                        </a>
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
	                    <div className="tab-pane fade" id="chats-section" role="tabpanel" aria-labelledby="chats-section">
	                        <div className="d-flex align-items-center justify-content-between border-bottom">
	                            <p className="settings-heading border-top-0 mb-3 pl-3 pt-0 border-bottom-0 pb-0">Friends</p>
	                            <small className="settings-heading border-top-0 mb-3 pt-0 border-bottom-0 pb-0 pr-3 font-weight-normal">See All</small>
	                        </div>
	                        <ul className="chat-list">
	                            <li className="list active">
	                                <div className="profile">
	                                    <img src={face1} alt="image" />
	                                    <span className="online" />
	                                </div>
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
	                                    <span className="online" />
	                                </div>
	                                <div className="info">
	                                    <p>Daniel Russell</p>
	                                    <p>Available</p>
	                                </div>
	                                <small className="text-muted my-auto">14 min</small>
	                            </li>
	                            <li className="list">
	                                <div className="profile">
	                                    <img src={face4} alt="image" />
	                                    <span className="offline" />
	                                </div>
	                                <div className="info">
	                                    <p>James Richardson</p>
	                                    <p>Away</p>
	                                </div>
	                                <small className="text-muted my-auto">2 min</small>
	                            </li>
	                            <li className="list">
	                                <div className="profile">
	                                    <img src={face5} alt="image" />
	                                    <span className="online" />
	                                </div>
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
	                </div>
	            </div>
	        </div>
	    );
	}
}

export default SettingWrapper;
