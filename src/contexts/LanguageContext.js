import languageService from "../services/language-api-service";
import React, { Component } from "react";

const LanguageContext = React.createContext({
  language: {},
  words: [],
  getAllThings: () => { } 
});

export default LanguageContext

export class LanguageProvider extends Component {
  state = {
    language: {},
    words:[],
    error: null,
    getAllThings: () => {} 
  };
//   setLanguage = (language) => {
//     this.setState({ language });
//   };
//   setWords = (words) => {
//     this.setState({ words });
//   };
getAllThings = async () => {
    console.log("Language Component did mount");
    try{
      const data = await languageService.getLanguage()
      this.setState({
        language: data.language,
        words: data.words,        
      })
    }
    catch(err){this.setState({error: err.message})}
}
  
  componentDidMount() {
  this.getAllThings();
  }

  render() {
    const value = {
      language: this.state.language,
      words: this.state.words,
      getAllThings: this.getAllThings
    };
    return (
      <LanguageContext.Provider  value={value}>
        {this.props.children}
      </LanguageContext.Provider>
    );
  }
}