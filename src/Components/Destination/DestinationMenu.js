import "./Destination.css"
import React, { Component } from 'react'

export class DestinationMenu extends Component {
  render() {
    return (
        <div className={this.props.cName}>
            <div className='des-text'>
                <h2>{this.props.heading}</h2>
                <p>{this.props.text}</p>
            </div>
            <div className='image'>
                <img alt='one' className='img-one' src={this.props.img1}></img>
                <img alt='two' className='img-two'src={this.props.img2}></img>
            </div>
        </div>
    )
  }
}

export default DestinationMenu