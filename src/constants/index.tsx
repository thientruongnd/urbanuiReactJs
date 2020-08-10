/**
 Mr : Dang Xuan Truong
 Email: truongdx@runsystem.net
 */

import LoginContainer from '../containers/Default/Login';

import HomeContainer from '../containers/Admin/Home';
import UsersContainer from '../containers/Admin/Users';

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
];
