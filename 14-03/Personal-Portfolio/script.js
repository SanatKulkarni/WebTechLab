$(document).ready(function() {

  $('a[href*="#"]').on('click', function(event) {
    event.preventDefault();
    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
  });

  $(document).ready(function() {
    $('td:contains("SRM University AP")').on('click', function() {
      window.location.href = 'https://www.srmap.edu.in';
    }).css('cursor', 'pointer'); 
  });

  $(document).ready(function() {
    $('td:contains("Vatsalya College")').on('click', function() {
      window.location.href = 'https://thevatsalyaschool.org/';
    }).css('cursor', 'pointer'); 
  });

  $('#registrationForm').submit(function(event) {
    event.preventDefault(); 

    var name = $('#name').val();
    var email = $('#email').val();
    var password = $('#password').val();
    var confirmPassword = $('#confirm-password').val();

    var isValid = true;

    if (name.trim() === '') {
      isValid = false;
      alert('Please enter your name.');
    }

    if (email.trim() === '') {
      isValid = false;
      alert('Please enter your email.');
    } else {
      var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        isValid = false;
        alert('Please enter a valid email address.');
      }
    }

    if (password.trim() === '') {
      isValid = false;
      alert('Please enter a password.');
    } else if (password.length < 8) {
      isValid = false;
      alert('Password must be at least 8 characters long.');
    }

    if (confirmPassword.trim() === '') {
      isValid = false;
      alert('Please confirm your password.');
    } else if (password !== confirmPassword) {
      isValid = false;
      alert('Passwords do not match.');
    }

    if (isValid) {

      alert('Registration successful!');
      $('#registrationForm')[0].reset(); 
    }
  });
});