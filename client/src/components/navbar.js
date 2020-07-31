import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">Easy Exam</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/exam" className="nav-link">Exams</Link>
          </li>
          <li className="navbar-item">
          <Link to="/createExam" className="nav-link">Create Exam</Link>
          </li>
          <li className="navbar-item">
          <Link to="/mainPage" className="nav-link">Help</Link>
          </li>
        </ul>
        </div>
      </nav>
    );
  }
}