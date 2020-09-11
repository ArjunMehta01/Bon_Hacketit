const fetch = require('node-fetch')

async function foodRequest(routeInfo, params, self) {
    try {
      const route = routeInfo.route;
      const body = {
        jsonrpc: "2.0",
        id: routeInfo.id || "1",
        method: routeInfo.method,
        params: [
          { ...params }
        ]
      };
      const payload = {
        url: self.url + route,
        method: "POST",
        headers: self.headers,
        body: JSON.stringify(body)
      };
      const response = await (await fetch(self.url + route, payload)).json();
      if (response.error) { throw response }
      else { return response }
  
    } catch (err) {
      throw err
    }
  };

class Requests {
  constructor(url, apiKey) {
    this.url = url;
    this.headers = {
      "Content-Type": "application/json",
      "x-api-key": apiKey
    };
  }
  //Allows setting a different url than the default from which to create and accept RPC connections
  setUrl(url) {
    this.url = url;
  }
  setApiKey(apiKey) {
    this.headers["x-api-key"] = apiKey;
