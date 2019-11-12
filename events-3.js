function getDogBreed() {
    fetch(`https://dog.ceo/api/breed/${'#dogBreed'}/images/random`)
    .then(response => response.json())
    .then(responseJson => showImage(responseJson))
    .catch(error => $(error-p).html('Sorry, we could not find your breed! Please try again!'));
}

function watchForm() {
    $('form').submit(event => {
      event.preventDefault();
      const dogType = $(event.currentTarget).find('#dogBreed').val();
        getDogBreed(dogType);
    });
  }

function showImage(responseJson) {
    console.log(responseJson);
    $('.dog-img').attr('src', `${responseJson.message}`);
  }
  
$(function() {
    console.log('App loaded - submit a number');
    watchForm();
})
