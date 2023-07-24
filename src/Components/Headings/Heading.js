import React from 'react'
import style from './Heading.module.css'
const Heading = (props) => {
  return (
    <React.Fragment>
      <h3 className={`${style.headingStyle} ${props.className}`}> {props.children} </h3>
    </React.Fragment>
  )
}

export default Heading

