import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  constructor(props){
    super(props);
    this.state = [
      {word1:``},
      {word2:``},
      {word3:``},
      {word4:``},
      {showing: false}
    
     
    
    ]
  }
  word1Change = (event) => {
    let word1Value = event.target.value;
    this.setState({word1:word1Value})
  }
  word2Change = (event) => {
    let word2Value = event.target.value;
    this.setState({word2:word2Value})
  }
  word3Change = (event) => {
    let word3Value = event.target.value;
    this.setState({word3:word3Value})
  }
  word4Change = (event) => {
    let word1Value = event.target.value;
    this.setState({word4:word1Value})
  }
 
  


  render() {
   
   
    return (
      <div className="App">
      <div className='title'>
      MAD LIB

      </div>

      <div className='word1'>
     Name1:<input onInput = {this.word1Change}></input>
      </div>
      <div className='word2'>
     Course:<input onInput = {this.word2Change}></input>
      </div>
      <div className='word3'>
      Name2:<input onInput = {this.word3Change}></input>
      </div>
      <div className='word4'>
     Grade:<input onInput = {this.word4Change}></input>
      </div>
      
      <div className='button'>
                <button onClick={() => this.setState({ showing: !this.state.showing })}>Show my story</button>
                </div>
                <div className='story'>
                { this.state.showing ? <div>{this.state.word1} is a freshman in NYUshanghai. He/She attends {this.state.word2} this semester and he/she is totally lost. He/She wants to figure out the key concepts with his/her friend {this.state.word3}, but he/she finds both of them do not really understand the concepts. {this.state.word1} works day and night on {this.state.word2} and finally he/she gets {this.state.word4}</div> : null}
            </div>  
      
       </div>
    );
  }
}

export default App;
