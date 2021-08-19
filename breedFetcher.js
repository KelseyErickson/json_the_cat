const request = require('request');
const args = process.argv.slice(2);

request(`https://api.thecatapi.com/v1/breeds/search?q=${args[0]}`, (error, response, body) => {

  if (error !== null) {

    console.log(error);
    process.exit();

  }
  
  const data = JSON.parse(body);
 
  
  if (data[0] === undefined) {

    console.log('Request not Found');
    process.exit();

  }
 
  console.log(data[0].description);
  

    
    

});