$(document).ready(function(){
  $.getJSON("demo_ajax_json.js", function(result){
    $.each(result, function(i, field){
      $("#table").append("<tr><td>" + i + "</td><td>" + field["d"] + "</td><td>" + field["a"] + "</td><td>" + field["v"] + '</td><td><a href="https://github.com/Webdeskme/termibase_market/wiki">Docs</a></td><td><a href="https://github.com/Webdeskme/termibase_market/blob/master/market/' + i +'">Download</a></td></tr>');
    });
  });
});
