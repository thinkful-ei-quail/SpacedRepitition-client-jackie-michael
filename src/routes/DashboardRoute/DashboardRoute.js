import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './dashboardroute.css'

class DashboardRoute extends Component {
  //need to pull info Language, word, correct, and incorrect from server
  
  render() {
    return (
      <section>
        <h2>Language will go here</h2>
        <ul>Words to Practice
          <li>Word 1 : correct / incorrect</li>
          <li>Word 2 : correct / incorrect</li>
          <li>Word 3 : correct / incorrect</li>
          <li>Word 4 : correct / incorrect</li>
          <li>Word 5 : correct / incorrect</li>
          <li>Word 6 : correct / incorrect</li>
        </ul>
        <Link to='/learn'><button>Start Practicing</button></Link>
      </section>
    );
  }
}

export default DashboardRoute
