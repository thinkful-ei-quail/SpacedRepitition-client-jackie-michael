import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './dashboardroute.css'

class DashboardRoute extends Component {
  //need to pull info Language, word, correct, and incorrect from server
  
  render() {
    return (
      <section className="dashboard">
        <h2>Language will go here</h2>
        <fieldset className="dashboardFieldset">
          <legend>Words to Practice</legend>
        <ul>
          <li>Word 1 : correct / incorrect</li>
          <li>Word 2 : correct / incorrect</li>
          <li>Word 3 : correct / incorrect</li>
          <li>Word 4 : correct / incorrect</li>
          <li>Word 5 : correct / incorrect</li>
          <li>Word 6 : correct / incorrect</li>
        </ul>
        </fieldset>
        <section className="startPracticeButton"><Link to='/learn'><button>Start Practicing</button></Link></section>
      </section>
    );
  }
}

export default DashboardRoute
