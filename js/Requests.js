const fetch = require('node-fetch')
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

function foodRequest(self) {

  const payload = {
    url: self.url,
    method: "GET",
    headers: self.headers
  };
//possible issue: undefined is printed
const Http = new XMLHttpRequest();
const url=self.url;
Http.open("GET", url);
Http.send();


Http.onreadystatechange = (e) => {
  console.log(Http.responseText)
}
}



class Requests {
  constructor(url, apiKey, appID) {
    this.url = url;
  }

  setUrl(url) {
    this.url = url;
  }
  setApiKey(apiKey) {
    this.headers["app_key"] = apiKey;
  }
  setAppId(appId){
      this.headers['app_id'] = appId
  }

}

const test = new Requests("https://api.edamam.com/search?q=chicken&app_id=2adada35&app_key=32fb87e1fb6b4070a2f81e1c3cdfe085&from=0&to=3&calories=591-722&health=alcohol-free")

console.log(foodRequest(test));
