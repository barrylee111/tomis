import React, { Component } from 'react';
import Unit from './components/Unit';
import Total from './components/Total';
import Input from './components/Input';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state={
      number: 0
    }
  }

  onInputChange = (event) => {
    this.setState({number: event.target.value});
    console.log(this.state.number);
  }
  
  render(){

    document.body.style.backgroundColor="#E0F4F4";

    return (
      <div className="position-center">
        <div style={{background: "#2B3030"}} 
          className="shadow-5 flex justify-between ml6 mr6 pt5 pb5">
          
            <Unit />
            
            <Input 
               onInputChange={this.onInputChange}
            />
            
          {/*<Increment />
          
          <Decrement />*/}
         
            <Total 
              number={this.state.number}
            />
          
        </div>
      </div>  
    );
  }
}

export default App;
