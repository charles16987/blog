
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
import vijay from "../images/download.jpg"
import vijay1 from "../images/FV1fvYUagAYksYh.jpg"



function Tweets() {
    let data = [
        {
          circleimg:tweetboximg1,
          name :"PMO India",
          nameid:"@PMOIndia",
          tweetimg:tweetboximgs,
          para:"KubeCon+CloudNativeCon is back! Join us in person in Detroit or virtually from October 24-28 and experience how #Teamcloudnative is bringing technology closer to the human experience through work, life and play. Register today!",
          like:"58",
          share:"300",
          heart:"256",
          tweetbtn:"32"

    
        },{
            circleimg:tweetboximg2,
            name :"M.K.Stalin",
            nameid:"@mkstalin",
            tweetimg:tweetboximgs1,
            para:"The #DravidianModel has led India's development & is shaping its future. I expect the fourth estate to play a crucial role in taking the success story of TN's inclusive policies to the rest of India, for them to emulate. I view the #CNNNews18TownHall Chennai as one such effort.",
            like:"70",
            share:"230",
            heart:"236",
            tweetbtn:"88"
        },
        {
            circleimg:vijay,
            name :"M.K.Stalin",
            nameid:"@mkstalin",
            tweetimg:vijay1,
            para:"The #DravidianModel has led India's development & is shaping its future. I expect the fourth estate to play a crucial role in taking the success story of TN's inclusive policies to the rest of India, for them to emulate. I view the #CNNNews18TownHall Chennai as one such effort.",
            like:"70",
            share:"230",
            heart:"236",
            tweetbtn:"88"
        }

      ]

  return (
    <div>
      
      {
        data.map(({name,nameid,circleimg,tweetimg,para,like,share,heart,tweetbtn})=> {
          return(

            <div className="tweetbox">
       <div className="tweetcontentheader">
        <BiMessageRoundedDetail className='tweetcontentheadericon'/>
        <div className="tweetheader">
          <p>Virtal Tweet . <span>See more</span></p>
          <GrClose className='tweetheadericons'/>
        </div>

       </div>
       <div className="tweetbody">
    <img src={circleimg} alt="" width="40px" height="40px" className='tweetboximg'/>
<div className="tweetbodyname1">
<div className="tweetbodyname">
          <p>{name}  <span>{nameid}</span> </p>
          
          <FiMoreHorizontal className='tweetheadericons'/>
        </div>

        <p>{para}</p>

        <img src={tweetimg} alt="" className='tweetboximgs' />

        <div className="tweeticons">
          <span> <FaRegComments className='tweeticons1'/> {like}</span>
          <span><AiOutlineRetweet className='tweeticons1'/> {tweetbtn}</span>
          <span><HiOutlineHeart className='tweeticons1'/> {heart}</span>
          <span><FiShare className='tweeticons1'/> {share}</span>
        </div>
</div>
       </div>
       </div>
            
          )
        })
       }
    </div>
  )
}

export default Tweets
