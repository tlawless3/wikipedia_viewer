var searchTerm = "";


$(document).ready(function(){
  $("#search").bind("keypress", {}, keypressInBox);
});

function keypressInBox(e) {
    var code = (e.keyCode ? e.keyCode : e.which);
    if (code == 13) {
        e.preventDefault();
        searchTerm = $("#search").val();
         $(".results").html("");
        searchWiki(searchTerm);
        $(this).val('');
    }
};

function searchWiki(searchTerm){ 
  var searchURL = ("https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchTerm + "&format=json&limit=10&callback=?");
  $.getJSON(searchURL , function(data){
     for(var i = 0; i < data[1].length; i++){
      $(".results").append("<hr></hr><p><a target='blank' href=" + data[3][i] + "><span id = 'wikiTitle'>" + data[1][i] + " </span></a><span id ='wikiText'>" + data[2][i] + "</span>");
    }
  });
};