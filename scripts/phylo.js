$(document).ready(function(){
       $('#search-button').click(function() {
         $('.result').empty();
          //  $.ajax({
          //      url: 'http://en.wikipedia.org/w/api.php',
          //      data: { action: 'query', list: 'search', srsearch: $("input[name=search]").val(), format: 'json' },
          //      dataType: 'html',
          //      success: processResult
          //  });
           $.get($("input[name=search]",function(){
             var tableData = $("tr.infobox").children("td").map(function() {
                return $(this).text();
                
                alert(tabledata);
              }).get();
       });

      //  Para recuperar los datos de una tabla
       $("tr.myTable").click(function() {
        var tableData = $(this).children("td").map(function() {
          return $(this).text();
        }).get();

        console.log(tableData);
       });
   });

 function processResult(apiResult){
   var blob = new Blob([apiResult], {type: "text/plain;charset=utf-8"});
   var filename = "filename";
  //  saveAs(blob, filename+".txt");
  //  alert(apiResult.query.search.length);
    for (var i = 0; i < apiResult.query.search.length; i++){
         $('.result').append('<p>'+apiResult.query.search[i].title+'</p>');
    }
 }
