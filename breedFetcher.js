const request = require('request');



const fetchBreedDescription = function(breedname, callback) {

  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedname}`, (error, response, body) => {

    if (error) {

      callback(error, null);
      return

    }

    const data = JSON.parse(body);


    if (data.length === 0) {

      callback('Request not Found', null);
      return;

    }

    callback(null, data[0].description);



  });


};

module.exports = { fetchBreedDescription };