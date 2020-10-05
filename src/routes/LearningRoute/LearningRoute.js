import React, { Component } from "react";
import "./learningroute.css";

class LearningRoute extends Component {
  //need to create a post to server for the submit form
  //create services for post and get for info???

  render() {
    return (
      <section className="learning">
        <h2>Translate the word:</h2>
        <fieldset className="translateWord">
          <h2>Hallo</h2>
          <form>
            <label>What is the translation for this word?</label>
            <section>
              <input></input>
            </section>
            
            <div>
              <p>You have answered this *word* correctly *X* times.</p>
              <p>You have answered this *word* incorrectly *X* times.</p>
              <p>Your total score is: *X*.</p>
            </div>
            <div className="answerButton">
              <button>Submit your answer</button>
              </div>
          </form>
          
        </fieldset>
      </section>
    );
  }
}

export default LearningRoute;
