/**
 Mr : Dang Xuan Truong
 Email: truongdx@runsystem.net
 */
import * as React from 'react';
import 'simple-line-icons/css/simple-line-icons.css';

interface isState{
	isState: boolean
}

class SimpleLineIconComponent extends React.Component <{}, isState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            isState: false,
        };
    }

    render() {
        return (
	        <div className="content-wrapper">
		        <div className="row">
			        <div className="col-lg-12 grid-margin">
				        <div className="card">
					        <div className="card-body">
						        <h4 className="card-title">Simple line icons</h4>
						        <div className="icons-list row">
							        <div className="col-sm-6 col-md-4 col-lg-3">
								        <div className="preview"><i className="icon-user" />icon-user</div>
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3">
								        <div className="preview"><i className="icon-people" />icon-people</div>
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3">
								        <div className="preview"><i className="icon-user-female" /> icon-user-female
								        </div>
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3">
								        <div className="preview"><i className="icon-user-follow" /> icon-user-follow
								        </div>
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3">
								        <div className="preview"><i
									        className="icon-user-following"
								        /> icon-user-following
								        </div>
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3">
								        <div className="preview"><i
									        className="icon-user-unfollow"
								        /> icon-user-unfollow
								        </div>
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3">
								        <div className="preview"><i className="icon-login" /> icon-login</div>
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3">
								        <div className="preview"><i className="icon-logout" /> icon-logout</div>
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3">
								        <div className="preview"><i className="icon-emotsmile" /> icon-emotsmile</div>
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3">
								        <div className="preview"><i className="icon-phone" /> icon-phone</div>
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3">
								        <div className="preview"><i className="icon-call-end" /> icon-call-end</div>
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3">
								        <div className="preview"><i className="icon-call-in" /> icon-call-in</div>
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3">
								        <div className="preview"><i className="icon-call-out" /> icon-call-out</div>
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3">
								        <div className="preview"><i className="icon-map" /> icon-map</div>
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3">
								        <div className="preview"><i className="icon-location-pin" /> icon-location-pin
								        </div>
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3">
								        <div className="preview"><i className="icon-direction" /> icon-direction</div>
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3">
								        <div className="preview"><i className="icon-directions" /> icon-directions
								        </div>
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3">
								        <div className="preview"><i className="icon-compass" /> icon-compass</div>
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3">
								        <div className="preview"><i className="icon-layers" /> icon-layers</div>
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3">
								        <div className="preview"><i className="icon-menu" /> icon-menu</div>
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3">
								        <div className="preview"><i className="icon-list" /> icon-list</div>
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3">
								        <div className="preview"><i
									        className="icon-options-vertical"
								        /> icon-options-vertical
								        </div>
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3">
								        <div className="preview"><i className="icon-options" /> icon-options</div>
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3">
								        <div className="preview"><i className="icon-arrow-down" /> icon-arrow-down
								        </div>
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3">
								        <div className="preview"><i className="icon-arrow-left" /> icon-arrow-left
								        </div>
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3">
								        <div className="preview"><i className="icon-arrow-right" /> icon-arrow-right
								        </div>
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3">
								        <div className="preview"><i className="icon-arrow-up" /> icon-arrow-up</div>
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3">
								        <div className="preview"><i
									        className="icon-arrow-up-circle"
								        /> icon-arrow-up-circle
								        </div>
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3">
								        <div className="preview"><i
									        className="icon-arrow-left-circle"
								        /> icon-arrow-left-circle
								        </div>
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3">
								        <div className="preview"><i
									        className="icon-arrow-right-circle"
								        /> icon-arrow-right-circle
								        </div>
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3">
								        <div className="preview"><i
									        className="icon-arrow-down-circle"
								        /> icon-arrow-down-circle
								        </div>
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3">
								        <div className="preview"><i className="icon-check" /> icon-check</div>
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3">
								        <div className="preview"><i className="icon-clock" /> icon-clock</div>
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3">
								        <div className="preview"><i className="icon-plus" /> icon-plus</div>
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3">
								        <div className="preview"><i className="icon-close" /> icon-close</div>
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3">
								        <div className="preview"><i className="icon-trophy" /> icon-trophy</div>
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3">
								        <div className="preview"><i
									        className="icon-screen-smartphone"
								        /> icon-screen-smartphone
								        </div>
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3">
								        <div className="preview"><i
									        className="icon-screen-desktop"
								        /> icon-screen-desktop
								        </div>
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3">
								        <div className="preview"><i className="icon-plane" /> icon-plane</div>
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3">
								        <div className="preview"><i className="icon-notebook" /> icon-notebook</div>
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3">
								        <div className="preview"><i className="icon-mustache" /> icon-mustache</div>
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3">
								        <div className="preview"><i className="icon-mouse" /> icon-mouse</div>
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3">
								        <div className="preview"><i className="icon-magnet" /> icon-magnet</div>
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3">
								        <div className="preview"><i className="icon-energy" /> icon-energy</div>
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3">
								        <div className="preview"><i className="icon-disc" /> icon-disc</div>
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3">
								        <div className="preview"><i className="icon-cursor" /> icon-cursor</div>
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3">
								        <div className="preview"><i className="icon-cursor-move" /> icon-cursor-move
								        </div>
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3">
								        <div className="preview"><i className="icon-crop" /> icon-crop</div>
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3">
								        <div className="preview"><i className="icon-chemistry" /> icon-chemistry</div>
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3">
								        <div className="preview"><i className="icon-speedometer" /> icon-speedometer
								        </div>
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3">
								        <div className="preview"><i className="icon-shield" /> icon-shield</div>
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3">
								        <div className="preview"><i
									        className="icon-screen-tablet"
								        /> icon-screen-tablet
								        </div>
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3">
								        <div className="preview"><i className="icon-magic-wand" /> icon-magic-wand
								        </div>
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3">
								        <div className="preview"><i className="icon-hourglass" /> icon-hourglass</div>
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3">
								        <div className="preview"><i className="icon-graduation" /> icon-graduation
								        </div>
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3">
								        <div className="preview"><i className="icon-ghost" /> icon-ghost</div>
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3">
								        <div className="preview"><i
									        className="icon-game-controller"
								        /> icon-game-controller
								        </div>
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3">
								        <div className="preview"><i className="icon-fire" /> icon-fire</div>
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3">
								        <div className="preview"><i className="icon-eyeglass" /> icon-eyeglass</div>
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3">
								        <div className="preview"><i
									        className="icon-envelope-open"
								        /> icon-envelope-open
								        </div>
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3">
								        <div className="preview"><i
									        className="icon-envelope-letter"
								        /> icon-envelope-letter
								        </div>
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3">
								        <div className="preview"><i className="icon-bell" /> icon-bell</div>
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3">
								        <div className="preview"><i className="icon-badge" /> icon-badge</div>
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3">
								        <div className="preview"><i className="icon-anchor" /> icon-anchor</div>
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3">
								        <div className="preview"><i className="icon-wallet" /> icon-wallet</div>
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3">
								        <div className="preview"><i className="icon-vector" /> icon-vector</div>
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3">
								        <div className="preview"><i className="icon-speech" /> icon-speech</div>
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3">
								        <div className="preview"><i className="icon-puzzle" /> icon-puzzle</div>
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3">
								        <div className="preview"><i className="icon-printer" /> icon-printer</div>
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3">
								        <div className="preview"><i className="icon-present" /> icon-present</div>
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3">
								        <div className="preview"><i className="icon-playlist" /> icon-playlist</div>
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3">
								        <div className="preview"><i className="icon-pin" /> icon-pin</div>
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3">
								        <div className="preview"><i className="icon-picture" /> icon-picture</div>
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3">
								        <div className="preview"><i className="icon-handbag" /> icon-handbag</div>
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3">
								        <div className="preview"><i className="icon-globe-alt" /> icon-globe-alt</div>
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3">
								        <div className="preview"><i className="icon-globe" /> icon-globe</div>
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3">
								        <div className="preview"><i className="icon-folder-alt" /> icon-folder-alt
								        </div>
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3">
								        <div className="preview"><i className="icon-folder" /> icon-folder</div>
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3">
								        <div className="preview"><i className="icon-film" /> icon-film</div>
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3">
								        <div className="preview"><i className="icon-feed" /> icon-feed</div>
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3">
								        <div className="preview"><i className="icon-drop" /> icon-drop</div>
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3">
								        <div className="preview"><i className="icon-drawer" /> icon-drawer</div>
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3">
								        <div className="preview"><i className="icon-docs" /> icon-docs</div>
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3">
								        <div className="preview"><i className="icon-doc" /> icon-doc</div>
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3">
								        <div className="preview"><i className="icon-diamond" /> icon-diamond</div>
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3">
								        <div className="preview"><i className="icon-cup" /> icon-cup</div>
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3">
								        <div className="preview"><i className="icon-calculator" /> icon-calculator
								        </div>
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3">
								        <div className="preview"><i className="icon-bubbles" /> icon-bubbles</div>
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3">
								        <div className="preview"><i className="icon-briefcase" /> icon-briefcase</div>
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3">
								        <div className="preview"><i className="icon-book-open" /> icon-book-open</div>
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3">
								        <div className="preview"><i
									        className="icon-basket-loaded"
								        /> icon-basket-loaded
								        </div>
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3">
								        <div className="preview"><i className="icon-basket" /> icon-basket</div>
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3">
								        <div className="preview"><i className="icon-bag" /> icon-bag</div>
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3">
								        <div className="preview"><i className="icon-action-undo" /> icon-action-undo
								        </div>
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3">
								        <div className="preview"><i className="icon-action-redo" /> icon-action-redo
								        </div>
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3">
								        <div className="preview"><i className="icon-wrench" /> icon-wrench</div>
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3">
								        <div className="preview"><i className="icon-umbrella" /> icon-umbrella</div>
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3">
								        <div className="preview"><i className="icon-trash" /> icon-trash</div>
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3">
								        <div className="preview"><i className="icon-tag" /> icon-tag</div>
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3">
								        <div className="preview"><i className="icon-support" /> .icon-support</div>
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3">
								        <div className="preview"><i className="icon-frame" /> icon-frame</div>
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3">
								        <div className="preview"><i
									        className="icon-size-fullscreen"
								        /> icon-size-fullscreen
								        </div>
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3">
								        <div className="preview"><i className="icon-size-actual" /> icon-size-actual
								        </div>
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3">
								        <div className="preview"><i className="icon-shuffle" /> icon-shuffle</div>
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3">
								        <div className="preview"><i className="icon-share-alt" /> icon-share-alt</div>
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3">
								        <div className="preview"><i className="icon-share" /> icon-share</div>
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3">
								        <div className="preview"><i className="icon-rocket" /> icon-rocket</div>
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3">
								        <div className="preview"><i className="icon-question" /> icon-question</div>
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3">
								        <div className="preview"><i className="icon-pie-chart" /> icon-pie-chart</div>
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3">
								        <div className="preview"><i className="icon-pencil" /> icon-pencil</div>
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3">
								        <div className="preview"><i className="icon-note" /> icon-note</div>
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3">
								        <div className="preview"><i className="icon-loop" /> icon-loop</div>
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3">
								        <div className="preview"><i className="icon-home" /> icon-home</div>
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3">
								        <div className="preview"><i className="icon-grid" /> icon-grid</div>
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3">
								        <div className="preview"><i className="icon-graph" /> icon-graph</div>
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3">
								        <div className="preview"><i className="icon-microphone" /> icon-microphone
								        </div>
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3">
								        <div className="preview"><i
									        className="icon-music-tone-alt"
								        /> icon-music-tone-alt
								        </div>
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3">
								        <div className="preview"><i className="icon-music-tone" /> icon-music-tone
								        </div>
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3">
								        <div className="preview"><i
									        className="icon-earphones-alt"
								        /> icon-earphones-alt
								        </div>
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3">
								        <div className="preview"><i className="icon-earphones" /> icon-earphones</div>
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3">
								        <div className="preview"><i className="icon-equalizer" /> icon-equalizer</div>
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3">
								        <div className="preview"><i className="icon-like" /> icon-like</div>
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3">
								        <div className="preview"><i className="icon-dislike" /> icon-dislike</div>
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3">
								        <div className="preview"><i
									        className="icon-control-start"
								        /> icon-control-start
								        </div>
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3">
								        <div className="preview"><i
									        className="icon-control-rewind"
								        /> icon-control-rewind
								        </div>
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3">
								        <div className="preview"><i className="icon-control-play" /> icon-control-play
								        </div>
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3">
								        <div className="preview"><i
									        className="icon-control-pause"
								        /> icon-control-pause
								        </div>
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3">
								        <div className="preview"><i
									        className="icon-control-forward"
								        /> icon-control-forward
								        </div>
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3">
								        <div className="preview"><i className="icon-control-end" /> icon-control-end
								        </div>
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3">
								        <div className="preview"><i className="icon-volume-1" /> icon-volume-1</div>
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3">
								        <div className="preview"><i className="icon-volume-2" /> icon-volume-2</div>
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3">
								        <div className="preview"><i className="icon-volume-off" /> icon-volume-off
								        </div>
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3">
								        <div className="preview"><i className="icon-calendar" /> icon-calendar</div>
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3">
								        <div className="preview"><i className="icon-bulb" /> icon-bulb</div>
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3">
								        <div className="preview"><i className="icon-chart" /> icon-chart</div>
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3">
								        <div className="preview"><i className="icon-ban" /> icon-ban</div>
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3">
								        <div className="preview"><i className="icon-bubble" /> icon-bubble</div>
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3">
								        <div className="preview"><i className="icon-camrecorder" /> icon-camrecorder
								        </div>
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3">
								        <div className="preview"><i className="icon-camera" /> icon-camera</div>
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3">
								        <div className="preview"><i
									        className="icon-cloud-download"
								        /> icon-cloud-download
								        </div>
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3">
								        <div className="preview"><i className="icon-cloud-upload" /> icon-cloud-upload
								        </div>
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3">
								        <div className="preview"><i className="icon-eye" /> icon-eye</div>
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3">
								        <div className="preview"><i className="icon-flag" /> icon-flag</div>
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3">
								        <div className="preview"><i className="icon-heart" /> icon-heart</div>
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3">
								        <div className="preview"><i className="icon-info" /> icon-info</div>
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3">
								        <div className="preview"><i className="icon-key" /> icon-key</div>
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3">
								        <div className="preview"><i className="icon-link" /> icon-link</div>
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3">
								        <div className="preview"><i className="icon-lock" /> icon-lock</div>
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3">
								        <div className="preview"><i className="icon-lock-open" /> icon-lock-open</div>
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3">
								        <div className="preview"><i className="icon-magnifier" /> icon-magnifier</div>
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3">
								        <div className="preview"><i
									        className="icon-magnifier-add"
								        /> icon-magnifier-add
								        </div>
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3">
								        <div className="preview"><i
									        className="icon-magnifier-remove"
								        /> icon-magnifier-remove
								        </div>
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3">
								        <div className="preview"><i className="icon-paper-clip" /> icon-paper-clip
								        </div>
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3">
								        <div className="preview"><i className="icon-paper-plane" /> icon-paper-plane
								        </div>
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3">
								        <div className="preview"><i className="icon-power" /> icon-power</div>
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3">
								        <div className="preview"><i className="icon-refresh" /> icon-refresh</div>
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3">
								        <div className="preview"><i className="icon-reload" /> icon-reload</div>
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3">
								        <div className="preview"><i className="icon-settings" /> icon-settings</div>
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3">
								        <div className="preview"><i className="icon-star" /> icon-star</div>
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3">
								        <div className="preview"><i
									        className="icon-symbol-female"
								        /> icon-symbol-female
								        </div>
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3">
								        <div className="preview"><i className="icon-symbol-male" /> icon-symbol-male
								        </div>
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3">
								        <div className="preview"><i className="icon-target" /> icon-target</div>
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3">
								        <div className="preview"><i className="icon-credit-card" /> icon-credit-card
								        </div>
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3">
								        <div className="preview"><i className="icon-paypal" /> icon-paypal</div>
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3">
								        <div className="preview"><i
									        className="icon-social-tumblr"
								        /> icon-social-tumblr
								        </div>
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3">
								        <div className="preview"><i
									        className="icon-social-twitter"
								        /> icon-social-twitter
								        </div>
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3">
								        <div className="preview"><i
									        className="icon-social-facebook"
								        /> icon-social-facebook
								        </div>
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3">
								        <div className="preview"><i
									        className="icon-social-instagram"
								        /> icon-social-instagram
								        </div>
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3">
								        <div className="preview"><i
									        className="icon-social-linkedin"
								        /> icon-social-linkedin
								        </div>
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3">
								        <div className="preview"><i
									        className="icon-social-pinterest"
								        /> icon-social-pinterest
								        </div>
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3">
								        <div className="preview"><i
									        className="icon-social-github"
								        /> icon-social-github
								        </div>
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3">
								        <div className="preview"><i
									        className="icon-social-google"
								        /> icon-social-google
								        </div>
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3">
								        <div className="preview"><i
									        className="icon-social-reddit"
								        /> icon-social-reddit
								        </div>
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3">
								        <div className="preview"><i className="icon-social-skype" /> icon-social-skype
								        </div>
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3">
								        <div className="preview"><i
									        className="icon-social-dribbble"
								        /> icon-social-dribbble
								        </div>
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3">
								        <div className="preview"><i
									        className="icon-social-behance"
								        /> icon-social-behance
								        </div>
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3">
								        <div className="preview"><i
									        className="icon-social-foursqare"
								        /> icon-social-foursqare
								        </div>
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3">
								        <div className="preview"><i
									        className="icon-social-soundcloud"
								        /> icon-social-soundcloud
								        </div>
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3">
								        <div className="preview"><i
									        className="icon-social-spotify"
								        /> icon-social-spotify
								        </div>
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3">
								        <div className="preview"><i
									        className="icon-social-stumbleupon"
								        /> icon-social-stumbleupon
								        </div>
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3">
								        <div className="preview"><i
									        className="icon-social-youtube"
								        /> icon-social-youtube
								        </div>
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3">
								        <div className="preview"><i
									        className="icon-social-dropbox"
								        /> icon-social-dropbox
								        </div>
							        </div>
						        </div>
					        </div>
				        </div>
			        </div>
		        </div>
	        </div>
        );
    }
}

export default SimpleLineIconComponent;
