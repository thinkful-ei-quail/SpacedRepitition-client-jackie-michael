import React, { Component } from "react";
import UserContext from "../../contexts/UserContext";
import './answer.css'

class Answer extends Component {

  render() {
    return (
        <section className="answer">
      <fieldset>
        <div>
          <p>*You were correct! :D*</p>
          <p>The correct translation for *word* was *this* and
          you chose *this*!</p>
        </div>
        <div>You're total score is: *X*</div>
        <div className="button">
            <button className="tryAgainButton">Try another word</button>
        </div>
      </fieldset>
      </section>
    );
  }
}

export default Answer;
