function getDogBreed() {
    fetch(`https://dog.ceo/api/breed/hound/images/random`)
    .then(response => response.json())
    .then(responseJson => showImage(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
}

function watchForm() {
    $('form').submit(event => {
      event.preventDefault();
      //let breed = $('dogCount').val();
      const dogType = $(event.currentTarget).find('#dogBreed').val();
        getDogBreed(dogType);
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
