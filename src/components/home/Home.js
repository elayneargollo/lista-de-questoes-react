import React, { Component } from "react";
import PlanoDeFundo from './images/fundo.webp';

export default class IMC extends Component {
    render() {
        return (
          <div>
             <img 
                src={PlanoDeFundo} 
                style={{
                    width: '100%',
                    height: '100%',
                  }}>
            </img>
          </div>
        );
    }
}