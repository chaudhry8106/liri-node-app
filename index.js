var Twitter = require('twitter');
 
var client = new Twitter({
  consumer_key: 'ZHoQhzC4It97ZYA2H72615X3a',
  consumer_secret: 'X75KSrVg0D4lCvlqz8d0iuFDoNzwUW7LOWHH9wQHdty2CqKOvC',
  access_token_key: '892179875070709760-KuSsPrFiO0X7SELBi8S8hnl12VnGs51',
  access_token_secret: 'aMzgliRlfjYgK64l3EO9jyMPAE5fjUPc4ImgNJUnKNNsd'
});
 
var params = {screen_name: 'chaudhry8106'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (error) {
    console.log(error);
  };
  // var tweets = JSON.parse(tweets);
  // console.log(tweets);

// var response = JSON.parse(response.body);
  // console.log(response);
  for (var i=0; i < tweets.length; i++) {
  console.log(tweets[i].created_at);
  console.log(tweets[i].text);
  }
});