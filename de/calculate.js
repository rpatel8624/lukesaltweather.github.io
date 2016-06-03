var Calculate = function (phrase) {
    if (phrase != null) {
            $.ajax({
                type: "POST",
                url: baseUrl + "query/",
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                headers: {
                    "Authorization": "Bearer " + apiToken
                },
                data: JSON.stringify({ q: phrase, lang: "de" }),
                success: function (data) {
                    intent = data;
                     console.log(intent);
                },
                error: function () {
                    executeSamaritan("Ein fehler trat auf");
                }
            });
    }
    else {
        answer = "Ein Fehler trat auf .";
        return answer;
    }
}
