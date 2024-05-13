import NavBar from '../components/navBar';
import BeliefBox from '../components/beliefBox';
import BetaRegistration from '../components/betaRegistration';
import Headline from '../components/headline';
import Footer from '../components/footer';
import DashboardPhoto from '../images/Screenshot 2024-05-13 at 12.17.54 PM.png';
import DescriptionBlock from '../components/descriptionBlock';

function LandingPage() {
    return ( 
        <>
        <div className="landing-main">
            <NavBar />
            <BeliefBox />
            <Headline />
            <BetaRegistration />
            <img className="absolute border rounded-lg shadow-xl left-[10%] top-[25%] w-[40%]" src={DashboardPhoto} alt="" />
            <DescriptionBlock />
        </div>
            
            
        </>
     );
}

export default LandingPage;