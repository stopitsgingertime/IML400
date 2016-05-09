
console.log("...javascript {main.js} loaded...");

// var spotify_URL_BASE = ("https://api.spotify.com/v1/artists/" + artistID + "top-tracks?country=US");

var spotifyArtistURL = "https://api.spotify.com/v1/search"
var result = null;
var theArtistID = null;
var result2 = null;

function onClear() {
    $("#results").empty();
    $("#results").append(msg_results);
}

function getParameterByName(name, url) {
    if (!url) url = window.location.src;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}


function getTrackID(thisSrc) {


    var trackID = getParameterByName('uri',thisSrc).split(":")[2];

  
    console.log(trackID);
    return trackID;
}


function getArtistID(thisSrc) {
    var trackURL = "https://api.spotify.com/v1/tracks/" + getTrackID(thisSrc);
    return $.get(trackURL).then(function(trackInfo){
        console.log("trackInfo", trackInfo)
        var artistID = trackInfo.artists[0].id;
        console.log(artistID); 
        return artistID;
    });
}




function getRelatedArtist (thisSrc) {
    return getArtistID(thisSrc).then(function(artistID) {
        
    console.log("artistID", artistID);
        var relatedURL = "https://api.spotify.com/v1/artists/" + artistID + "/related-artists";
        return $.get(relatedURL).then(function(relatedArtists){
            console.log("relatedArtists", relatedArtists)
            var topArtist = relatedArtists.artists[0].id;
            console.log(topArtist);
            return topArtist;

        });
    });

}

function getTopTracks (thisSrc) {

   return getRelatedArtist(thisSrc).then(function(topArtist) {
        console.log("topArtist", topArtist);

        var trackURL = "https://api.spotify.com/v1/artists/" + topArtist + "/top-tracks?country=US";
        return $.get(trackURL).then(function(topTracks) {
            console.log("topTracks", topTracks);
            var theTrack = topTracks.tracks[0].id;
            console.log("theTrack", theTrack);
            return theTrack;

        });

    });
}

function appendItem (thisSrc, thisResults) {

    getTopTracks(thisSrc).then(function(theTrack){
        console.log("theTrack", theTrack);


        var iframestring = '<div class="module"><iframe class="spotify" src="https://embed.spotify.com/?uri=spotify%3Atrack%3A' + theTrack + '" width="300" height="100" frameborder="0" allowtransparency="true"></iframe></div>';
         thisResults.append(iframestring);
          console.log("iframestring", iframestring);
    }


        )

}



