import React from 'react'
import './Result.css'

export default class Result extends React.Component{
    render(){
        return(
            <>
            <h1 >Result</h1>
            <div className="cont">
                <h3 className='phrase'>You need more practice!</h3>
                <h1 className='Scorephrase'> Your score is 20%</h1>
                <div className="div1">
                    <span>Total number of questions</span> <span>15</span>
                </div>
                <div className="div1">
                    <span>Number of attempted questions</span> <span>9</span>
                </div>
                <div className="div1">
                    <span>Number of correct answers</span> <span>3</span>
                </div>
                <div className="div1">
                    <span>Number of wrong answers</span> <span>6</span>
                </div>
            </div>

            <div className="Btns">
                <button id='play'>Play Again</button>
                <button id='back'>Back to Home</button>
            </div>
            </>
        )
    }
}