import { useState } from 'react'
import shapeTop from '../images/shape-1.png'
import shapeBottom from '../images/shape-2.png'
import Landingpage from './Landingpage'
import Questions from './Questions'

export default function Homepage(props){
    return (
        <>
        {
            props.pageStatus ? 
                <div className="quiz-header">
                    <h2>Quizzical</h2>
                    <button 
                        className="btn btn-primary"
                        onClick={props.changePage}
                    >
                        Start quiz
                    </button>
                </div>
            : 
             <Questions/>
        }
        </>
    )
}