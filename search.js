var Nightmare = require('nightmare');
var prettyjson = require('prettyjson');

Nightmare()
  .goto('https://www.kickstarter.com/discover/advanced?ref=nav_search&term=learn+to+code')
  .wait('.project a')
  .evaluate(extractData)
  .then(function(result) {
      console.log(result);
    }, function(err){
    console.log(err);
  })
  .end()

function extractData() {
  return $.map($('.project'), function(project){
    return $(project).find('a:first').attr('href');
  })
}