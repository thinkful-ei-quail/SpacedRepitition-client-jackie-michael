import React, { Component } from "react";
import { Link } from "react-router-dom";
import LanguageContext from "../../contexts/LanguageContext";
import LanguageService from "../../services/language-api-service";
import "./dashboardroute.css";

class DashboardRoute extends Component {
  static contextType = LanguageContext;

  renderWordsToPractice = (words) => {
    console.log("Words", words);
    if (!words) {
      return null;
    }
    return (
      <ul>
        {words.map((word) => (
          <li key={word.id}>
            {word.original}: Correct: {word.correct_count} / Incorrect:{" "}
            {word.incorrect_count}
          </li>
        ))}
      </ul>
    );
  }
  renderLanguageName = (language) => {
    console.log("language", language);
    if (!language) {
      return null;
    }
    return <h2>{language.name}</h2>;
  }

  render() {
    const { language, words } = this.context
    return (
      <section className="dashboard">
        {this.renderLanguageName(language)}
        <fieldset className="dashboardFieldset">
          <legend>Words to Practice</legend>
          {this.renderWordsToPractice(words)}
          <section className="startPracticeButton">
            <Link to="/learn">
              <button>Start Practicing</button>
            </Link>
          </section>
        </fieldset>
      </section>
    );
  }
}

export default DashboardRoute;
