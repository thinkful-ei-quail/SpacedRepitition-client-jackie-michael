import { text } from "@fortawesome/fontawesome-svg-core";
import React, { Component } from "react";
import LanguageContext from "../../contexts/LanguageContext";
import languageService from '../../services/language-api-service'
import { Link } from "react-router-dom";
import "./learningroute.css";
import Answer from '../../components/Answer/Answer'

class LearningRoute extends Component {
  //need to create a post to server for the submit form
  //create services for post and get for info???
  static defaultProps = {
    location: {},
    history: {
      push: () => { },
    },
  };

  state = {
    nextWord: {},
    error: null,
    responseReceived: false,
    response: {},
    guess: ''
  }


  handleNext = () => {
    this.props.history.push('/learn');
  };

  async componentDidMount() {
    try {
      const headWord = await languageService.getNextWord()
      this.setState({
        nextWord: headWord
      })
    }
    catch (err) { this.setState({ error: err.message }) }
  }

  handleSubmit = (ev) => {
    ev.preventDefault()
    this.setState({
      error: null,
      responseReceived: true
    })
    const { guess } = ev.target
    languageService.submitGuess(guess.value)
      .then((res) => {
        text.value = ''
        this.setState({ response: res, guess: guess.value })
      })
      .catch((res) => {
        this.setState({ error: res.error });
      })
  }


  renderFeedback() {
    const { response, guess, nextWord } = this.state;
    if (!response) return null;
    else return (
      <Answer
        response={response}
        guess={guess}
        nextWord={nextWord}
        handleNext={this.handleNext} />
    )
  }

  renderDashboard() {
    const { nextWord, totalScore, wordCorrectCount, wordIncorrectCount } = this.state.nextWord
    console.log(this.state.nextWord);
    return (
      <fieldset className="translateWord">
        <h2>Translate the word:</h2>
        <span className="nextWord">{nextWord}</span>
        <form onSubmit={ev => this.handleSubmit(ev)}>
          <label htmlFor='learn-guess-input'>What's the translation for this word?</label>
          <section>
            <input type='text' id='learn-guess-input' required name="guess"></input>
          </section>
          <div>
            <p>Your total score is: {totalScore}</p>
            <p>You have answered this word correctly {wordCorrectCount} times.</p>
            <p>You have answered this word incorrectly {wordIncorrectCount} times.</p>
          </div>
          <div className="answerButton">
            <button type='submit'>Submit your answer</button>
          </div>
        </form>
      </fieldset>
    )
  }


  render() {
    const { nextWord, totalScore, wordCorrectCount, wordIncorrectCount } = this.state.nextWord
    const { isCorrect } = this.state.response
    return (
      <section className="learning">
        {this.state.responseReceived ? this.renderFeedback() : this.renderDashboard()}
      </section>
    );
  }
}

export default LearningRoute;
