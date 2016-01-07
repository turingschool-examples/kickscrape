var Nightmare = require('nightmare');
var prettyjson = require('prettyjson');

Nightmare()
  .goto('https://www.kickstarter.com/projects/728836843/codrone-learn-to-code-with-programmable-drone/description')
  .click('.js-load-project-content')
  .wait('.js-project-rewards')
  .evaluate(extractData)
  .then(function(result) {
      console.log(prettyjson.render(result));
    }, function(err){
      console.log(err);
    })
  .end()

function extractData (){
  backers = $('#backers_count').data('backers-count');
  pledged = $('#pledged').data('pledged');
  goal = $('#pledged').data('goal');

  rewards = $.map($('.js-project-rewards li'), function(reward){
    return {
      pledge: $(reward).find(".pledge__currency-conversion").text().match(/\d+/)[0],
      description: $(reward).find(".pledge__reward-description").text().trim()
    }
  })
  
  return {
    backers: backers,
    goal: goal,
    pledged: pledged,
    rewards: rewards
  };
}
