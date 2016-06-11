var Calculate = function (phrase) {
    if (phrase != null) {
            var intent;
            $.ajax({
				type: "POST",
				url: baseUrl + "query/",
				contentType: "application/json; charset=utf-8",
				dataType: "json",
				headers: {
					"Authorization": "Bearer " + accessToken
				},
				data: JSON.stringify({ q: phrase, lang: "de" }),
				success: function(data) {
					console.log(JSON.stringify(data, undefined, 2));
				},
				error: function() {
					console.log("Internal Server Error");
				}
			});
    }
    else {
        answer = "Ein Fehler trat auf .";
        return answer;
    }
}
