import React, { Component } from "react";
import { Link } from "react-router-dom";
import LanguageContext from "../../contexts/LanguageContext";
import "./dashboardroute.css";

class DashboardRoute extends Component {
  static contextType = LanguageContext;

  // renderWordsToPractice = (words) => {
  //   return words.map((word, i) => {
  //     return (
  //       <li className='word' key={i}>
  //         <h4>{word.original}</h4>
  //         <div className='count'>
  //           <div className='correct'>
  //             correct answer count: {word.correct_count}
  //           </div>
  //           <div className='incorrect'>
  //             incorrect answer count: {word.incorrect_count}
  //           </div>
  //         </div>
  //       </li>
  //     )
  //   })
  // }
  
  renderWordsToPractice = (words) => {
    if (!words) {
      return null;
    }
    return (
      <ul>
        {words.map((word) => (
          <li key={word.id}>
            <h4>{word.original}</h4> correct answer count: {word.correct_count} / incorrect answer count: {word.incorrect_count}
          </li>
        ))}
      </ul>
    );
  }
  renderLanguageName = (language) => {
    if(!language) return null
    return <h2>{language.name}</h2>;
  }
  
  renderTotal = (language) => {
    if(!language) return null
    return <h2>Total correct answers: {language.total_score}</h2>;
  }

  render() {
    const { language, words } = this.context
    return (
      <section className="dashboard">
        {this.renderLanguageName(language)}
        <fieldset className="dashboardFieldset">
          <h3>Words to practice</h3>
          {this.renderWordsToPractice(words)}
          {this.renderTotal(language)}
          <section className="startPracticeButton">
            <Link to="/learn">
              <button>Start practicing</button>
            </Link>
          </section>
        </fieldset>
      </section>
    );
  }
}

export default DashboardRoute;
