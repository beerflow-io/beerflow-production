import { Rnd } from 'react-rnd';

function Tasks() {
    return ( 
        <>
        <div className="relative border rounded-lg h-full w-[100%] shadow mt-8 overflow-hidden flex-col flex">
            <div className="flex flex-row items-center justify-between w-full p-2 border">
                <h1 className="font-extrabold">Your Tasks</h1>
                <button className="pl-2 pr-2 text-white bg-blue-500 border-b rounded-lg shadow-lg">Add</button>
            </div>
            {/* Draggable Space */}
            <div className="flex flex-col justify-center w-full h-full">
            {/* Task Item */}
                <Rnd
                bounds="parent"
                className="absolute flex w-full mt-2 border rounded-lg"
                >
                {/* <div className="absolute flex items-center justify-between w-full border cursor-pointer"> */}
                <div className="min-w-[346px] ">
                    <div className="flex items-center justify-between p-2 ">
                        <input type="checkbox" />
                        <h1 className="">Brew New IPA</h1>
                    </div>
                    <div className="flex items-center justify-between p-2">
                        <h1>May 23</h1>
                    </div>
                </div>
                    
                {/* </div> */}
                </Rnd>
            </div>
   
        </div>
        </>
     );
}

export default Tasks;