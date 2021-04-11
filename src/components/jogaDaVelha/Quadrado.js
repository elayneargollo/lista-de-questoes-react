import React, { Component } from 'react';

class Quadrado extends React.Component {
    render() {
        return (
          <button
            className="square"
            onClick={() => this.props.onClick()}>
            {this.props.value}
          </button>
        );
      }
  }

  export default Quadrado;