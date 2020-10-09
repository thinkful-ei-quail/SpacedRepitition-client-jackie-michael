import React, { Component } from "react";
import UserContext from "../../contexts/UserContext";
import './answer.css'

class Answer extends Component {
  static defaultProps = {
    handleNext: () => { },
  };

  renderIncorrect(score, answer, guess, word) {
 
    return (
      <fieldset>
        <div>
          <h2>Good try, but not quite right :(</h2>
          <div className='DisplayFeedback'><p>The correct translation for {word} was {answer} and
          you chose {guess}!</p></div>
        </div>
        <div className='DisplayScore'> <p>Your total score is: {score}</p></div>
        <div className="button">
          <button className="tryAgainButton" onClick={this.props.handleNext}>Try another word!</button>
        </div>
      </fieldset>
    )
  }

  renderCorrect(score, answer, guess, word) {
    return (
      <fieldset>
        <div>
          <h2>You were correct! :D</h2>
        <div className='DisplayFeedback'><p>The correct translation for {word} was {answer} and
          you chose {guess}!</p></div>
        </div>
        <div className='DisplayScore p'><p>Your total score is: {score}</p></div>
        <div className="button">
          <button className="tryAgainButton" onClick={this.props.handleNext}>Try another word!</button>
        </div>
      </fieldset>
    )
  }

  render() {
    const { isCorrect, wordCorrectCount, wordIncorrectCount, totalScore, answer } = this.props.response
    const { guess } = this.props
    const { nextWord } = this.props.nextWord
    return (
      <section className="answer">
        {isCorrect ? this.renderCorrect(totalScore, answer, guess, nextWord) : this.renderIncorrect(totalScore, answer, guess, nextWord)}
      </section>
    );
  }
}

export default Answer;
