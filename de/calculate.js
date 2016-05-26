var Calculate = function(phrase) {
  if(phrase != null){ 
    phrase = phrase.toLowerCase();
    switch(phrase){
    case "guten tag":
    case "servus" :
    case "hallo" :
      var answer = ["guten tag .", "hallo .", "willkommen"];
	  var randomNumber = Math.floor(Math.random()*answer.length);
      return answer[randomNumber];
    
    case "wie lauten deine befehle" :
      var answer = " finde die maschine .";
      return answer;
  
    case "wie geht es dir" :
      var answer = " Sehr gut, und dir ?"
      return answer;
   default:
      answer = " ich verstehe nicht";
       return answer;
  
  }
  }
  else{
    answer = "Ein Fehler trat auf .";
    return answer;
  }
}
