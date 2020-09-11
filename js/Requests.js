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