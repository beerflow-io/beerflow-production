import DashboardTopNav from '../components/topNav';
import SideNav from '../components/sideNav';

function Layout({ children }) {
    return (
        <>
            <div className="dashboard-main">
                <DashboardTopNav />
                <SideNav />
                <div className="dashboard-content">
                    {children}
                </div>
            </div>
        </>
     );
}

export default Layout;