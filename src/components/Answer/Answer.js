import React, { Component } from "react";
import UserContext from "../../contexts/UserContext";
import './answer.css'

class Answer extends Component {

  renderIncorrect(score, answer, guess, word) {
    return (
      <fieldset>
        <div>
          <p>*Good try, but not quite right :\*</p>
          <p>The correct translation for {word} was {answer} and
          you chose {guess}!</p>
        </div>
        <div>You're total score is: {score}</div>
        <div className="button">
          <button className="tryAgainButton">Try another word</button>
        </div>
      </fieldset>
    )
  }

  renderCorrect(score, answer, guess, word) {
    return (
      <fieldset>
        <div>
          <p>*You were correct! :D*</p>
        <p>The correct translation for {word} was {answer} and
          you chose {guess}!</p>
        </div>
        <p className='DisplayScore'>You're total score is: {score}</p>
        <div className="button">
          <button className="tryAgainButton">Try another word</button>
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
