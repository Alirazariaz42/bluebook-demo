import React from 'react'
import Card from './Card/Card'
import Heading from './Headings/Heading'
import Navigation from './Navigation/Navigation'
import Navigate from './Navigate'

const Services = () => {

    let service=[
        {Title:`Cost Estimation  ( Labour and material )`, ImagePath: require('../Images/1.png')},
        {Title:"Quantities & Materials Takeoffs ", ImagePath: require('../Images/2.png')},
        {Title:"Construction Work Schedules", ImagePath: require('../Images/3.png')},
      ];
      
      let Trades=[
        {Title:"General Requirement", ImagePath: require('../Images/4.png')},
        {Title:"Site Constructionn ", ImagePath: require('../Images/5.png')},
        {Title:"Concrete", ImagePath: require('../Images/6.png')},
        {Title:"Masonry", ImagePath: require('../Images/7.png')},
        {Title:"Metals", ImagePath: require('../Images/8.png')},
        {Title:"Wood & Plastics", ImagePath: require('../Images/9.png')},
        {Title:"Thermal and Moisture Protection", ImagePath: require('../Images/10.png')},
        {Title:"Doors and Windows ", ImagePath: require('../Images/11.png')},
        {Title:"Finishes", ImagePath: require('../Images/12.png')},
        {Title:"Specialties", ImagePath: require('../Images/13.png')},
        {Title:"Equipment ", ImagePath: require('../Images/14.png')},
        {Title:"Furnishings", ImagePath: require('../Images/15.png')},
        {Title:"Special Construction", ImagePath: require('../Images/16.png')},
        {Title:"Conveying Systems", ImagePath: require('../Images/17.png')},
        {Title:"Mechanical", ImagePath: require('../Images/18.png')},
        {Title:"Electrical", ImagePath: require('../Images/19.png')},
        {Title:"Plumbing", ImagePath: require('../Images/20.png')},
        {Title:"HVAC ", ImagePath: require('../Images/21.png')},
      ]

  return (
    <React.Fragment>
    
  <div className='container'>
  <Heading className="pt-4 pb-4"> Services </Heading>
    <div className='row'>
    {
      service.map((array)=>(
        <Card className='col-lg-4' data={array}></Card>  
      ))
    }
  </div>
  <Heading className="pt-4 pb-4"> Our Trades </Heading>
    <div className='row'>
    {
      Trades.map((array)=>(
        <Card className='col-lg-4' data={array}></Card>  
      ))
    }
  </div>
  </div>
   
</React.Fragment>
  )
}

export default Services
