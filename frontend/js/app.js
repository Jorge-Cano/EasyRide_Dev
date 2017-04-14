window.addEventListener('load', function() {

  // var options = {
  //                   theme: {
  //                       logo: 'imagelogo.png',
  //                       primaryColor: '#8AD9BB',
  //                       foregroundColor: "#000000"
  //                   },
  //                   closable: false,
  //                   languageDictionary: {
  //                       emailInputPlaceholder: "test@email.com",
  //                       title: ""
  //                   },
  //                   auth: {
  //                       redirectUrl: '<%= env.AUTH0_CALLBACK_URL %>',
  //                       responseType: 'code',
  //                       params: {
  //                           scope: 'openid name email picture'
  //                       }
  //                   }
  //               };

  var lock = new Auth0Lock('cQGdAfq6ZAF2BZuLRx1TDrmU4D9NrhCU', 'jacinaustin.auth0.com');
  // ^add <,options' after jacinaustin.auth0.com>

  // buttons
  var btn_login = document.getElementById('btn-login');
  var btn_logout = document.getElementById('btn-logout');

  btn_login.addEventListener('click', function() {
    lock.show();
  });

  btn_logout.addEventListener('click', function() {
    logout();
  });

// Auth0
  lock.on("authenticated", function(authResult) {
    lock.getProfile(authResult.idToken, function(error, profile) {
      if (error) {
        // Handle error
        return;
      }
      localStorage.setItem('id_token', authResult.idToken);
      //Below is in the Growler App stringify profile token?
      localStorage.setItem('profile', JSON.stringify(profile));
      console.log(localStorage.getitem("profile"));
      // Display user information
      show_profile_info(profile);
    });
  });

  //retrieve the profile:
  var retrieve_profile = function() {
    var id_token = localStorage.getItem('id_token');
    if (id_token) {
      lock.getProfile(id_token, function (err, profile) {
        if (err) {
          return alert('There was an error getting the profile: ' + err.message);
        }
        // Display user information
        show_profile_info(profile);
      });
    }
  };

  var show_profile_info = function(profile) {
    var avatar = document.getElementById('avatar');
    document.getElementById('nickname').textContent = profile.nickname;
    btn_login.style.display = "none";
    avatar.src = profile.picture;
    avatar.style.display = "block";
    btn_logout.style.display = "block";
  };

  var logout = function() {
    localStorage.removeItem('id_token');
    window.location.href = "/";
  };

  retrieve_profile();
});
