'use strict';

function getDogs(number) {
    fetch('https://dog.ceo/api/breeds/image/random/' + `${number}`)
    .then(response => response.json())
    .then(responseJson => console.log(responseJson));
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


  