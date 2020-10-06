import languageService from "../services/language-api-service";
import React, { Component } from "react";

const LanguageContext = React.createContext({
  language: {},
  words: {},
});

export default LanguageContext;

export class LanguageProvider extends Component {
  state = {
    language: {},
    words:[]
  };
  setLanguage = (language) => {
    this.setState({ language });
  };
  setWords = (words) => {
    this.setState({ words });
  };
  componentDidMount() {
    languageService.getLanguage().then((data) => {
      this.setState({
        language: data.language,
        words: data.words,
      });
    });
  }

  render() {
    const value = {
      language: this.state.language,
      words: this.state.words,
      //   error: this.error,
      //   setError: this.setError,
      //   clearError: this.clearError
    };
    return (
      <LanguageContext.Provider value={value}>
        {this.props.children}
      </LanguageContext.Provider>
    );
  }
}
