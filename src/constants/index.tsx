/**
 Mr : Dang Xuan Truong
 Email: truongdx@runsystem.net
 */

import LoginContainer from '../containers/Default/Login';

import HomeContainer from '../containers/Admin/Home';
import UsersContainer from '../containers/Admin/Users';
import FlagIconsContainer from '../containers/Admin/Icons/FlagIcons';
import MdiIconsContainer from '../containers/Admin/Icons/MdiIcons';
import FontAwesomeIconsContainer from '../containers/Admin/Icons/FontAwesomeIcons';

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
        exact: false,
        component: UsersContainer,
    },
    {
        id: 3,
        pathRoute: '/admin/icons/flag',
        name: 'Flag Icons',
        exact: false,
        component: FlagIconsContainer,
    },
    {
        id: 4,
        pathRoute: '/admin/icons/mdi',
        name: 'Mdi Icons',
        exact: false,
        component: MdiIconsContainer,
    }, {
        id: 5,
        pathRoute: '/admin/icons/font-awesome',
        name: 'Font Awesome',
        exact: false,
        component: FontAwesomeIconsContainer,
    },
];
