import React from 'react'
import './Demo.css'

const Demo = () => {
    return (
        <div className='demo' id='demo'>
            <div className="container">
                <div className="col-1">
                    <p>More Than 100 Financial Planners</p>
                    <p>One Philosophy</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores assumenda illo tempora nam adipisci tenetur in inventore dolor? Consequuntur, repellat.</p>
                    <button className='button'> Get your free financial analysis</button>
                </div>
                <div className="col-2">
                    <iframe width='570' height='320' src="https://www.youtube.com/embed/oeqP5JtihMA" title='Youtube Video player' allowFullScreen frameborder="0" />
                </div>
            </div>
        </div>
    )
}

export default Demo