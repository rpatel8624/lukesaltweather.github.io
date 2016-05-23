var Calculate = function(phrase) {
  var sentence = phrase.toLowerCase();
  if(sentence != null){
    $.ajax({
  url: 'https://api.wit.ai/converse?v=20160523',
  data: {
    'q': sentence,
    'access_token' : 'XZXOIWC5TRUS6LIYQ7WRAC3ZZZU2RCRK'
  },
  dataType: 'jsonp',
  method: 'POST',
  success: function(response) {
      console.log("success!", response);
  }
});
    
  }
  else{
    answer = "An Error occured";
    return answer;
  }
}
