import { Component } from "react";

class Students extends Component {
    render() {
        return (
          <>
            <h1>hello {this.props.nameClass}</h1>
          </>
        );
      }
}

export default Students;