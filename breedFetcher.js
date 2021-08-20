const request = require('request');



const fetchBreedDescription = function (breedname, callback) {

  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedname}`, (error, response, body) => {

    if (error !== null) {

      callback(error, null);
      process.exit();

    }

    const data = JSON.parse(body);


    if (data.length === 0) {

      callback('Request not Found', null);
      process.exit();

    }

    callback(null, data[0].description);



  });


};

module.exports = { fetchBreedDescription };