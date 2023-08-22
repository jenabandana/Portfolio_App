import React, { Component } from 'react'
import './HeroimgprojectStyle.css'

class Heroimgproject extends Component {
  render () {
    return (
        <div className='hero-project-img'>
            <div className='heading'>
                <h1>{this.props.heading}</h1>
                <p>{this.props.text}</p>
            </div>
        </div>
      )
  }
}

export default Heroimgproject