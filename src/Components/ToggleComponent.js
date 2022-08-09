import React from "react"

class ToggleComponent extends React.Component{
    constructor(props){
        super(props)
        this.state={
            buttonState: true,
            arr:[1,2,3]
        }
        this.handleClick=this.handleClick.bind(this);
    }
    handleClick(){
        this.setState((prevProps)=>({buttonState:!prevProps.buttonState}))
    }
    handleClickForArray(i){
        console.log("index of button clicked:",i)
    }
    render(){
        return (
            <React.Fragment>
                <button onClick={this.handleClick}>
                    {this.state.buttonState?"OFF":"ON"}
                </button>
                {
                    this.state.arr.map((val,i)=>{
                        return <button onClick={this.handleClickForArray.bind(this,i)}>Button{val}</button>
                    })
                }
            </React.Fragment>
        )
    }
}

export default ToggleComponent;
