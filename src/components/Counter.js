import React, { Component } from 'react'

export class Counter extends Component {
  constructor(){
    super()
    this.state = {
      count: 0
    }
  }

  Increment(){
    this.setState({
      count: this.state.count + 1
    })
    console.log(this.state.count);
  }

  render() {
    return (
      <div>
      Count - {this.state.count}<br/>
      <button onClick={()=> this.Increment()}>IncrementCount</button>
      </div>
    )
  }
  
}

export default Counter