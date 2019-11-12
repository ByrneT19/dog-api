function getDogBreed() {
    fetch('https://dog.ceo/api/breed/`${value:""}`/images/random');
    .then(response => response.json())
    .then(responseJson => showImage(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
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