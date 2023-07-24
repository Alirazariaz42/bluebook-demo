import React from 'react'
import style from './Card.module.css'
import checkbox from '../../Images/check.png'
const Card = (props) => {
    console.log(props.data)
  return (
    <React.Fragment>
        <div  className={`  text-center pt-4 pb-4 ${props.className} `}>
      <div  className={` card  `} style={{with:'80%', position:"relative"}} >
      <img src={checkbox} className={style.checkBok} height={90} width={90}  alt="Image" />
      <img src={(props.data.ImagePath)}  alt="Image" />
  <div className="card-body pb-4 " style={{backgroundColor:'#337AB7'}}>
    <h5 style={{color:"#9EE3F9"}} className="card-title pt-5 pb-1 ">{props.data.Title}</h5>
    <a href="#" style={{color:"#9EE3F9"}} >Read More</a>
  </div>
  </div>
</div>
    </React.Fragment>
  )
}

export default Card
