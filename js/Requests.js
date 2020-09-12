const fetch = require('node-fetch')
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var apiPath = 'https://api.edamam.com/search?q=chicken&';
var appId = '&app_id=2adada35'; 
var appKey = '&app_key=32fb87e1fb6b4070a2f81e1c3cdfe085'; 

var json = '{"name": "Peter", "age": 22, "country": "United States"}';

// Converting JSON-encoded string to JS object
var obj = JSON.parse(json);
console.log(obj.name); 

function foodRequest(callback) {

  // const payload = {
  //   url: self.url,
  //   method: "GET",
  //   headers: self.headers
  // }; 

  var response; 
  var url= apiPath + appId + appKey;
  const Http = new XMLHttpRequest(); 

  // callback with response
  Http.onreadystatechange = function() {
    if (Http.readyState === 4 && Http.status === 200 && callback) callback(Http.responseText); 
  }
  Http.open("GET", url, true);
  Http.send(); 
}

class Requests {
  constructor(url, apiKey, appId) {
    this.url = url;
  }

  setUrl(url) {
    this.url = url;
  }
  setApiKey(apiKey) {
    this.headers["${YOUR_APP_KEY}"] = apiKey;
  }
  setAppId(appId){
      this.headers['app_id'] = appId; 
  }

}

const test = new Requests("https://api.edamam.com/search?q=chicken&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=1"); 
foodRequest(function(response){
  handleResponse(JSON.parse(response)); 
});

function handleResponse(response){
  //console.log(response);
  //console.log(response);
  var hits = response.hits;
  //for(const property in hits){
     //console.log('${property}: ${object[property]}');
  // }
  
  var recipeNameLink = {
    table: []
  };

//iterating through the array of recipes
  hits.forEach(element => (recipeNameLink.table.push({recipeTitle : element.recipe.label, url: element.recipe.url}))); 
  console.log(obj); 

  // return the table of recipe titles and url
  return recipeNameLink; 
  
}

