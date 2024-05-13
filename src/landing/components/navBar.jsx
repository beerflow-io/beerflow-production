import { Link, useNavigate } from 'react-router-dom';

function NavBar() {

    const navigate = useNavigate();

    function simulateLogin() {
        navigate('/redirect');
    }

    return ( 
        <>
        <div className="flex justify-between w-screen p-2 bg-white shadow-lg h-[6%] items-center min-h-[50px]">
            <div className="opacity-100">
                <Link to="/"><h1 className="text-4xl font-bold beerflow-gradient-text">beerflow.io</h1></Link>
            </div>
            <div className="w-[20%]">
                <button onClick={simulateLogin} className="p-2 border beerflow-gradient-text shadow rounded-xl w-[100%]">APP</button>
            </div>
            <div className="flex items-center gap-4 mr-4">
                <Link to="/about"><h2 className="text-lg font-bold text-black">About</h2></Link>
            </div>
        </div>
        </>
     );
}

export default NavBar;