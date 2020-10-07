import config from "../config";
import TokenService from "./token-service";

const authBearer = {headers:{authorization: `bearer ${TokenService.getAuthToken()}`}}
const URL = `${config.API_ENDPOINT}/language`

const languageService = {
  // getLanguage() {
  //     return fetch(`${config.API_ENDPOINT}/language`, {
  //         method: "GET",
  //         headers: {
  //             authorization: `bearer ${TokenService.getAuthToken()}`,
  //             "Content-Type":"application/json",
  //         },
  //     }).then((res) =>
  //     !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
  //   );
  // }

  async getLanguage() {
    const res = await fetch(URL, authBearer)
    return !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
  },
  
  async getNextWord(){
    const res = await fetch(URL`/head`, authBearer)
    return !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
  },
  
  async submitGuess(guess){
    const postData = {
      method: 'POST',
      authBearer,
      body: JSON.stringify(guess)
    }
    const res = await fetch(URL`/guess`, postData)
    return !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
  }
};

export default languageService;
