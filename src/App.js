import logo from './logo.svg';
import './App.css';
import ToggleComponent from './Components/ToggleComponent';
import DigitalClock from './Components/DigitalClock';
import React from 'react';
import UncontrolledCompExample from './Components/UncontrolledCompExample';

class App extends React.Component {
  constructor(){
    super()
    this.state={
      values:{
        username:"",
        email:"",
        password:"",
        confirmPassword:""
      }
      
    }
    this.handleSubmit=this.handleSubmit.bind(this);
    this.handleChange=this.handleChange.bind(this)
    this.inputs=[
      {type:"text",placeholder:"username",name:"username",errorMsg:"Username should be any alphanumeric character with min char 3 and max char 12"},
      {type:"email",placeholder:"email",name:"email",errorMsg:"Should be a valid email"},
      {type:"text",placeholder:"password",name:"password",errorMsg:"It should contain 1 letter, 1 number and 1 special character."},
      {type:"text",placeholder:"confirmPassword",name:"confirmPassword",errorMsg:"This should match the password"}

    ]
  }

  handleSubmit(){

  }
  handleChange(e, input){
    console.log(e, input)
    this.setState({values:{...this.state.values, [input.name] :e.target.value}})
  }
  render(){
    return (
      <div className="App">
        {/* <ToggleComponent></ToggleComponent>
        <DigitalClock></DigitalClock> */}
       {/* <UncontrolledCompExample></UncontrolledCompExample> */}
       <form onSubmit={this.handleSubmit}>
        <div className='inputFields'>
        {
          this.inputs.map(input=>
            <div>
              <input type={input.type} value={this.state[input.name]} placeholder={input.placeholder} onChange={(e)=>this.handleChange(e,input)} required></input>
              <span>{input.errorMsg}</span>
            </div>
            )
        }
        </div>
          {/* <input type="text" placeholder='username' value={this.state.username} onChange={this.handleChange}></input><br></br>
          <input type="text" placeholder='email' value={this.state.email}></input><br></br>
          <input type="text" placeholder='password' value={this.state.password}></input><br></br>
          <input type="text" placeholder='confirm password' value={this.state.confirmPassword}></input><br></br> */}
          <button>Submit</button>
       </form>
      </div>
    );

  }
}

export default App;
