import React, { Component } from 'react';
 
class Hello extends Component {
 
  componentWillUnmount() {
    if (this.props.display !== 'none') {
        alert('Thành phần này sẽ được ngắt kết nối');
    }
  }
 
  render() {
    return <h1>Hello Word!!!</h1>;
  }
}
 
export default Hello;