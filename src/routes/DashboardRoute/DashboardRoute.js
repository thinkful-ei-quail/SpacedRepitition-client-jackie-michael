import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import LanguageContext from '../../contexts/LanguageContext'
import './dashboardroute.css'

class DashboardRoute extends Component {
  //need to pull info Language, word, correct, and incorrect from server
  static defaultProps = {
    language:{}
  }
  static contextType = LanguageContext
  render() {
    const { language } = this.context
    console.log(language)
    return (
      <section className="dashboard">
        <h2>Test language 1</h2>
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
        <section className="startPracticeButton"><Link to='/learn'><button>Start Practicing</button></Link></section>
        </fieldset>
      </section>
    );
  }
}

export default DashboardRoute
