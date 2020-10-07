import languageService from "../services/language-api-service";
import React, { Component } from "react";

const LanguageContext = React.createContext({
  language: {},
  words: [],
});

export default LanguageContext

export class LanguageProvider extends Component {
  state = {
    language: {},
    words:[],
    error: null
  };
//   setLanguage = (language) => {
//     this.setState({ language });
//   };
//   setWords = (words) => {
//     this.setState({ words });
//   };
  async componentDidMount() {
    try{
      const data = await languageService.getLanguage()
      const headWord = await languageService.getNextWord()
      this.setState({
        language: data.language,
        words: data.words,        
      })
    }
    catch(err){this.setState({error: err.message})}
}

  render() {
    const value = {
      language: this.state.language,
      words: this.state.words,
    };
    return (
      <LanguageContext.Provider  value={value}>
        {this.props.children}
      </LanguageContext.Provider>
    );
  }
}