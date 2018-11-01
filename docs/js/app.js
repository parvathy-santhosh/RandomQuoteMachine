var thisQuote;

$('#new-quote').on('click', function(e) {
    e.preventDefault();
    getQuote();
});

function getQuote(){
  var quoteRequestTimeOut = setTimeout(function(){
            $('#text').text('... failed to load.');
            $('#author').html('<br/>');
  }, 8000);
  $.ajax( {
    url: 'https://talaikis.com/api/quotes/random/',
    success: function(data) {
      // The data is an array of posts. Grab the first one.
      $('#text').text(data.quote);
      $('#author').text(data.author);
      clearTimeout(quoteRequestTimeOut);
    },
    cache: false
  });
}
