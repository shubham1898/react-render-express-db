import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import MainPage from './components/mainpage'


function App() {
  return (
    
      <Router>
        <div className="App">
        <Route path="/"  component={MainPage}  />
        </div>
      </Router>
    
  );
}

export default App;
