import {FiMoreHorizontal} from "react-icons/fi";
import {GrTwitter} from "react-icons/gr";
import {RiHome7Fill} from "react-icons/ri";
import {HiHashtag} from "react-icons/hi";
import {GrNotification} from "react-icons/gr";
import {BiMessageDetail} from "react-icons/bi";
import {CgProfile} from "react-icons/cg";
import {CgMoreO} from "react-icons/cg";
import Idlogo from '../images/pexels-yogendra-singh-1630777.jpg'


const Navbar = () => {
  return (
    <div>
       <div className="nav-bg">
        <nav>
            <div className="logo">
                <GrTwitter size={'2rem'}  className={'logoicon'}/>
            </div>

            <ul>
                <li> <RiHome7Fill className="iconsnav"/><a href="#" className="active">Home</a></li>
                <li><HiHashtag className="iconsnav"/><a href="#">Explore</a></li>
                <li><GrNotification className="iconsnav"/><a href="#">Notifications</a></li>
                <li><BiMessageDetail className="iconsnav"/><a href="#">Message</a></li>
                <li><CgProfile className="iconsnav"/><a href="#">Profile</a></li>
                <li><CgMoreO className="iconsnav"/><a href="#">More</a></li>
            </ul>

            <div >
            <button className="btn">Tweet</button>
            </div>


            <div className="idbox">

                <img className="idimg" src={Idlogo} alt="" />

                <div>
                    <p>Charles</p>
                    <p>@charlie5649499</p>
                </div>
                <FiMoreHorizontal className="idicons" />





            </div>

           

        </nav>
       </div>
      
    </div>
  )
}

export default Navbar
