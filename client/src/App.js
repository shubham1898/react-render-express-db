import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import MainPage from './components/mainpage'
import Exam from './components/exam'
import Questionsetup from './components/questionsetup'
import Navbar from './components/navbar'


function App() {
  return (
    
      <Router>
        <div className="container">
          <Navbar />
        <Route path="/mainPage"  component={MainPage}  />
        <Route path="/exam"  component={Exam}  />
        <Route path="/createExam"  component={Questionsetup}  />
        </div>
      </Router>
    
  );
}

export default App;
