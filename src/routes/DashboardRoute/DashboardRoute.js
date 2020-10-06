import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import LanguageContext from '../../contexts/LanguageContext'
import LanguageService from '../../services/language-api-service'
import './dashboardroute.css'

class DashboardRoute extends Component {
  //need to pull info Language, word, correct, and incorrect from server 
  static defaultProps = {
    language:{}
  }
  static contextType = LanguageContext

renderWordsToPractice(){
  const { language, words } = this.context
  console.log('Language', language)
  console.log('Words', words)
  if (!language || !words) {
    return null;
  }
  return (
        <ul>
        {words.map((word) => (
          <li key={word.id} >
          {word.translation}: Correct: {word.correct_count} / Incorrect: {word.incorrect_count}
          </li>
        ))}
        </ul>
  )
}

  render() {
    return (
      <section className="dashboard">
        <h2>Test language 1</h2>
        <fieldset className="dashboardFieldset">
          <legend>Words to Practice</legend>
        {this.renderWordsToPractice()}
        <section className="startPracticeButton"><Link to='/learn'><button>Start Practicing</button></Link></section>
        </fieldset>
      </section>
    );
  }
}

export default DashboardRoute
