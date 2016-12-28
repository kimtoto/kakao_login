if (typeof kakaotalk_login == 'undefined') { var kakaotalk_login = {}; }
(function($) {
  'use strict';
  //<![CDATA[
    var _config = {
        api_key: '',
        url: ''
    };

    Kakao.init(_config.api_key);
    Kakao.Auth.createLoginButton({
      container: '#kakao-login-btn',
      success: function(authObj) {
         var kakaotalk_token = JSON.stringify(authObj['access_token']);
         kakaotalk_login.access.call(this,kakaotalk_token);
      },
      fail: function(err) {
         alert(JSON.stringify(err));
      }
    });

    kakaotalk_login.access = function(kakaotalk_token) {
        $.ajax({
          url: _config.url,
          type: 'GET',
          data: {
              kakaotalk_token: kakaotalk_token
          },
          dataType: 'json',
          success: function(data, xhr, testStatus) {
              var objDate = JSON.parse(data);
              console.log(objDate);
          },
          error: function(exception) {
              console.log(exception);
          }
        });
    };
  //]]>
})(jQuery);
