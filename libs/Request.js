const axios = require('axios');

let headers = {
  'user-agent': 'API Intersic',
  'Content-Type': 'text/xml;charset=UTF-8',
};

module.exports.Send = (url, xml, timeout = process.env.TIMEOUT || 10000) => {

  return new Promise((resolve, reject) => {
    axios({
      method: 'post',
      url,
      headers,
      data: xml,
      timeout,
    }).then((response) => {
      resolve({        
        response: {
          body: response.data,
          statusCode: response.status,
        },
      });
    }).catch((error) => {
      if (error.response) {
        console.log(`SOAP FAIL: ${error}`);
        reject(error.response.data);
      } else {
        console.log(`SOAP FAIL: ${error}`);
        reject(error);
      }
    });
  });
};