import React from 'react'
import john from './images/john-doe.png'
import './About.css'


function About() {
    return (
        <div className='about' id='about'>
            <div className='container'>
                <img src={john} alt="john" />
                <div className='col-2'>
                    <h2>About</h2>
                    <span className='line'></span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis consequuntur nisi eum commodi vel libero suscipit.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    <button className='button'>Explore More</button>
                </div>
            </div>

        </div>
    )
}

export default About
