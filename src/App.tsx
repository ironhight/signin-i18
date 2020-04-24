import React, { Component,Suspense} from 'react';
import './App.css'
import LoginRegister from './components/LoginRegister/LoginRegister';
import { BrowserRouter as Routers} from 'react-router-dom'
class App extends Component {
 
  render() {
    return (
      <div className="App">
       <Routers>
          <Suspense fallback={(<div>loading~~~</div>)}>
              <LoginRegister/>
          </Suspense>
        </Routers>
      </div>
    );
  }
}
export default App;