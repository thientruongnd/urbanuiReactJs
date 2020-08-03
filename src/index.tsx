/**
Mr : Dang Xuan Truong
Email: truongdx@runsystem.net
*/

import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./containers/App/App";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./public/css/test.css";
import "./public/css/typicons.css";
import "./public/css/vendor.bundle.base.css";
import "./public/css/style.css"
import 'jquery';
import 'bootstrap/dist/js/bootstrap';
import './public/js/vendor.bundle.base.js';
import './public/js/off-canvas.js';
import './public/js/hoverable-collapse.js';
import './public/js/template.js';
import './public/js/settings.js';
import './public/js/todolist.js';
import './public/js/Chart.min.js';
import './public/js/chart.js';
const ROOT = document.getElementById('root');
ReactDOM.render(<App />, ROOT);
