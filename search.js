var Nightmare = require('nightmare');
var prettyjson = require('prettyjson');

Nightmare()
  .goto('https://www.kickstarter.com/discover/advanced?ref=nav_search&term=learn+to+code')
  .wait('.project a')
  .evaluate(extractData)
  .then(function(result) {
      console.log(prettyjson.render(result));
    }, function(err){
    console.log(err);
  })
  .end()

function extractData() {
  console.log($('.project a:first'));
  // return $.map($('.project a:first'), function($a){
  //   return $a.attr('href');
  // })
}