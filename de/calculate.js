var Calculate = function (phrase) {
    if (phrase != null) {
    	var text = phrase;
            $.ajax({
				type: "POST",
				url: baseUrl + "query/",
				contentType: "application/json; charset=utf-8",
				dataType: "json",
				headers: {
					"Authorization": "Bearer " + accessToken
				},
				data: JSON.stringify({ q: text, lang: "de" }),
				success: function(data) {
					console.log(JSON.stringify(data, undefined, 2));
					executeSamaritan(handleIntent(data));
				},
				error: function() {
					executeSamaritan("Internal Server Error");
				}
			});
			executeSamaritan("Loading...");
			return;
		
    }
    else {
        executeSamaritan("ein fehler trat auf");
        return;
    }
}
var handleIntent = function(rawIntent) {
	intent = rawIntent.intent;
	return intent;
}
