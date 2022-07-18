import React, { Component } from "react";

class ClassComponent extends Component {
  render() {
    const {name, gender} = this.props
    return (
    <h1>{name} : {gender}
    </h1>
    )
  }
}

export default ClassComponent