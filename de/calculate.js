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
					var answer = funktional;
				},
				error: function() {
					console.log("Internal Server Error");
				}
			});
			console.log("Loading...");
			return answer;
		}
    }
    else {
        answer = "Ein Fehler trat auf .";
        return answer;
    }
}
