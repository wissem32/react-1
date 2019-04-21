import React, { Component } from 'react';
import '../App.css';
import '../index.css';
//import lion from './lion.jpg' ;
class Chekpoint extends Component {
    render() {
       // let co = "";
        let mystyle = {};
        
        if (this.props.sex === "f") {
            mystyle={
               borderColor:'yellow' ,
           }
        }
           else {
             mystyle={
                borderColor:'blue'
           }
        }
       /*     co = "yellow";
        } else {
            co = "blue";
        }*/

        return (
            <div className="checkpoint" style={mystyle}/*{{borderColor: co, height: he}}*/ >
                <center> <img src={this.props.logo} className="image-f" />
                    <p><i>nom: {this.props.name}</i></p>

                    <p>seconde: {this.props.secondename}</p>
                </center>
            </div>
        )

    
}
}
export default Chekpoint;