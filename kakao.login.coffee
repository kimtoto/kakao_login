if typeof kakaotalk_login == 'undefined'
  kakaotalk_login = {}
(($) ->
  'use strict'
  #<![CDATA[
  _config =
    api_key: ''
    url: ''
  Kakao.init _config.api_key
  Kakao.Auth.createLoginButton
    container: '#kakao-login-btn'
    success: (authObj) ->
      kakaotalk_token = JSON.stringify(authObj['access_token'])
      kakaotalk_login.access.call this, kakaotalk_token
      return
    fail: (err) ->
      alert JSON.stringify(err)
      return

  kakaotalk_login.access = (kakaotalk_token) ->
    $.ajax
      url: _config.url
      type: 'GET'
      data: kakaotalk_token: kakaotalk_token
      dataType: 'json'
      success: (data, xhr, testStatus) ->
        objDate = JSON.parse(data)
        console.log objDate
        return
      error: (exception) ->
        console.log exception
        return
    return

  #]]>
  return
) jQuery
