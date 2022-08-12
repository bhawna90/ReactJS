import logo from './logo.svg';
import './App.css';
import ToggleComponent from './Components/ToggleComponent';
import DigitalClock from './Components/DigitalClock';
import React from 'react';
import UncontrolledCompExample from './Components/UncontrolledCompExample';
import InputField from './Components/InputField';

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
  }

  handleSubmit(){

  }
  handleChange(e){
    this.setState({values:{...this.state.values, [e.target.name] :e.target.value}})
  }
  render(){
    const inputs=[
      {type:"text",placeholder:"username",name:"username",required :true, errorMsg:"Username should be any alphanumeric character with min char 3 and max char 12", pattern:"^[A-Za-z0-9]{3,12}$"},
      {type:"email",placeholder:"email",name:"email",errorMsg:"Should be a valid email"},
      {type:"text",placeholder:"password",name:"password",errorMsg:"It should contain 1 letter, 1 number and 1 special character. Enter 8-20 characters.", pattern:"^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$"},
      {type:"text",placeholder:"confirmPassword",name:"confirmPassword",errorMsg:"This should match the password", pattern:this.state.values.password}

    ]
    return (
      <div className="App">
        {/* <ToggleComponent></ToggleComponent>
        <DigitalClock></DigitalClock> */}
       {/* <UncontrolledCompExample></UncontrolledCompExample> */}
       <form onSubmit={this.handleSubmit}>
        <div className='inputFields'>
        {
          inputs.map(input=>{
              return <InputField {...input} handleChange={this.handleChange} value={this.state.values[input.name]}></InputField>}
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
