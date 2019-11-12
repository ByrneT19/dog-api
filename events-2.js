'use strict';

function getDogs() {
    fetch('https://dog.ceo/api/breeds/image/random/' + 'number')
    .then(response => response.json())
    .then(responseJson => showImage(responseJson));
    showImage(responseJson);
}

/*function showInDom(responseJson) {
    console.log(responseJson);
    $('.dog-img').replaceWith(
      `<img src="${responseJson.message}" class="dog-img">`
    )
    $('.dog-results').show();
  }*/

function watchForm() {
    $('form').submit(event => {
      event.preventDefault();
      const number = $(event.currentTarget).find('#dogCount');
        getDogs(number);
    });
  }

  function showImage(responseJson) {
    console.log(responseJson);
    $('.dog-img').attr('src', `${responseJson.message}`);
    $('.dog-results').show();
  }
  
  $(function() {
      console.log('App loaded - submit a number');
      watchForm();
  })

