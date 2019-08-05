const say = require('say')
const cron = require('node-cron');

// say.speak('Hello!','Its 2 o clock')



// var cronSchedule = '0 * * * * *'
// var cronSchedule = '0 * * * *'
var cronSchedule = '* * * * *'


var task = cron.schedule(cronSchedule, () => {
  var hours = new Date().getHours()
  var minutes = new Date().getMinutes()
  if (hours > 12) {
    hours = hours - 12;
    text = hours.toString() + " " + minutes.toString() + " " + "pm"
  } else {
    text = hours.toString() + minutes.toString() + "am"
  }


  text = "Its " + text
  console.log("text: ", text);

  say.speak(text, (err) => {
    if (err) {
      return console.error(err)
    }

    console.log('Text has been spoken.')
  });
});


task.start()
