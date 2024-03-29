import React, { Component } from 'react'
import ChildComponent from './ChildComponent';

export class ParentComponent extends Component {
  
  constructor(props){
    super(props)
    this.state = {
      name: 'parent'
    }

    this.greetParent = this.greetParent.bind(this)
  }

  greetParent(childName){
   alert(`hello ${this.state.name} from ${childName}`)
  }
  render() {
    return (
      <div><ChildComponent greetHandler = {this.greetParent}/></div>
    )
  }
}


export default ParentComponent