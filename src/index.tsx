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
import 'bootstrap/dist/js/bootstrap.min';
import 'perfect-scrollbar/dist/perfect-scrollbar.min';
import './public/js/hoverable-collapse';
import './public/js/template';
import './public/js/settings';
import './public/js/todolist';
import './public/js/Chart.min';
import './public/js/chart';
const ROOT = document.getElementById('root');
ReactDOM.render(<App />, ROOT);
