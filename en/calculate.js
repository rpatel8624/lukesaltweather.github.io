var Calculate = function(phrase) {
  if(phrase != null){ 
    phrase = phrase.toLowerCase();
    switch(phrase){
    case "hello":
    case "good afternoon" :
    case "hi" :
	case "howdy" :
      var answer = ["hi .", "hello .", "welcome ."];
	  var randomNumber = Math.floor(Math.random()*answer.length);
      return answer[randomNumber];
    
    case "what are your commands" :
      var answer = " find the machine .";
      return answer;
  
    case "how are you" :
      var answer = "fine, what about you ?"
      return answer;
   default:
      answer = "i don't understand";
       return answer;
  
  }
  }
  else{
    answer = "An Error occured";
    return answer;
  }
}
