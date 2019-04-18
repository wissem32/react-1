import React ,{ Component } from 'react';
import '../App.css';
import '../index.css';
//import lion from './lion.jpg' ;
class Chekpoint extends Component {
    render() { 
        
       if( this.props.sex==="f")
       {
      /*  const mystyle ={
            fontSize:40,
                }   */        
                      
            
                
    
        return (
            <div className="checkpoint-f"  >
           <center> <img  src={this.props.logo} className="image-f"/>
            <p><i>nom: {this.props.name}</i></p> 
           
            <p>seconde: {this.props.secondename}</p>
            </center>
            </div>
        );
        }
        else {
            return (
                <div className="checkpoint-m"  >
               <center> <img  src={this.props.logo} className="image-m"/>
                <p><i>nom: {this.props.name}</i></p> 
               
                <p>seconde: {this.props.secondename}</p>
                </center>
                </div>
            );
        }
        
    }
}
export default Chekpoint;