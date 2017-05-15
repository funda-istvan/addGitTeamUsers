// Dependencies
var http = require("http");
var ghu = require("fs");
var request = require("request");
//empty array for your .txt file of GitHub usernames
var indGH = [];
// future: add in code to call the list of teams and get the team id
// currently: need to run curl below to find team id. Then insert into put request
//curl -H "Authorization: token <YOUR LONG TOKEN HERE>" https://api.github.com/orgs/<YOUR BOOTCAMP HERE>/teams



//reading the ghusername.txt file - change to correct cohort.txt
ghu.readFile("./cohort_ghusername.txt", "utf8", function(err, data) {
	indGH = data.split("\n");
	for (var i = 0; i < indGH.length; i++) {
		console.log(indGH[i].trim());
		//put request to Github to add each new username to the team
		request.put({
			url:"https://api.github.com/teams/<UNIQUE TEAM ID NUMBER HERE>/memberships/"+indGH[i].trim(), 
			headers:{
				'User-Agent': '<YOUR GITHUB USERNAME>',
				'Authorization': 'token <YOUR LONG TOKEN HERE>'
			}

		}, 
			function(err, resp, body){
			if (err){
				return console.error('upload failed:', err);
			}
			console.log("response:"+resp);
			console.log("body:"+body);
		});
	}
});
