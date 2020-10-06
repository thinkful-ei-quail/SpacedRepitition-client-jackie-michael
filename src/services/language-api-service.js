import config from "../config";
import TokenService from "./token-service";

const languageService = {
    getLanguage() {
        return fetch(`${config.API_ENDPOINT}/language`, {
            method: "GET",
            headers: {
                authorization: `bearer ${TokenService.getAuthToken()}`,
                "Content-Type":"application/json",
            },
        }).then((res) =>
        !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
      );
    }
}

export default languageService