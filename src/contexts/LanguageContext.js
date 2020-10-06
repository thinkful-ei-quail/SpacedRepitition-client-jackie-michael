import languageService from '../services/language-api-service'
import React, { Component } from 'react'

const LanguageContext = React.createContext({
    language:{},
    words:[]
  })
 
  export default LanguageContext

  export class LanguageProvider extends Component {
    state = {
        language:{}
    }
    // importLanguage = () => {
    //     const language = languageService.getLanguage()
    //     console.log(language)
    //     this.setLanguage({
    //         language:language
    //     })
    // }
    setLanguage = language => {
        this.setState({ language })
      }
      setWords = words => {
          this.setState({ words })
      }
componentDidMount(){
    languageService.getLanguage()
    .then(language => {
        this.setState({
        language,
        words:language.words
    })
    console.log(language)
})
}

    render() {
        const value = {
          language: this.state.language,
          words: this.state.words,
        //   error: this.error,
        //   setError: this.setError,
        //   clearError: this.clearError
        }
        console.log(value)
        return (
          <LanguageContext.Provider value={value}>
            {this.props.children}
          </LanguageContext.Provider>
        )
      }
  }