import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Chekpoint from './Chekpoint/Chekpoint.js';

class App extends Component {
  render() {
    return (
     <div>
        <div className="App">
           <header className="App-header">
              <center><h2>Equipe</h2></center>
           

              <Chekpoint sex="m" secondename="zuckerberg" logo="https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Mark_Zuckerberg_at_the_37th_G8_Summit_in_Deauville_018_v1.jpg/260px-Mark_Zuckerberg_at_the_37th_G8_Summit_in_Deauville_018_v1.jpg" name="mark"/>
              
        
          
               <Chekpoint sex="m" name="bill" secondename="gates"  logo="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Bill_Gates_2018.jpg/260px-Bill_Gates_2018.jpg" />
               
             
               <Chekpoint sex="m" name="fakher" secondename="fakfek" logo="https://www.espacemanager.com/sites/default/files/field/image/frikha_telnet.jpg" />
               
               
               <Chekpoint sex="f" name="angilina" logo="http://islam.ru/en/sites/default/files/img/story/2011/09/photo.jpg"/>
               
               
            

              <p>
                 Edit <code>src/App.js</code> and save it.
               </p>
                 <a
                   className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                   rel="noopener noreferrer" 
                   >
                     Learn React 
                    </a> 
             </header>

        


         </div>
        
      </div>
      
    );
  }
}

export default App; 
