// $.ajax({
//   // What kind of request
//   method: 'GET',
//
//   // The URL for the request
//   url: 'https://kickflip-api.herokuapp.com/tricks',
//
//   // The type of data we want back
//   dataType: 'json',
//
//   // Code to run if the request succeeds; the JSON
//   // response is passed to the function as an argument.
//   success: onSuccess
// });
//
// // defining the callback function that will happen
// // if the request succeeds.
// function onSuccess(responseData) {
//     console.log(responseData);
//     // celebrate!
// };

// $.get("https://kickflip-api.herokuapp.com/tricks/3", (response) => {
//   processResponse(response);
// });
//
// function onSubmitReqSuccess(responseData){
//   console.log(responseData);
//   // process data
// }


//  post work sheet


// $('#q').click(function(e){
//   // $.ajax({
//   //   method: 'GET',
//   //   url: 'https://kickflip-api.herokuapp.com/tricks/8',
//   //   dataType: 'json',
//   //   success: onSuccess
//   // });
//   // $.get('https://kickflip-api.herokuapp.com/tricks/5', onSuccess);
//   let data = {
//     "name":"Not falling off the thing",
//     "trick_type":"Brandi's trick",
//     "example_video":"https://www.youtube.com/watch?v=V-_O7nl0Ii0"
//   };
//
//   $.post("https://kickflip-api.herokuapp.com/tricks", {'trick': data}, (response) => {
//     console.log(response);
//   });
// });
//
// function onSuccess(responseData) {
//   console.log(responseData.name);
//   $('#result').html(responseData.name + ' is a ' + responseData.trick_type);
// };


//  error syntex:


// $.get("https://kickflip-api.herokuapp.com/trick", (response) => {
//   console.log(response);
// }).success(function() {
// 	console.log('success');
// }).error(onError);
//
// function onError(xhr, status, errorThrown){
  /* perform this function if the
     response timed out or if the
     status code of the response is
     in the 400s or 500s (error)
     xhr: the full response object
     status: a string that describes
     the response status
     errorThrown: a string with any error
     message associated with that status */
// };
//
// console.log("onError");
//
// $('#q').click(function(e){
//   $.ajax({
//     method: 'GET',
//     url: 'https://kickflip-api.herokuapp.com/trick/8',
//     dataType: 'json',
//     success: onSuccess,
//     error: onError
//   });
//   // $.get('https://kickflip-api.herokuapp.com/tricks/5', onSuccess);
  // let data = {
  //   "name":"Not falling off the thing",
  //   "trick_type":"Brandi's trick",
  //   "example_video":"https://www.youtube.com/watch?v=V-_O7nl0Ii0"
  // };
  // $.post("https://kickflip-api.herokuapp.com/tricks", {'trick': data}, (response) => {
  //   console.log(response);
  // });
// });
//
// function onSuccess(responseData) {
//   console.log(responseData.name);
//   $('#result').html(responseData.name + ' is a ' + responseData.trick_type);
// };
//
// function onError(xhr, status, errorThrown){
//   console.log('An error happened! Oh noes!');
//   console.log(xhr);
//   console.log(status);
//   console.log(errorThrown);
// };
