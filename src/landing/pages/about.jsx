import NavBar from '../components/navBar';
import BetaRegistration from '../components/betaRegistration';
import Headline from '../components/headline';
import Footer from '../components/footer';

function AboutPage() {
    return ( 
        <>
            <div className="landing-main">
                <NavBar />
                <div className="flex justify-center w-full col">
                    <div className="w-1/3 p-2 mt-4 border rounded-lg shadow">
                        <h1 className="text-3xl font-bold text-center">The Tao of beerflow.io</h1>
                        <div>
                            <ol className="ml-4 list-decimal">
                                <li>Prioritize the user experience</li>
                                <li>Complexity under the hood</li>
                                <li>Software should support, not shine</li>
                                <li>Data inspires action</li>
                                <li>Community is the crux of craft brewing</li>
                            </ol>
                        </div>
                    </div>
                    
                    
                </div>
                <Footer />
            </div>  
        </>
     );
}

export default AboutPage;