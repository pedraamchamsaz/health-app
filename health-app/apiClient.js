import axios from "axios"; 
const url = "http://localhost:3001/";
const exerciseUrl = "http://localhost:3001/exercise/";
const foodUrl = "http://localhost:3001/food/";
const userUrl = "http://localhost:3001/user/";

export class ApiClient {

    constructor(tokenProvider, logoutHandler){ 
        this.tokenProvider = tokenProvider;
        this.logoutHandler = logoutHandler; 
    }

    authenticatedCall(method, url, data) {
        return axios({
            method, 
            url, 
            headers: {
                authorization: this.tokenProvider(),
            },
            data,
        }).catch((error) => {
          console.error(error)
            if(error.response.status === 403) {
                this.logoutHandler();
                return Promise.reject();
            } else {
                throw error;
            }
        })
    }

    getExercise() {
        return this.authenticatedCall("get", url);
      }
    
      addExercise(exercise, date, duration, calories) {
        return this.authenticatedCall("post", url, { exercise, date, duration, calories });
      }
    
      addUser(username, password, name, age, weight, height, gender, goal) {
        return this.authenticatedCall("post", userUrl, { username, password, name, age, weight, height, gender, goal });
      }

      getUser() {
        return this.authenticatedCall("get", userUrl)
      }
    
      getFood() {
        return this.authenticatedCall("get", foodUrl)
      }
    
      addFood(food, date, calories) {
        return this.authenticatedCall("post", foodUrl, { food, date, calories });
      }
    
      removeExercise(id) {
        return this.authenticatedCall("delete", `${url}${id}`); 
      }

      removeFood(id) {
        return this.authenticatedCall("delete", `${url}${id}`);
      }
    
      updateExercise(id, exercise, date, duration, calories) {
        return this.authenticatedCall("put", `${url}${id}`, { exercise, date, duration, calories });
      }
      updateFood(id, food, date, calories) {
        return this.authenticatedCall("put", `${url}${id}`, { food, calories });
      }
    
      async login(username, password) {
        return await axios({
          method: "post",
          url: `${url}auth`,
          data: { username, password },
        });
      }
    }