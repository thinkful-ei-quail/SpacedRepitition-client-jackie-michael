import React, { Component } from 'react'

class LearningRoute extends Component {
  //need to create a post to server for the submit form
  //create services for post and get for info???
  
  render() {
    // let answer = <div></div>
    // if(input === right) {
    //   answer = 
    //   <div>
    //     You were correct! :D
    //     The correct translation for word was this and you chose this!
    //   </div>
    // } else if (input === wrong){
    //   answer = 
    //     <div>
    //     Good try, but not quite right :(
    //     The correct translation for word was this and you chose this instead!
    //     Your total score is: X
    //     </div>
    // }

    return (
      <section>
        <h2>Translate the word:</h2>
        <h2>*Word*</h2>
        <form>
        <label>What is the translation for this word?</label>
        <section><input></input></section>
        <button>
        Submit your answer
        </button>
        <div>
        <p>You have answered this *word* correctly *X* times.</p>
        <p>You have answered this *word* incorrectly *X* times.</p>
        <p>Your total score is: *X*.</p>
        </div>
        </form>
        <div>**Answer will go here see under render^^**</div>
        {/* {answer} */}
        <button>Try another Word!</button>
      </section>
    );
  }
}

export default LearningRoute
