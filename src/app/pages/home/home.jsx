
import Greeting from '../../components/home/greeting';
import Tasks from '../../components/home/tasks';
import Charts from '../../components/home/charts';

function HomePage() {
    return ( 
        <>
        <div className="flex flex-row h-[100%] w-[100%] gap-4">
            {/* Column 1 */}
            <div className="flex flex-col h-full w-[20%]">
                <Greeting />
                <Tasks />
            </div>
            {/* Column 2 */}
            <div className="flex flex-col h-full w-[80%]">
                <Charts />
            </div>
        </div>
       
        
        
        
        </>
     );
}

export default HomePage;