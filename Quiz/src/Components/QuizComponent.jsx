import React from 'react'
import './Quiz.css'
import quizQuestion from '../resources/quizQuestion'

export default class Quiz extends React.Component{
    constructor(){
        super()
        this.state = {
           currentQues : 0
        }
        
    }  
    HandlePre = ()=>{
   
        if(this.state.currentQues==0){
            this.setState({currentQues:quizQuestion.length-1})
        }
        else{
            this.setState({currentQues:this.state.currentQues-1})
        }
        
    } 
    HandleNext = ()=>{
        
        if(this.state.currentQues==14){
            this.setState({currentQues:0})
        }
        else{
            this.setState({currentQues:this.state.currentQues+1})
        }
    }

    HandleQuit = ()=>{
        window.confirm("Are you sure you want to quit ?")
    }
    render(){

        
        return(
            <>
            <div className="container">
                <h1 className='ques'>Question</h1>
                <div className="NoOfQues"><span>{this.state.currentQues+1} </span>of 15</div>
                <p>{quizQuestion[this.state.currentQues].question}</p>

                <div className="options">

                    <button className='option'>{quizQuestion[this.state.currentQues].optionA}</button>
                    <button className='option'>{quizQuestion[this.state.currentQues].optionB}</button>
                    <button className='option'>{quizQuestion[this.state.currentQues].optionC}</button>
                    <button className='option'>{quizQuestion[this.state.currentQues].optionD}</button>
                </div>
                <div className="lastBtns">
                    <button id='pre' className='btn' onClick={ this.HandlePre} >Previous</button>
                    <button id='next' className='btn' onClick={this.HandleNext}>Next</button>
                    <button id='quit' className='btn' onClick={this.HandleQuit}>Quit</button>
                </div>
            </div>
            </>
        )
    }
}