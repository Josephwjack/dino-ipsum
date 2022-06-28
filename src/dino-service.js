export default class DinoService {
  static getDino() {
    return new Promise(function(resolve) {
      let dinoList = new XMLHttpRequest();
      dinoList.open('GET', 'https://dinoipsum.com/api/?format=json&words=10&paragraphs=1');
      dinoList.onload = function() {
        if (this.status === 200) {
          resolve(dinoList.response);
        } else {
          console.log('Uh oh no Dinos');
        }
      };
      dinoList.send();
    })
  }
}


let promise = new Promise(function(resolve, reject) {
  let request = new XMLHttpRequest();
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}`;
  request.onload = function() {
    if (this.status === 200) {
      resolve(request.response);
    } else {
      reject(request.response);
    }
  }
  request.open("GET", url, true);
  request.send();
});

promise.then(function(response) {
  const body = JSON.parse(response);
  $('.showHumidity').text(`The humidity in ${city} is ${body.main.humidity}%`);
  $('.showTemp').text(`The temperature in Kelvins is ${body.main.temp} degrees.`);
  $('.showErrors').text("");
}, function(error) {
  $('.showErrors').text(`There was an error processing your request: ${error}`);
  $('.showHumidity').text("");
  $('.showTemp').text("");
});
});
});