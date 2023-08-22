import React from 'react'
import './WorkcardStyle.css'
import { NavLink } from 'react-router-dom'
import Workcard from './Workcard'
import WorkcardData from './WorkcardData'

const Work = () => {
  return (
    <>
    <div className='work-container'>
        <h1 className='project-heading'>Projects</h1>
        <div className='project-container'>
           {
            WorkcardData.map((value , index)=> {
                return (
                    <Workcard 
                       key={index}
                       imgsrc ={value.imgsrc}
                       title ={value.title}
                       text ={value.text}
                       view ={value.view}
                    />
                )
            })
           }
        </div>
    </div>
    </>
  )
}

export default Work