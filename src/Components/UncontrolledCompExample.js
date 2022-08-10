import React from 'react';

class UncontrolledCompExample extends React.Component {
  constructor(){
    super()
    this.state={
      // value:""
    }
    this.value=React.createRef()
    this.handleChange=this.handleChange.bind(this)
    this.handleSubmit=this.handleSubmit.bind(this)
  }
  handleChange(event){
    console.log(event.target.value)
    this.setState({value:event.target.value})
  }
  handleSubmit(e){
    console.log(this.value)
    console.log(this.value.current.value)
    e.preventDefault();
  }
  render(){
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <input type="text" ref={this.value}></input>
        </form>
      </div>
    );

  }
}

export default UncontrolledCompExample;
