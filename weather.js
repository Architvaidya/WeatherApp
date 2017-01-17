var request = require('request');

module.exports = function (location, callback) {
	var encodedLocation = encodeURIComponent(location);
	//var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + encodedLocation + '&units=imperial';
	var url = 'http://api.openweathermap.org/data/2.5/weather?q='+encodedLocation+',uk&appid=6263ba661fb69010c1fceb87b78e74de'
	if (!location) {
		return callback('No location provided');
	}

	request({
		url: url,
		json: true
	}, function (error, response, body) {
		if (error) {
			callback('Unable to fetch weather.');
		} else {
			//console.log(JSON.stringify(body),4);
			callback('It\'s ' + body.main.temp + ' in ' + body.name + '!');
		}
	});
}