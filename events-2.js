'use strict';

/*function getDogs(number) {
    fetch(`https://dog.ceo/api/breeds/image/random/${number}`)
    .then(response => response.json())
    .then(responseJson => showInDom(responseJson));
    showInDom(responseJson);
}*/

function getDogs(number) {
  fetch('https://dog.ceo/api/breeds/image/random/' + `${number}`)
  .then(response => response.json())
  .then(responseJson =>  showInDom(responseJson));
}

function showInDom(responseJson) {
  //getDogs();
  $('.dog-results').empty();
  //image = message;
  let result = "";
  for(let i = 0; i < responseJson.message.length; i++) {
    result += `<img src="${responseJson.message[i]}" class="dog-img" >`;
   }
   $('.dog-results').append(result);
  }
  

function watchForm() {
    $('form').submit(event => {
      event.preventDefault();
      const number = $(event.currentTarget).find('#dogCount').val();
        getDogs(number);
    });
  }
  
  $(function() {
      console.log('App loaded - submit a number');
      watchForm();
  })

  

