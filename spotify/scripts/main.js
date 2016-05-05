
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


function onSubmit() {
    var query = $("#query").val();
    var myArtistReq = formatArtistIDQuery(query);

    var theurl = spotifyArtistURL + "?query=" + encodeURIComponent( query ) +
                 "&offset=0&limit=20&type=artist";

    console.log("our url = " + theurl);
 // $.getJSON( spotifyArtistURL, myArtistReq).done( gotArtistIDData ).fail( onJSONFail );

    $.getJSON( theurl).done( gotArtistIDData ).fail( onJSONFail );
}


function formatArtistIDQuery ( artistName ) {
    var artist = encodeURIComponent(artistName);

    var myArtistReq = {"q":artist,
                        "type":"artist"};

    console.log(artist)
                        
    return myArtistReq;

}

// this will get called when the artist id data comes back from spotify
// now get the artist id from the data...
// look at the properties in the chrome dev tools
function gotArtistIDData( returnedData ) {
    
    result = returnedData;
    console.log( returnedData )
    theArtistID = result.artists.items[0].id;

    
    var spotify_URL_BASE = ("https://api.spotify.com/v1/artists/" + theArtistID + "/top-tracks?country=US");
$.getJSON(spotify_URL_BASE).done( gotTopSongs );

}

function gotTopSongs( data ) {
    result2 = data;
    console.log('i got it!!!!');
    $("#results").empty();

for (i=0; i < result2.tracks.length; i++) {
if (i > 2) { break;}

    var song = result2.tracks[i];

    // <a href="http://somelink.com">linkName</a>

    var imgurl = '<div class="photo"><img width ="200" src=" ' + song.album.images[0].url 
    + '"> <p><a href="' + song.external_urls.spotify + '">' + song.album.name + '</a></p> </div>';
    console.log("image url = " + imgurl)
    $aResult = $(imgurl);

 $("#results").append($aResult);

    }

   

}





