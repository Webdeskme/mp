$(document).ready(function(){
  $.getJSON("https://raw.githubusercontent.com/Webdeskme/termibase_market/master/market.json", function(result){
    $.each(result, function(i, field){
      $("#table").append("<tr><td>" + i + "</td><td>" + field["d"] + "</td><td>" + field["a"] + "</td><td>" + field["v"] + '</td><td><a href="https://github.com/Webdeskme/termibase_market/wiki/' + i + '" target="_blank">Docs</a></td><td><a href="https://github.com/Webdeskme/termibase_market/blob/master/market/' + i +'" target="_blank">Download</a></td></tr>');
    });
  });
});
