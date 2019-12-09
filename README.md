# team-repo-inst377
A repository for INST 377 team project.

README (top part of your README.md)

Safety Zone

Many individuals are unaware of the potential health concerns that exist in regards to food served at various foodservice facilities. Because of this, there have been cases of mass food poisioning for multiple food service facilities, making it important to find a method to inform people of facility inspection results. This way, people will be able to make a decision as to what they want to eat as they consider previous inspection results. In hopes to inform these individuals, our application, Safety Zone, will bring about food safety awareness by generating food places that comply or fail to comply within a certain mile radius of the user's location. The application will begin by asking the user to input a Zip Code or City address. The input will be used to retrieve a colelction of sorted data that will reveal food services that are tagged with varying levels of food inspection compliance results. (Then, these user will be able to filter the inspection results by various categories)

<Description of target browsers (iOS? Android? Which ones?)>

https://github.com/jrivera115/team-repo-inst377/blob/master/docs/user.md <Developer Manual (bottom half of your README.md)>

Developer manual:

How to install application and all dependencies: Requirements: a. Windows: i. Requirement to install all dependencies: Git Bash (recommended) or Terminal/Command Prompt, and Github Desktop
Git Bash allows you to make seamless Git integrations and handle backend and file management in one environment b. Mac: i. Github desktop or you can simply use your own bash (I think? idk)
Dependencies:

Nodejs & npm a. Download and install: https://nodejs.org/en/download/ b. Make a working directory for application, then type: npm init to create a package.json c. In your working directory: Type on command line or bash: npm install node-fetch –save i. Node-fetch is required for fetching APIs from a web page. ii. – save (should be a double - ) is to save it in your package.json as a dependency iii. Check if you have node and npm installed by doing:
node -v
npm -v
Express a. In your directory: Type npm install express –save
Heroku CLI a. Download Heroku here: https://devcenter.heroku.com/articles/getting-started-with-nodejs#set-up. You can follow their instruction setup on this link. Instructions guide reference: https://scotch.io/tutorials/how-to-deploy-a-node-js-app-to-heroku
How to run your application on a server: a. Create a Procfile. Name it Procfile with no extensions and write: web:node server.js (spaces might be important so be careful) b. Log in to Heroku by typing this on your shell: heroku login c. Create a Heroku remote repository by typing: heroku create i. You can also do “heroku create “ to make your own unique app name d. To deploy your app type: git push heroku master
How to run any tests you have written for your software: a. No tests written yet
The API for your server application a. https://data.princegeorgescountymd.gov/resource/umjn-t2iz.json
Set of expectations around known bugs and a road-map for future development: a. Making it mobile friendly b. Potentially increasing scope of project, as currently only locations in Prince George’s County are shown c. Add more filters to program so that users can input their preferences
