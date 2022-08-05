//Dùng khi không yêu cầu đăng nhập 
//nhưng vẫn xem được
import Home from '../pages/Home/index';
import Following from '../pages/Following/index'
import Profile from '../pages/Profile/index';
import Upload from '../pages/Upload/index';
import HeaderOnly from '../components/Layout/HeaderOnly/index';
import routesConfig  from '../config/routes'
import Live from '../pages/Live/index';
const publicRoutes = [
    {
        path:routesConfig.home ,
        component: Home
    },
    {
        path:routesConfig.following ,
        component: Following
    },
    {
        path:routesConfig.profile ,
        component: Profile
    },
    {
        path:routesConfig.upload ,
        component: Upload,
        layout: HeaderOnly
    },
    {
        path:routesConfig.live ,
        component: Live,
    }
];

//Dùng khi bắt buộc đăng nhập
//Nếu không đăng nhập sẽ redirect về trang login
const privateRoutes = [

];

export {publicRoutes, privateRoutes}