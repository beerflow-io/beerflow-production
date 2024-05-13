import { Link } from 'react-router-dom';
import { FaPlus } from "react-icons/fa";
import { HiOutlineCog6Tooth } from "react-icons/hi2";
import { formattedToday } from '../functions/getToday';

function DashboardTopNav() {

    function helloAction() {
        window.alert('Hello Action Button!')
    };

    function helloSettings() {
        window.alert('Hello Settings Button!')
    };

    return ( 
        <>
            <div className="flex justify-between w-screen p-2 bg-white shadow-md h-[6%] items-center min-h-[60px]">
            <div className="opacity-100">
                <Link to="/dashboard"><h1 className="text-4xl font-bold beerflow-gradient-text">beerflow.io</h1></Link>
            </div>
            
            <div className="flex items-center gap-4 mr-4 cursor-pointer">
                <div className="w-[40%]">
                <Link to="/"><button className="p-2 green-gradient-background shadow rounded-xl w-[100%]">Landing</button></Link>
                </div>
                <h1>|</h1>
                <FaPlus onClick={helloAction}/>
                <HiOutlineCog6Tooth onClick={helloSettings}/>
                <Link to="/about"><h2 className="text-lg font-bold text-black">Demo</h2></Link>
            </div>
        </div>
        </>
     );
}

export default DashboardTopNav;