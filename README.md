# team-repo-inst377
A repository for INST 377 team project.

README (top part of your README.md)

Safety Zone

Many individuals are unaware of the potential health concerns that exist in regards to food served at various foodservice facilities. Because of this, there have been cases of mass food poisioning for multiple food service facilities, making it important to find a method to inform people of facility inspection results. This way, people will be able to make a decision as to what they want to eat as they consider previous inspection results. In hopes to inform these individuals, our application, Safety Zone, will bring about food safety awareness by generating food places that comply or fail to comply within a certain mile radius of the user's location. The application will begin by asking the user to input a Zip Code or City address. The input will be used to retrieve a colelction of sorted data that will reveal food services that are tagged with varying levels of food inspection compliance results. (Then, these user will be able to filter the inspection results by various categories)

Our application is designed to function on all contemporary desktop browsers, as well as on both iOS and Android devices.

https://github.com/jrivera115/team-repo-inst377/blob/master/docs/user.md <Developer Manual (bottom half of your README.md)>

Developer manual:

How to install application and all dependencies: 

Requirements: 

1. Windows: 
    - Requirement to install all dependencies: Git Bash (recommended) or Terminal/Command Prompt, and Github Desktop
     - Git Bash allows you to make seamless Git integrations and handle backend and file management in one environment
2. Mac: 
   - Github desktop or you can simply use your own bash

Dependencies:

Nodejs & npm 
  1. Download and install: https://nodejs.org/en/download/ 
  2. Make a working directory for application, then type: npm init to create a package.json 
  3. In your working directory: Type on command line or bash: npm install node-fetch –save 
    -Node-fetch is required for fetching APIs from a web page.
    -– save (should be a double - ) is to save it in your package.json as a dependency 
    -Check if you have node and npm installed by doing:
      1. node -v
      2. npm -v

Express 
  1. In your directory: Type npm install express –save

Heroku CLI 
  1. Download Heroku here: https://devcenter.heroku.com/articles/getting-started-with-nodejs#set-up. You can follow their instruction        setup on this link. 

Instructions guide reference: https://scotch.io/tutorials/how-to-deploy-a-node-js-app-to-heroku

How to run your application on a server:
1. Create a Procfile. Name it Procfile with no extensions and write: web:node server.js (spaces might be important so be careful)
2. Log in to Heroku by typing this on your shell: heroku login
3. Create a Heroku remote repository by typing: heroku create i. You can also do “heroku create “ to make your own unique app name
4. To deploy your app type: git push heroku master

How to run any tests you have written for your software:
1. No tests written yet

The API for your server application
1. https://data.princegeorgescountymd.gov/resource/umjn-t2iz.json

Set of expectations around known bugs and a road-map for future development:
1. Making it mobile friendly
2. Potentially increasing scope of project, as currently only locations in Prince George’s County are shown
3. Add more filters to program so that users can input their preferences
