import React, { Component } from 'react'

class EventBind extends Component {
  constructor(){
    super()
    this.state = {
      message: "hello"
    }

    // this.clickHandler = this.clickHandler.bind(this)
  }

  // clickHandler(){
  //   this.setState({
  //     message: "hello everyone"
  //   })
  // }

  clickHandler = () => {
    this.setState({
      message: "hello everyone"
    })
  }

  render() {
    return (
      <div> {this.state.message}
      {/* <button onClick={this.clickHandler.bind(this)}>Messag1</button> */}
      {/* <button onClick={()=> this.clickHandler()}>Messag2</button>*/}
      <button onClick={this.clickHandler}>Messag2</button> 
      </div>
    )
  }
  
}

export default EventBind