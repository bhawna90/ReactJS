import React from "react"
import './InputField.css';

export default class InputField extends React.Component{
    constructor(props){
        super(props);
        this.state={
            focused:false
        }
        this.handleBlur=this.handleBlur.bind(this)
    }


    handleBlur(){
        this.setState({focused:true})
    }
    render(){
        const {errorMsg, handleChange, ...inputProps} = this.props
        return(
            <div>
              <input {...inputProps} required onBlur={this.handleBlur} focused={this.state.focused.toString()} onChange={handleChange}></input>
              <span className="errorMsg">{errorMsg}</span>
            </div>
        )
    }
}