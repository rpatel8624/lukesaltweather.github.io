function Record() {
if(!$State.isText) {
      mic.start();
      executeSamaritan(recordmsg);
    }
else {
	return;
}
}
function initSamaritan() {
     executeSamaritan(Init_Message);
    mic.connect(contoken);
}
function stopRecord()
{
    executeSamaritan(calmsg);
    mic.stop();
  	mic.onresult = function (intent, entities, response) {
  	console.log("Asset-Input: " + response.msg_body);
    sentence = response.msg_body;
    var answer = Calculate(sentence);
    setTimeout(function(){executeSamaritan(answer);});
    }
}
$State = {
    isText: !1,
    wordTime: 750,
    wordAnim: 150,
    lastMouseUp: -1
};

    var mic = new Wit.Microphone(document.getElementById("microphone"));
var recording = false;
mic.onerror = function(t) {
    executeSamaritan(errmsg), console.log(t)
}, $.fn.textWidth = function() {
    var t = $(this).html(),
        e = "<span>" + t + "</span>";
    $(this).html(e);
    var n = $(this).find("span:first").width();
    return $(this).html(t), n
}, $(document).ready(function() {
    $State.triangle = $("#triangle"), $State.text = $("#main p"), $State.line = $("#main hr"), blinkTriangle(), initSamaritan(),    
    $(document).bind("mousedown", function() {
        Record();
        recording = true;
    }).bind("mouseup", function() {
        if ((Date.now() - $State.lastMouseUp) <= 500)
        {
           executeSamaritan("Stop");
        }
        else{
        if(recording == true){
        stopRecord();
        }
        }
    }).bind("dblclick", function(){
        if (screenfull.enabled) {
                screenfull.toggle();
            }
    })
});
var blinkTriangle = function() {
        $State.isText || $State.triangle.fadeTo(500, 0).fadeTo(500, 1, blinkTriangle)
    },
    executeSamaritan = function(t, e) {
        if (!$State.isText) {
            $State.isText = !0;
            var n = t.split(" ");
            $State.triangle.finish().animate({
                "font-size": "0em",
                opacity: "1"
            }, {
                duration: $State.wordAnim,
                done: function() {
                    var t = 0;
                    n.forEach(function(e, n) {
                        var i = $State.wordTime;
                        e.length > 8 && (i *= e.length / 8), setTimeout(function() {
                            $State.text.addClass("hidden").html(e), $State.line.animate({
                                width: $State.text.textWidth() + 18 + "px"
                            }, {
                                duration: $State.wordAnim,
                                start: $State.text.removeClass("hidden")
                            })
                        }, t + $State.wordAnim), t += i
                    }), setTimeout(function() {
                        $State.text.html(""), $State.triangle.finish().animate({
                            "font-size": "2em",
                            opacity: "1"
                        }, {
                            duration: $State.wordAnim,
                            done: function() {
                                $State.isText = !1, blinkTriangle(), $State.line.animate({
                                    width: "30px"
                                }, {
                                    duration: $State.wordAnim,
                                    start: $State.text.removeClass("hidden")
                                })
                            }
                        })
                    }, t + $State.wordTime)
                }
            })
        }
    };
