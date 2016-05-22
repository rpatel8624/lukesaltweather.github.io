$State = {
    isText: false,
    wordTime: 750, // Time to display a word
    wordAnim: 150, // Time to animate a word
    randomInterval: 18000,
    lastRandomIndex: -1,
    randomTimer: null,
    lastMouseUp: -1
};
var recording = false;
	var mic = new Wit.Microphone(document.getElementById("microphone"));
     
      mic.onready = function () {
       console.log("Microphone is ready to record");
      };
      mic.onaudiostart = function () {
        console.log("Recording started");
        
      };
      mic.onaudioend = function () {
        console.log("stream ended");
      };
     
      mic.onerror = function (err) {
        executeSamaritan("Fatal Error detected. Please contact Admin");
      };
      mic.onconnecting = function () {
        console.log("Microphone is connecting");
      };
      mic.ondisconnected = function () {
       console.log("Microphone is not connected");
      };
        
    


// From Stack Overflow
// http://stackoverflow.com/questions/1582534/calculating-text-width-with-jquery
$.fn.textWidth = function(){
  var html_org = $(this).html();
  var html_calc = '<span>' + html_org + '</span>';
  $(this).html(html_calc);
  var width = $(this).find('span:first').width();
  $(this).html(html_org);
  return width;
};
function Record()
{
if(!$State.isText) {
    if (recording == false){
      mic.start();
      executeSamaritan("Recording_now");
      recording = true;
    }
    else {
    	mic.stop();
  	mic.onresult = function (intent, entities, response) {
  	console.log("Result: " + response.msg_body);
     	sentence = response.msg_body;
     	var answer = Calculate(sentence);
     	executeSamaritan("Calculating Response . .. ..." + answer);
  	};
  	recording = false;
}
        
}
else {
	return;
}
    }


function initSamaritan()
{

	var Init_Message = "Initalising Samaritan ... Samaritan initiated. Welcome to the open beta. What are your commands ?";
	executeSamaritan(Init_Message);
	mic.connect("XZXOIWC5TRUS6LIYQ7WRAC3ZZZU2RCRK");
	
	}
	
$(document).ready(function(){

    $State.triangle = $('#triangle');
    $State.text  = $('#main p');
    $State.line = $('#main hr');

    // Start the triangle blinking
    blinkTriangle();

   initSamaritan();

    $(document).bind("mouseup", function(){
        if ((Date.now() - $State.lastMouseUp) <= 500)
        {
            console.log("DblClick");
            if (screenfull.enabled) {
                screenfull.toggle();
            }
        }
        $State.lastMouseUp = Date.now();
    }).bind("click", function(){	Record(); });

    // And do a timed random phrase
   
})

var blinkTriangle = function()
{
    // Stop blinking if samaritan is in action
    if ($State.isText)
        return;
    $State.triangle.fadeTo(500, 0).fadeTo(500, 1, blinkTriangle);
}

var executeSamaritan = function(phrase, quit)
{
    if ($State.isText)
        return;

    $State.isText = true
    var phraseArray = phrase.split(" ");
    // First, finish() the blink animation and
    // scale down the marker triangle
    $State.triangle.finish().animate({
        'font-size': '0em',
        'opacity': '1'
    }, {
        'duration': $State.wordAnim,
        // Once animation triangle scale down is complete...
        'done': function() {
            var timeStart = 0;
            // Create timers for each word
            phraseArray.forEach(function (word, i) {
                var wordTime = $State.wordTime;
                if (word.length > 8)
                    wordTime *= (word.length / 8);
       
                setTimeout(function(){
                    // Set the text to black, and put in the word
                    // so that the length can be measured
                    $State.text.addClass('hidden').html(word);
                    // Then animate the line with extra padding
                    $State.line.animate({
                        'width' : ($State.text.textWidth() + 18) + "px"
                    }, {
                        'duration': $State.wordAnim,
                        // When line starts anmating, set text to white again
                        'start': $State.text.removeClass('hidden')
                    })
                }, (timeStart + $State.wordAnim));
                timeStart += wordTime;
            });

            // Set a final timer to hide text and show triangle
            setTimeout(function(){
                // Clear the text
                $State.text.html("");
                // Animate trinagle back in
                $State.triangle.finish().animate({
                    'font-size': '2em',
                    'opacity': '1'
                }, {
                    'duration': $State.wordAnim,
                    // Once complete, blink the triangle again and animate the line to original size
                    'done': function(){
                        $State.isText = false;
                

                        blinkTriangle();
                        $State.line.animate({
                            'width' : "30px"
                        }, {
                            'duration': $State.wordAnim,
                            'start': $State.text.removeClass('hidden')
                        })
                    }
                });
            },
            timeStart + $State.wordTime);
        }
    });

}
