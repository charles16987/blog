import Idlogo from '../images/pexels-yogendra-singh-1630777.jpg'
import {BsStars} from "react-icons/bs"
import {BiWorld,BiPoll,BiMessageRoundedDetail} from "react-icons/bi"
import {BsChevronDown} from "react-icons/bs"
import {GoFileMedia,GoLocation} from "react-icons/go"
import {AiOutlineFileGif,AiOutlineRetweet} from "react-icons/ai"
import {GrEmoji,GrClose} from "react-icons/gr"
import {AiOutlineSchedule} from "react-icons/ai"
import {FiMoreHorizontal,FiShare} from "react-icons/fi"
import {FaRegComments} from "react-icons/fa"
import {HiOutlineHeart} from "react-icons/hi"
import tweetboximg from "../images/pexels-ali-pazani-2681751.jpg"
import tweetboximgs from "../images/FdlhxySUUAA6WgH.jpg"
import tweetboximg1 from "../images/PTI09_10_2022_000168A.jpg"
import tweetboximg2 from "../images/PTI05_28_2022_000218A.jpg"
import tweetboximgs1 from "../images/FdmGYMBUoAA4YY-.jpg"
import Tweets from './Tweets'



const Centercontent = () => {
  
  return (
    <div className='centercontainer'>

      <div className="centercontainer1">
      <div className="center-content-hearder">
        <h2>Home</h2>
        <BsStars className='heardericon'/>
       </div>

       <div className="inputcontent">
       <img className="idimg" src={Idlogo} alt="" />
       <div className='inputcontent1'>
        <div className="inputpara">
          <p>Everyone <BsChevronDown className='inputparaicon'/></p>
        </div>
        <div className="inputpara1">
          <input type="text" placeholder="What's Happening?" />
        </div>

        <div className='inputpara2'>
          <p><BiWorld className='inputparaicon1'/> Everyone can replay</p>

        </div>

        <div className='inputpara3'>
          <div className="inputpara3icon">
            <GoFileMedia />
            <AiOutlineFileGif/>
            <BiPoll />
            <GrEmoji/>
            <AiOutlineSchedule/>
            <GoLocation/>
          </div>

          <div className="inputpara3btn">
            <button>Tweet</button>
          </div>

        </div>

       </div>
       </div>

       <div className="showtweet">
        <p>Show 83 Tweet's</p>
       </div>

       <Tweets/>


      </div>
    </div>
  )
}

export default Centercontent
