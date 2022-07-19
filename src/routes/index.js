//Dùng khi không yêu cầu đăng nhập 
//nhưng vẫn xem được
import Home from '../pages/Home/index';
import Following from '../pages/Following/index'
import Profile from '../pages/Profile/index';
import Upload from '../pages/Upload/index';
import HeaderOnly from '../components/Layout/HeaderOnly/index';


const publicRoutes = [
    {
        path:'/' ,
        component: Home
    },
    {
        path:'/following' ,
        component: Following
    },
    {
        path:'/profile' ,
        component: Profile
    },
    {
        path:'/upload' ,
        component: Upload,
        layout: HeaderOnly
    }
];

//Dùng khi bắt buộc đăng nhập
//Nếu không đăng nhập sẽ redirect về trang login
const privateRoutes = [

];

export {publicRoutes, privateRoutes}