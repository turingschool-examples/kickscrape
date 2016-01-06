var Nightmare = require('nightmare');

Nightmare()
  .goto('https://www.kickstarter.com/projects/728836843/codrone-learn-to-code-with-programmable-drone/description')
  .evaluate(function (){
    backers = $('#backers_count').data('backers-count');
    pledged = $('#pledged').data('pledged');
    goal = $('#pledged').data('goal');
    return {
      backers: backers,
      goal: goal,
      pledged: pledged
    };
  })
  .then(function(result) {
      console.log(result);
    })
  .end()