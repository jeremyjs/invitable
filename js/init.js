$(function() {
  $('#page-container').backstretch([
      './img/inbox.jpg'
    , './img/facebook.png'
    , './img/frustrated-woman.jpg'
  ], {duration: 5000, fade: 1250});

  $('#btn-signup').click(function(e) {
    e.preventDefault();
    swal({
      title: 'Success!',
      text: 'Account created!',
      type: 'success',
      confirmButtonText: 'Cool.'
    });
  });

  $('#btn-login').click(function(e) {
    e.preventDefault();
    swal({
      title: 'Success!',
      text: 'Logged in!',
      type: 'success',
      confirmButtonText: 'Cool.'
    });
  });
});
