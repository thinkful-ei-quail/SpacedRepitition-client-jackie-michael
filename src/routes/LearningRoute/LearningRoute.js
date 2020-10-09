import React, { Component } from "react";
import LanguageContext from "../../contexts/LanguageContext";
import languageService from '../../services/language-api-service'
import { Link } from "react-router-dom";
import "./learningroute.css";

class LearningRoute extends Component {
  //need to create a post to server for the submit form
  //create services for post and get for info???
    
  state = {
    nextWord: {}
  }
  
  async componentDidMount() {
    try {
      const headWord = await languageService.getNextWord()
      this.setState({
        nextWord: headWord
      })
    }
    catch (err) { this.setState({ error: err.message }) }
  }
  
  
  render() {
    const { nextWord, totalScore, wordCorrectCount, wordIncorrectCount } = this.state.nextWord
    console.log('Word attr: ', nextWord, totalScore, wordCorrectCount, wordIncorrectCount)
    return (
      <section className="learning">
        <fieldset className="translateWord">
        <h2>Translate the word:</h2>
        <span>{nextWord}</span>
          <form>
            <label htmlFor='learn-guess-input'>What's the translation for this word?</label>
            <section>
              <input type='text' id='learn-guess-input' required></input>
            </section>
            
            <div>
              <p>Your total score is: {totalScore}</p>
              <p>You have answered this word correctly {wordCorrectCount} times.</p>
              <p>You have answered this word incorrectly {wordIncorrectCount} times.</p>
            </div>
            <div className="answerButton">
            <Link to ='/answerFeedback'>
              <button type='submit'>Submit your answer</button>
              </Link>
              </div>
          </form>
        </fieldset>
      </section>
    );
  }
}

export default LearningRoute;
