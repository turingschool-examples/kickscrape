var Nightmare = require('nightmare');

Nightmare()
  .goto('https://www.kickstarter.com/projects/728836843/codrone-learn-to-code-with-programmable-drone/description')
  .evaluate(function (){
    return $('title:first').text();
  })
  .then(function(result) {
      console.log(result);
    })
  .end()