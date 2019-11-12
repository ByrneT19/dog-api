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

/*function showInDom(responseJson) {
    console.log(responseJson);
    $('.dog-img').replaceWith(
      `<img src="${responseJson.message}" class="dog-img">`
    )
    $('.dog-results').show();
  }*/
  
  function showInDom(responseJson) {   
    getDogs();
    $('.dog-img, src').empty;
    image = message;
    for(message = 0; message < responseJson.length; message++);
    $('.dog-img').append('message');
      $('.dog-results').show();
    }
  

function watchForm() {
    $('form').submit(event => {
      event.preventDefault();
      const number = $(event.currentTarget).find('#dogCount').val();
        getDogs(number);
    });
  }

  /*function showImage(responseJson) {
    console.log(responseJson);
    $('.dog-img').attr('src', `${responseJson.message}`);
    $('.dog-results').show();
  }*/
  
  $(function() {
      console.log('App loaded - submit a number');
      watchForm();
  })

  

