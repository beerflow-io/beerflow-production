import { formattedToday } from '../../functions/getToday';
import { user } from '../../functions/getUser';

function Greeting() {
    return ( 
        <>
            <div className="p-2 rounded-lg w-[100%]">
                    <div className="flex flex-row">
                        <h1 className="text-xl font-bold">{formattedToday}</h1>
                    </div>
                    <div className="">
                        {/* <h1 className="text-xl font-bold">Hi, {user}!</h1> */}
                    </div>
                </div>
        </>
     );
}

export default Greeting;