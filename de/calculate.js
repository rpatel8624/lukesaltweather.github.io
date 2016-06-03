var Calculate = function (phrase) {
    if (phrase != null) {
            var intent = $.ajax({
                type: "POST",
                url: baseUrl + "query/",
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                global: false,
                headers: {
                    "Authorization": "Bearer " + apiToken
                },
                data: JSON.stringify({ q: phrase, lang: "de" }),
                success: function (data) {
                    return data;
                },
                error: function () {
                    executeSamaritan("Ein fehler trat auf");
                }
            }).responseText;
            console.log(intent);
    }
    else {
        answer = "Ein Fehler trat auf .";
        return answer;
    }
}
