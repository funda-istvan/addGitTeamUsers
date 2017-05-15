# addGitTeamUsers
Add your new cohort to your GitHub team with only a .txt file of usernames

Run the Salesforce report for your cohort, including GitHub usernames
Clone this repository
Copy and paste the username column into your cohort_ghusername.txt
All usernames should be on their own line.

Create an authorization token with GitHub, allowing access to read/write/edit. 
To create your authorization key:
https://github.com/blog/1509-personal-api-tokens
Click 'create your own personal API tokens' hyperlink
Click 'Generate a personal access token' hyperlink
Write 'Add Users to Team' in Token Decription
Check boxes for 'repo', 'admin:org', 'user'
Click 'Generate token'
Save token in a safe place.

In your terminal: 'curl -H "Authorization: token <YOUR LONG TOKEN HERE>" https://api.github.com/orgs/<YOUR BOOTCAMP HERE>/teams' 
Scroll through the possible teams and get to get your unique team id number. 

Open addtoGH.js in your text editor (Sublime). 
Insert token, team ID, and your own username into the specific <>.
