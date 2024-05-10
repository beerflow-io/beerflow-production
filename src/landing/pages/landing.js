import NavBar from '../components/navBar';
import BetaRegistration from '../components/betaRegistration';
import Headline from '../components/headline';

function LandingPage() {
    return ( 
        <>
        <div className="landing-main">
            <NavBar />
            <Headline />
            <BetaRegistration />
        </div>
            
            
        </>
     );
}

export default LandingPage;