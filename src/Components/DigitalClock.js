import React from "react"

export default class DigitalClock extends React.Component{
    constructor(){
        super()
        this.state={
            time: new Date()
        }
    }
    componentDidMount(){
        this.interval = setInterval(()=>this.setState({time:new Date()}),1000)
    }
    componentWillUnmount(){
        clearInterval(this.interval)
    }
    render(){
        return (
            <div>
                {this.state.time.toLocaleTimeString()}
            </div>
        )
    }
}