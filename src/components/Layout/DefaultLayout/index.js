import  Header  from '../DefaultLayout/Header/index';
import  Slidebar  from '../DefaultLayout/Slidebar/index';

function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div className="container">
                <Slidebar />
                <div className="content">{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
