import languageService from '../services/language-api-service'
import React, { Component } from 'react'

const LanguageContext = React.createContext({
    language:{},
    words:[]
  })
 
  export default LanguageContext

  export class LanguageProvider extends Component {
    constructor(props) {
        super(props)
        const state = { language: {}, error: null }
        this.state = state;
    }
    // setLanguage = language => {
    //     this.setState({ language })
    //   }
    // importLanguage = () => {
    //     const language = languageService.getLanguage()
    //     console.log(language)
    //     this.setLanguage({
    //         language:language
    //     })
    // }
componentDidMount(){
    languageService.getLanguage()
    .then(data => {
        this.setState({
            language:data.language
        })
        console.log(this.state.language)
    })
}

    render() {
        const value = {
          language: this.state.language,
          words: this.words,
          error: this.error,
          setError: this.setError,
          clearError: this.clearError
        }
        console.log(value)
        return (
          <LanguageContext.Provider value={value}>
            {this.props.children}
          </LanguageContext.Provider>
        )
      }
  }