var find = function() {
    var oData;
    var sMovie = document.getElementById("movie").value;
    var sUrl = 'http://www.omdbapi.com/?t=' + sMovie + '&y=&plot=short&r=json';
    $.ajax(sUrl, {
        complete: function(p_oXHR, p_sStatus) {
          oData = $.parseJSON(p_oXHR.responseText);
          if (oData.Response === "True") {
            document.getElementById("area").style.visibility = "visible";
            document.getElementById("invalid").style.visibility = "hidden";
            // poster
            document.getElementById("posterDisplay").src = oData.Poster;
            document.getElementById("posterDisplay").style.verticalAlign = "middle";
            document.getElementById("info").style.verticalAlign = "middle";
            // info
            document.getElementById("info").innerHTML =
              oData.Title + " (" + oData.Year + ")" + "<br>Directed by " + oData.Director + "<br>Genre - " + oData.Genre + "<br>Lead actors - " + oData.Actors + "<br>" + oData.Awards + "<br><br>Plot - " + oData.Plot + "<br><br>Metascore - " + oData.Metascore + "<br>IMDb Rating - " + oData.imdbRating;
          } else {
            document.getElementById("area").style.visibility = "hidden";
            document.getElementById("invalid").style.visibility = "visible";
          }
          }
        });
    }
