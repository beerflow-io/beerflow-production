import { Link } from 'react-router-dom';


import { ImHome3 } from "react-icons/im";
import { BsCalendarDate, BsJournals } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { GiCellarBarrels, GiBeerBottle } from "react-icons/gi"
import { FaTruckMoving, FaMicroscope } from "react-icons/fa";
import { GoTools } from "react-icons/go";
import { SlPeople } from "react-icons/sl"
import { MdOutlineWarehouse } from "react-icons/md";
import { GiRadarSweep } from "react-icons/gi";
import { LiaStoreAltSolid, LiaExclamationTriangleSolid } from "react-icons/lia";
import { PiTagThin, PiVaultLight } from "react-icons/pi";
import { TbBriefcase, TbFileDollar, TbBuildingFactory, TbBeer, TbArrowBigRightFilled } from "react-icons/tb";
import { GrPersonalComputer } from "react-icons/gr";
import { MdComputer } from "react-icons/md";

function SideNav() {

    return ( 
        <>
        <div className="h-[94%] w-[6%] green-gradient-background shadow-lg flex-col flex min-w-[110px]">
            <Link to="home">
                <div className="w-full icon-row">
                    <ImHome3 />
                    <h1 className="text-white">Home</h1>
                </div>
            </Link>
            <Link to="schedule">
                <div className="w-full icon-row">
                    <BsCalendarDate />
                    <h1 className="text-white">Schedule</h1>
                </div>
            </Link>
            <Link to="cellar">
                <div className="w-full icon-row">
                    <GiCellarBarrels />
                    <h1 className="text-white">Cellar</h1>
                </div>
            </Link>
        </div>
        </>
     );
}

export default SideNav;