 function getDogBreed(breed) {
   $('.dog-img').hide();
   fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
    .then (response => {
      if(!response.ok) {
        throw new Error(alert('Something went wrong. Try again later'))
      }
  response.json().then(responseJson => showImage(responseJson)) //<- only runs if response is ok
  })
}

function watchForm() {
    $('form').submit(event => {
      event.preventDefault();
      const breed = $('#dogBreed').val();
        getDogBreed(breed);
    });
  }

function showImage(responseJson) {
    console.log(responseJson);
    $('.dog-img').attr('src', `${responseJson.message}`);
    $('.dog-img').show();
  }
  
$(function() {
    console.log('App loaded - submit a breed');
    watchForm();
})

