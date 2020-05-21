import Dashboard from 'views/Dashboard.jsx';
import Notifications from 'views/Notifications.jsx';
import Icons from 'views/Icons.jsx';
import Typography from 'views/Typography.jsx';
import TableList from 'views/Tables.jsx';
import Maps from 'views/Map.jsx';
import UserPage from 'views/User.jsx';

var routes = [
	{
		path: '/dashboard',
		name: 'Dashboard',
		icon: 'nc-icon nc-bank',
		component: Dashboard,
		layout: '/user',
	},
	{
		path: '/icons',
		name: 'Icons',
		icon: 'nc-icon nc-diamond',
		component: Icons,
		layout: '/user',
	},
	{
		path: '/maps',
		name: 'Maps',
		icon: 'nc-icon nc-pin-3',
		component: Maps,
		layout: '/user',
	},
	{
		path: '/notifications',
		name: 'Notifications',
		icon: 'nc-icon nc-bell-55',
		component: Notifications,
		layout: '/user',
	},
	{
		path: '/user-page',
		name: 'User Profile',
		icon: 'nc-icon nc-single-02',
		component: UserPage,
		layout: '/user',
	},
	{
		path: '/tables',
		name: 'Table List',
		icon: 'nc-icon nc-tile-56',
		component: TableList,
		layout: '/user',
	},
	{
		path: '/typography',
		name: 'Typography',
		icon: 'nc-icon nc-caps-small',
		component: Typography,
		layout: '/user',
	},
];
export default routes;
