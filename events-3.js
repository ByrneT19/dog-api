function getDogBreed() {
    fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
    .then(response => response.json())
    .then(responseJson => showImage(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
}

function watchForm() {
    $('form').submit(event => {
      event.preventDefault();
      //let breed = $('dogCount').val();
      const breed = $(event.currentTarget).find('input').val();
        getDogBreed(breed);
    });
  }

function showImage(responseJson) {
    console.log(responseJson);
    $('.dog-img').attr('src', `${responseJson.message}`);
    $('.dog-img').show();
  }
  
$(function() {
    console.log('App loaded - submit a number');
    watchForm();
})
