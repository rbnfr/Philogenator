$(document).ready(function(){
       $('#search-button').click(function() {
         $('.result').empty();
           $.ajax({
               url: 'http://en.wikipedia.org/w/api.php',
               data: { action: 'query', list: 'search', srsearch: $("input[name=search]").val(), format: 'json' },
               dataType: 'jsonp',
               success: processResult
           });
       });
   });

 function processResult(apiResult){
    for (var i = 0; i < apiResult.query.search.length; i++){
         $('.result').append('<p>'+apiResult.query.search[i].title+'</p>');
    }
 }
