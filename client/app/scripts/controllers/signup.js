'use strict';

angular.module('clientApp')
	.controller('SignupCtrl', function () {

		var user, signup;

		signup = this;
		user = signup.user = {};

		// This is our method that will post to our server.
		signup.submit = function () {
			
			// Make sure all fields are filled out...
			if (
				!user.firstname ||
				!user.lastname ||
				!user.email ||
				!user.password1 ||
				!user.password2
			) {
				window.alert('Please fill out all form fields.');
				return false;
			}

			// make sure the passwords match match
			if (user.password1 !== user.password2) {
				window.alert('Your passwords must match.');
				return false;
			}

			// Just so we can confirm that the bindings are working
			console.log(user);

			/*
			// Make the request to the server
			var request = $http.post('/signup', user);

			// we'll come back to here and fill in more when ready
			request.success(function (data) {
				// to be filled in on success
			});

			request.error(function (data) {
				// to be filled in on error
			});
			*/
		};
		
	});