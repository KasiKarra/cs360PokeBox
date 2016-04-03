// expose our config directly to our application using module.exports
module.exports = {

    'facebookAuth' : {
        'clientID'      : '1018921341531528', // The App ID
        'clientSecret'  : '0322e3a0e3df60ef6889cf01b9eb8cfe', // The App Secret
        'callbackURL'   : 'http://localhost:3000/auth/facebook/callback'
    },

    'twitterAuth' : {
        'consumerKey'       : 'U9sRLq0upcaLivfJx0CstEI5j',
        'consumerSecret'    : 'toOCsYWqXTVaCMY7FkPuNiELh72EDtUciy3VPwQpHLo2WvM6SY',
        'callbackURL'       : 'http://localhost:3000/auth/twitter/callback'
    },

    'googleAuth' : {
        'clientID'      : '751085559976-r4om04tjgicjd7d7ojvucfj1ofrl795s.apps.googleusercontent.com',
        'clientSecret'  : 't14U5SuRqQsOHoVXaVXELI_i',
        'callbackURL'   : 'http://localhost:3000/auth/google/callback'
    }

};