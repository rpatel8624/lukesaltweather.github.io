var Calculate = function(phrase) {
  var sentence = phrase.toLowerCase();
  if(sentence != null){
  switch(sentence){
    case "guten tag":
    case "servus" :
    case "hallo" :
      var answer = " Guten Tag .";
      return answer;
  
    case "wie geht es dir" :
      var answer = " Sehr gut, und dir ?"
      return answer;
   default:
      answer = " ich verstehe nicht";
       return answer;
  
  }}
  else{
    answer = "An Error occured";
    return answer;
  }
}
