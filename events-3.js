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

// go on to next block if res ok, if not will go to catch block

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

//if status === success showImage
//else alert

/*.then (response => {
  if(!response.ok) {
    throw new Error('Something went wrong. Try again later')
  }
  response.json() <- only runs if response is ok
}) 

// go on to next block if res ok, if not will go to catch block*/