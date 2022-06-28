import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

//import DinoService from './dino-service.js';

class DinoService {
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
    });  }
}
let realDinosaurs;


//  let outsideArray= theReturnOf 

let dinoPromise = DinoService.getDino();
dinoPromise.then(function(response) {
  console.log("Raw JSON:"+response);
  let responseParsed = JSON.parse(response);
  let newArray = responseParsed[0];
  realDinosaurs.push(newArray);
  // let responseToString;
  //dinosaur = new Dinosaur(responseParsed);
  // let obj = JSON.parse(response);
  // let arr = [];
  
  // for(let i in obj)
  //     arr.push(obj[0][1]);
  // console.log(arr);
  // console.log(responseParsed[0][1]);
  
  
  
  
  
  // let responseObject = Object.assign({},responseParsed);
  // return responseParsed[2];
  
  
  $(document).ready(function() {
    $('#dinoName').text(`Here's a real dino name: ${newArray[1]}`);  
    return responseParsed;
    
  });
  
});