/**
 Mr : Dang Xuan Truong
 Email: truongdx@runsystem.net
 */

import LoginContainer from '../containers/Default/Login';

import HomeContainer from '../containers/Admin/Home';
import UsersContainer from '../containers/Admin/Users';
import FlagIconsContainer from '../containers/Admin/Icons/Flag';
import MdiIconsContainer from '../containers/Admin/Icons/Mdi';
import FontAwesomeIconsContainer from '../containers/Admin/Icons/FontAwesome';
import SimpleLineIconsContainer from '../containers/Admin/Icons/SimpleLine';
import ThemifyContainer from '../containers/Admin/Icons/Themify';

export const ROUTES = [
    {
        id: 1,
        pathRoute: '/',
        name: 'Trang đăng nhập',
        exact: true,
        component: LoginContainer,
    },
];

export const ADMIN_ROUTES = [
    {
        id: 1,
	    pathRoute: '/admin',
        name: 'Trang quản trị',
        exact: true,
        component: HomeContainer,
    },
    {
	    id: 2,
	    pathRoute: '/admin/users',
        name: 'Quản lý nhân viên',
        exact: true,
        component: UsersContainer,
    },
    {
        id: 3,
        pathRoute: '/admin/icons/flag',
        name: 'Flag Icons',
        exact: true,
        component: FlagIconsContainer,
    },
    {
        id: 4,
        pathRoute: '/admin/icons/mdi',
        name: 'Mdi Icons',
        exact: true,
        component: MdiIconsContainer,
    }, {
        id: 5,
        pathRoute: '/admin/icons/font-awesome',
        name: 'Font Awesome',
        exact: true,
        component: FontAwesomeIconsContainer,
    },
    {
        id: 6,
        pathRoute: '/admin/icons/simple-line',
        name: 'Simple line',
        exact: true,
        component: SimpleLineIconsContainer,
    },
    {
        id: 7,
        pathRoute: '/admin/icons/themify',
        name: 'Themify icon',
        exact: true,
        component: ThemifyContainer,
    },

];
