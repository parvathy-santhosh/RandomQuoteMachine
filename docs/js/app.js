var thisQuote;

$('#new-quote').on('click', function(e) {
    e.preventDefault();
    getQuote();
});

function getQuote(){
  var quoteRequestTimeOut = setTimeout(function(){
            $('#text').text('... failed to load.');
            $('#author').html('Please check internet connectivity');
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

getQuote();

$('#tweet-quote').on('click', function(e){
  e.preventDefault();
  let quote = $('#text').text() + ' - ' + $('#author').text();
  let url = 'https://twitter.com/intent/tweet?text=' + quote;
  window.open(url, '_blank');
});
