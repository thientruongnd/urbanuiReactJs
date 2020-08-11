/**
 Mr : Dang Xuan Truong
 Email: truongdx@runsystem.net
 */
import * as React from 'react';
import 'ti-icons/css/themify-icons.css';

interface isState{
	isState: boolean
}

class ThemifyComponent extends React.Component <{}, isState> {
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
						        <h4 className="card-title">Arrows & direction icons</h4>
						        <div className="icons-list row">
							        <div className="col-sm-6 col-md-4 col-lg-3"><i
								        className="ti-arrow-up"
							        /> ti-arrow-up
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i
								        className="ti-arrow-right"
							        /> ti-arrow-right
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i
								        className="ti-arrow-left"
							        /> ti-arrow-left
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i
								        className="ti-arrow-down"
							        /> ti-arrow-down
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i
								        className="ti-arrows-vertical"
							        /> ti-arrows-vertical
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i
								        className="ti-arrows-horizontal"
							        /> ti-arrows-horizontal
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i
								        className="ti-angle-up"
							        /> ti-angle-up
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i
								        className="ti-angle-right"
							        /> ti-angle-right
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i
								        className="ti-angle-left"
							        /> ti-angle-left
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i
								        className="ti-angle-down"
							        /> ti-angle-down
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i
								        className="ti-angle-double-up"
							        /> ti-angle-double-up
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i
								        className="ti-angle-double-right"
							        /> ti-angle-double-right
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i
								        className="ti-angle-double-left"
							        /> ti-angle-double-left
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i
								        className="ti-angle-double-down"
							        /> ti-angle-double-down
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i className="ti-move" /> ti-move
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i
								        className="ti-fullscreen"
							        /> ti-fullscreen
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i
								        className="ti-arrow-top-right"
							        /> ti-arrow-top-right
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i
								        className="ti-arrow-top-left"
							        /> ti-arrow-top-left
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i
								        className="ti-arrow-circle-up"
							        /> ti-arrow-circle-up
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i
								        className="ti-arrow-circle-right"
							        /> ti-arrow-circle-right
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i
								        className="ti-arrow-circle-left"
							        /> ti-arrow-circle-left
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i
								        className="ti-arrow-circle-down"
							        /> ti-arrow-circle-down
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i
								        className="ti-arrows-corner"
							        /> ti-arrows-corner
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i
								        className="ti-split-v"
							        /> ti-split-v
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i
								        className="ti-split-v-alt"
							        /> ti-split-v-alt
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i
								        className="ti-split-h"
							        /> ti-split-h
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i
								        className="ti-hand-point-up"
							        /> ti-hand-point-up
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i
								        className="ti-hand-point-right"
							        /> ti-hand-point-right
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i
								        className="ti-hand-point-left"
							        /> ti-hand-point-left
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i
								        className="ti-hand-point-down"
							        /> ti-hand-point-down
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i
								        className="ti-back-right"
							        /> ti-back-right
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i
								        className="ti-back-left"
							        /> ti-back-left
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i
								        className="ti-exchange-vertical"
							        /> ti-exchange-vertical
							        </div>
						        </div>
					        </div>
				        </div>
			        </div>
			        <div className="col-lg-12 grid-margin">
				        <div className="card">
					        <div className="card-body">
						        <h4 className="card-title">Web app icons</h4>
						        <div className="icons-list row">
							        <div className="col-sm-6 col-md-4 col-lg-3"><i className="ti-wand" /> ti-wand
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i className="ti-save" /> ti-save
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i
								        className="ti-save-alt"
							        /> ti-save-alt
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i
								        className="ti-direction"
							        /> ti-direction
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i
								        className="ti-direction-alt"
							        /> ti-direction-alt
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i className="ti-user" /> ti-user
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i className="ti-link" /> ti-link
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i className="ti-unlink" /> ti-unlink
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i className="ti-trash" /> ti-trash
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i className="ti-target" /> ti-target
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i className="ti-tag" /> ti-tag</div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i
								        className="ti-desktop"
							        /> ti-desktop
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i className="ti-tablet" /> ti-tablet
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i className="ti-mobile" /> ti-mobile
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i className="ti-email" /> ti-email
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i className="ti-star" /> ti-star
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i className="ti-spray" /> ti-spray
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i className="ti-signal" /> ti-signal
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i
								        className="ti-shopping-cart"
							        /> ti-shopping-cart
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i
								        className="ti-shopping-cart-full"
							        /> ti-shopping-cart-full
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i
								        className="ti-settings"
							        /> ti-settings
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i className="ti-search" /> ti-search
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i
								        className="ti-zoom-in"
							        /> ti-zoom-in
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i
								        className="ti-zoom-out"
							        /> ti-zoom-out
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i className="ti-cut" /> ti-cut</div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i className="ti-ruler" /> ti-ruler
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i
								        className="ti-ruler-alt-2"
							        /> ti-ruler-alt-2
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i
								        className="ti-ruler-pencil"
							        /> ti-ruler-pencil
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i
								        className="ti-ruler-alt"
							        /> ti-ruler-alt
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i
								        className="ti-bookmark"
							        /> ti-bookmark
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i
								        className="ti-bookmark-alt"
							        /> ti-bookmark-alt
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i className="ti-reload" /> ti-reload
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i className="ti-plus" /> ti-plus
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i className="ti-minus" /> ti-minus
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i className="ti-close" /> ti-close
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i className="ti-pin" /> ti-pin</div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i className="ti-pencil" /> ti-pencil
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i
								        className="ti-pencil-alt"
							        /> ti-pencil-alt
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i
								        className="ti-paint-roller"
							        /> ti-paint-roller
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i
								        className="ti-paint-bucket"
							        /> ti-paint-bucket
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i className="ti-na" /> ti-na</div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i className="ti-medall" /> ti-medall
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i
								        className="ti-medall-alt"
							        /> ti-medall-alt
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i className="ti-marker" /> ti-marker
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i
								        className="ti-marker-alt"
							        /> ti-marker-alt
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i className="ti-lock" /> ti-lock
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i className="ti-unlock" /> ti-unlock
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i
								        className="ti-location-arrow"
							        /> ti-location-arrow
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i className="ti-layout" /> ti-layout
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i className="ti-layers" /> ti-layers
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i
								        className="ti-layers-alt"
							        /> ti-layers-alt
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i className="ti-key" /> ti-key</div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i className="ti-image" /> ti-image
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i className="ti-heart" /> ti-heart
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i
								        className="ti-heart-broken"
							        /> ti-heart-broken
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i
								        className="ti-hand-stop"
							        /> ti-hand-stop
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i
								        className="ti-hand-open"
							        /> ti-hand-open
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i
								        className="ti-hand-drag"
							        /> ti-hand-drag
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i className="ti-flag" /> ti-flag
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i
								        className="ti-flag-alt"
							        /> ti-flag-alt
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i
								        className="ti-flag-alt-2"
							        /> ti-flag-alt-2
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i className="ti-eye" /> ti-eye</div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i className="ti-import" /> ti-import
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i className="ti-export" /> ti-export
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i className="ti-cup" /> ti-cup</div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i className="ti-crown" /> ti-crown
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i
								        className="ti-comments"
							        /> ti-comments
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i
								        className="ti-comment"
							        /> ti-comment
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i
								        className="ti-comment-alt"
							        /> ti-comment-alt
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i
								        className="ti-thought"
							        /> ti-thought
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i className="ti-clip" /> ti-clip
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i className="ti-check" /> ti-check
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i
								        className="ti-check-box"
							        /> ti-check-box
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i className="ti-camera" /> ti-camera
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i
								        className="ti-announcement"
							        /> ti-announcement
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i className="ti-brush" /> ti-brush
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i
								        className="ti-brush-alt"
							        /> ti-brush-alt
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i
								        className="ti-palette"
							        /> ti-palette
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i
								        className="ti-briefcase"
							        /> ti-briefcase
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i className="ti-bolt" /> ti-bolt
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i
								        className="ti-bolt-alt"
							        /> ti-bolt-alt
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i
								        className="ti-blackboard"
							        /> ti-blackboard
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i className="ti-bag" /> ti-bag</div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i className="ti-world" /> ti-world
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i
								        className="ti-wheelchair"
							        /> ti-wheelchair
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i className="ti-car" /> ti-car</div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i className="ti-truck" /> ti-truck
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i className="ti-timer" /> ti-timer
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i className="ti-ticket" /> ti-ticket
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i
								        className="ti-thumb-up"
							        /> ti-thumb-up
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i
								        className="ti-thumb-down"
							        /> ti-thumb-down
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i
								        className="ti-stats-up"
							        /> ti-stats-up
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i
								        className="ti-stats-down"
							        /> ti-stats-down
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i className="ti-shine" /> ti-shine
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i
								        className="ti-shift-right"
							        /> ti-shift-right
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i
								        className="ti-shift-left"
							        /> ti-shift-left
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i
								        className="ti-shift-right-alt"
							        /> ti-shift-right-alt
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i
								        className="ti-shift-left-alt"
							        /> ti-shift-left-alt
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i className="ti-shield" /> ti-shield
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i
								        className="ti-notepad"
							        /> ti-notepad
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i className="ti-server" /> ti-server
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i className="ti-pulse" /> ti-pulse
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i
								        className="ti-printer"
							        /> ti-printer
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i
								        className="ti-power-off"
							        /> ti-power-off
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i className="ti-plug" /> ti-plug
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i
								        className="ti-pie-chart"
							        /> ti-pie-chart
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i className="ti-panel" /> ti-panel
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i
								        className="ti-package"
							        /> ti-package
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i className="ti-music" /> ti-music
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i
								        className="ti-music-alt"
							        /> ti-music-alt
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i className="ti-mouse" /> ti-mouse
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i
								        className="ti-mouse-alt"
							        /> ti-mouse-alt
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i className="ti-money" /> ti-money
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i
								        className="ti-microphone"
							        /> ti-microphone
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i className="ti-menu" /> ti-menu
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i
								        className="ti-menu-alt"
							        /> ti-menu-alt
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i className="ti-map" /> ti-map</div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i
								        className="ti-map-alt"
							        /> ti-map-alt
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i
								        className="ti-location-pin"
							        /> ti-location-pin
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i
								        className="ti-light-bulb"
							        /> ti-light-bulb
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i className="ti-info" /> ti-info
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i
								        className="ti-infinite"
							        /> ti-infinite
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i
								        className="ti-id-badge"
							        /> ti-id-badge
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i className="ti-hummer" /> ti-hummer
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i className="ti-home" /> ti-home
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i className="ti-help" /> ti-help
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i
								        className="ti-headphone"
							        /> ti-headphone
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i
								        className="ti-harddrives"
							        /> ti-harddrives
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i
								        className="ti-harddrive"
							        /> ti-harddrive
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i className="ti-gift" /> ti-gift
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i className="ti-game" /> ti-game
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i className="ti-filter" /> ti-filter
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i className="ti-files" /> ti-files
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i className="ti-file" /> ti-file
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i className="ti-zip" /> ti-zip</div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i className="ti-folder" /> ti-folder
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i
								        className="ti-envelope"
							        /> ti-envelope
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i
								        className="ti-dashboard"
							        /> ti-dashboard
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i className="ti-cloud" /> ti-cloud
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i
								        className="ti-cloud-up"
							        /> ti-cloud-up
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i
								        className="ti-cloud-down"
							        /> ti-cloud-down
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i
								        className="ti-clipboard"
							        /> ti-clipboard
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i
								        className="ti-calendar"
							        /> ti-calendar
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i className="ti-book" /> ti-book
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i className="ti-bell" /> ti-bell
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i
								        className="ti-basketball"
							        /> ti-basketball
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i
								        className="ti-bar-chart"
							        /> ti-bar-chart
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i
								        className="ti-bar-chart-alt"
							        /> ti-bar-chart-alt
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i
								        className="ti-archive"
							        /> ti-archive
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i className="ti-anchor" /> ti-anchor
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i className="ti-alert" /> ti-alert
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i
								        className="ti-alarm-clock"
							        /> ti-alarm-clock
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i className="ti-agenda" /> ti-agenda
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i className="ti-write" /> ti-write
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i className="ti-wallet" /> ti-wallet
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i
								        className="ti-video-clapper"
							        /> ti-video-clapper
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i
								        className="ti-video-camera"
							        /> ti-video-camera
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i className="ti-vector" /> ti-vector
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i
								        className="ti-support"
							        /> ti-support
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i className="ti-stamp" /> ti-stamp
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i className="ti-slice" /> ti-slice
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i
								        className="ti-shortcode"
							        /> ti-shortcode
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i
								        className="ti-receipt"
							        /> ti-receipt
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i className="ti-pin2" /> ti-pin2
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i
								        className="ti-pin-alt"
							        /> ti-pin-alt
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i
								        className="ti-pencil-alt2"
							        /> ti-pencil-alt2
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i className="ti-eraser" /> ti-eraser
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i className="ti-more" /> ti-more
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i
								        className="ti-more-alt"
							        /> ti-more-alt
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i
								        className="ti-microphone-alt"
							        /> ti-microphone-alt
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i className="ti-magnet" /> ti-magnet
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i
								        className="ti-line-double"
							        /> ti-line-double
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i
								        className="ti-line-dotted"
							        /> ti-line-dotted
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i
								        className="ti-line-dashed"
							        /> ti-line-dashed
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i
								        className="ti-ink-pen"
							        /> ti-ink-pen
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i
								        className="ti-info-alt"
							        /> ti-info-alt
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i
								        className="ti-help-alt"
							        /> ti-help-alt
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i
								        className="ti-headphone-alt"
							        /> ti-headphone-alt
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i
								        className="ti-gallery"
							        /> ti-gallery
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i
								        className="ti-face-smile"
							        /> ti-face-smile
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i
								        className="ti-face-sad"
							        /> ti-face-sad
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i
								        className="ti-credit-card"
							        /> ti-credit-card
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i
								        className="ti-comments-smiley"
							        /> ti-comments-smiley
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i className="ti-time" /> ti-time
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i className="ti-share" /> ti-share
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i
								        className="ti-share-alt"
							        /> ti-share-alt
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i className="ti-rocket" /> ti-rocket
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i
								        className="ti-new-window"
							        /> ti-new-window
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i className="ti-rss" /> ti-rss</div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i
								        className="ti-rss-alt"
							        /> ti-rss-alt
							        </div>
						        </div>
					        </div>
				        </div>
			        </div>
			        <div className="col-lg-12 grid-margin">
				        <div className="card">
					        <div className="card-body">
						        <h4 className="card-title">Control icons</h4>
						        <div className="icons-list row">
							        <div className="col-sm-6 col-md-4 col-lg-3"><i
								        className="ti-control-stop"
							        /> ti-control-stop
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i
								        className="ti-control-shuffle"
							        /> ti-control-shuffle
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i
								        className="ti-control-play"
							        /> ti-control-play
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i
								        className="ti-control-pause"
							        /> ti-control-pause
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i
								        className="ti-control-forward"
							        /> ti-control-forward
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i
								        className="ti-control-backward"
							        /> ti-control-backward
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i className="ti-volume" /> ti-volume
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i
								        className="ti-control-skip-forward"
							        /> ti-control-skip-forward
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i
								        className="ti-control-skip-backward"
							        /> ti-control-skip-backward
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i
								        className="ti-control-record"
							        /> ti-control-record
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i
								        className="ti-control-eject"
							        /> ti-control-eject
							        </div>
						        </div>
					        </div>
				        </div>
			        </div>
			        <div className="col-lg-12 grid-margin">
				        <div className="card">
					        <div className="card-body">
						        <h4 className="card-title">Text editor</h4>
						        <div className="icons-list row">
							        <div className="col-sm-6 col-md-4 col-lg-3"><i
								        className="ti-paragraph"
							        /> ti-paragraph
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i
								        className="ti-uppercase"
							        /> ti-uppercase
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i
								        className="ti-underline"
							        /> ti-underline
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i className="ti-text" /> ti-text
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i className="ti-Italic" /> ti-Italic
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i
								        className="ti-smallcap"
							        /> ti-smallcap
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i className="ti-list" /> ti-list
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i
								        className="ti-list-ol"
							        /> ti-list-ol
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i
								        className="ti-align-right"
							        /> ti-align-right
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i
								        className="ti-align-left"
							        /> ti-align-left
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i
								        className="ti-align-justify"
							        /> ti-align-justify
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i
								        className="ti-align-center"
							        /> ti-align-center
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i
								        className="ti-quote-right"
							        /> ti-quote-right
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i
								        className="ti-quote-left"
							        /> ti-quote-left
							        </div>
						        </div>
					        </div>
				        </div>
			        </div>
			        <div className="col-lg-12 grid-margin">
				        <div className="card">
					        <div className="card-body">
						        <h4 className="card-title">Layout icons</h4>
						        <div className="icons-list row">
							        <div className="col-sm-6 col-md-4 col-lg-3"><i
								        className="ti-paragraph"
							        /> ti-paragraph
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i
								        className="ti-uppercase"
							        /> ti-uppercase
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i
								        className="ti-underline"
							        /> ti-underline
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i className="ti-text" /> ti-text
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i className="ti-Italic" /> ti-Italic
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i
								        className="ti-smallcap"
							        /> ti-smallcap
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i className="ti-list" /> ti-list
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i
								        className="ti-list-ol"
							        /> ti-list-ol
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i
								        className="ti-align-right"
							        /> ti-align-right
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i
								        className="ti-align-left"
							        /> ti-align-left
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i
								        className="ti-align-justify"
							        /> ti-align-justify
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i
								        className="ti-align-center"
							        /> ti-align-center
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i
								        className="ti-quote-right"
							        /> ti-quote-right
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i
								        className="ti-quote-left"
							        /> ti-quote-left
							        </div>
						        </div>
					        </div>
				        </div>
			        </div>
			        <div className="col-lg-12 grid-margin">
				        <div className="card">
					        <div className="card-body">
						        <h4 className="card-title">Brand icons</h4>
						        <div className="icons-list row">
							        <div className="col-sm-6 col-md-4 col-lg-3"><i className="ti-flickr" /> ti-flickr
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i
								        className="ti-flickr-alt"
							        /> ti-flickr-alt
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i
								        className="ti-instagram"
							        /> ti-instagram
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i className="ti-google" /> ti-google
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i className="ti-github" /> ti-github
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i
								        className="ti-facebook"
							        /> ti-facebook
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i
								        className="ti-dropbox"
							        /> ti-dropbox
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i
								        className="ti-dropbox-alt"
							        /> ti-dropbox-alt
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i
								        className="ti-dribbble"
							        /> ti-dribbble
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i className="ti-apple" /> ti-apple
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i
								        className="ti-android"
							        /> ti-android
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i className="ti-yahoo" /> ti-yahoo
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i className="ti-trello" /> ti-trello
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i
								        className="ti-stack-overflow"
							        /> ti-stack-overflow
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i
								        className="ti-soundcloud"
							        /> ti-soundcloud
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i
								        className="ti-sharethis"
							        /> ti-sharethis
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i
								        className="ti-sharethis-alt"
							        /> ti-sharethis-alt
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i className="ti-reddit" /> ti-reddit
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i
								        className="ti-microsoft"
							        /> ti-microsoft
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i
								        className="ti-microsoft-alt"
							        /> ti-microsoft-alt
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i className="ti-linux" /> ti-linux
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i
								        className="ti-jsfiddle"
							        /> ti-jsfiddle
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i className="ti-joomla" /> ti-joomla
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i className="ti-html5" /> ti-html5
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i className="ti-css3" /> ti-css3
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i className="ti-drupal" /> ti-drupal
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i
								        className="ti-wordpress"
							        /> ti-wordpress
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i className="ti-tumblr" /> ti-tumblr
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i
								        className="ti-tumblr-alt"
							        /> ti-tumblr-alt
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i className="ti-skype" /> ti-skype
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i
								        className="ti-youtube"
							        /> ti-youtube
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i className="ti-vimeo" /> ti-vimeo
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i
								        className="ti-vimeo-alt"
							        /> ti-vimeo-alt
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i
								        className="ti-twitter"
							        /> ti-twitter
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i
								        className="ti-twitter-alt"
							        /> ti-twitter-alt
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i
								        className="ti-linkedin"
							        /> ti-linkedin
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i
								        className="ti-pinterest"
							        /> ti-pinterest
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i
								        className="ti-pinterest-alt"
							        /> ti-pinterest-alt
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i
								        className="ti-themify-logo"
							        /> ti-themify-logo
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i
								        className="ti-themify-favicon"
							        /> ti-themify-favicon
							        </div>
							        <div className="col-sm-6 col-md-4 col-lg-3"><i
								        className="ti-themify-favicon-alt"
							        /> ti-themify-favicon-alt
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

export default ThemifyComponent;
