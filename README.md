# Safety Zone

Many individuals are unaware of the potential health concerns that exist in regards to food served at various foodservice facilities. Because of this, there have been cases of mass food poisioning for multiple food service facilities, making it important to find a method to inform people of facility inspection results. This way, people will be able to make a decision as to what they want to eat as they consider previous inspection results. In hopes to inform these individuals, our application, Safety Zone, will bring about food safety awareness by generating food places that comply or fail to comply within a certain mile radius of the user's location. The application will begin by asking the user to input a Zip Code or City address. The input will be used to retrieve a collection of sorted data that will reveal food services that are tagged with varying levels of food inspection compliance results.

Our application is designed to function on all contemporary desktop browsers, as well as on both iOS and Android devices.
- Link to our page: https://safetyzone-demo.herokuapp.com/
- [User Manual](https://github.com/jrivera115/team-repo-inst377/blob/master/docs/user.md)
- [Developer Manual](https://github.com/jrivera115/team-repo-inst377#developer-manual)
- [Final Report](https://github.com/jrivera115/team-repo-inst377/blob/master/docs/final.md)

## Developer manual: 

How to install application and all dependencies: 

### Requirements: 

1. Windows: 
    - Requirement to install all dependencies: Git Bash (recommended) or Terminal/Command Prompt, and Github Desktop
        - Git Bash allows you to make seamless Git integrations and handle backend and file management in one environment
2. Mac: 
   - Github desktop or you can simply use your own bash
   

### Dependencies:

##### Nodejs & npm 
  1. Download and install: https://nodejs.org/en/download/ 
  2. Make a working directory for the application, then create a package.json by entering this command on GitBash: 
  ```
    npm init 
  ```
  3. In your working directory, node-fetch is required for fetching APIs from a web page. Type on command line or bash: 
```
    npm install node-fetch –-save 
```
`--save` saves node-fetch in your package.json as a dependency. 

Check if you have node and npm installed by doing:
```
      node -v
      npm -v 
```


##### Express 
  1. In your directory, type on cmd/bash:
```
    npm install express –-save
```


##### Heroku CLI 
  1. Download Heroku. You can follow their instruction setup on: https://devcenter.heroku.com/articles/getting-started-with-nodejs#set-up.
2. Check if you have Heroku downloaded: `heroku -v`
3. For Heroku commands: `heroku`

Instructions guide reference: https://scotch.io/tutorials/how-to-deploy-a-node-js-app-to-heroku


#### How to run your application on a server:
1. Create a Procfile. Name it Procfile with no file extensions and write: web:node server.js (spaces might be important so be careful)
2. Log in to Heroku by typing this on cmd/bash: 
```
    heroku login
```

3. Create a Heroku app: 
```
    heroku create
```
You can also do `heroku create <unique app name here>` to make your own unique app name
   
4. To deploy your app, type: 
```
    git push heroku master
```
5. To deploy the app locally, type:
``` npm start ``` 
You can also install the npm package, `nodemon`. The documentation is found on this link: https://www.npmjs.com/package/nodemon


#### How to run any tests you have written for your software:
1. No tests written yet


#### API we used for our server application
1. https://data.princegeorgescountymd.gov/resource/umjn-t2iz.json


#### Set of expectations around known bugs and a road-map for future development:
1. Making it more mobile friendly 
2. Potentially increasing the scope of project, as currently only locations in Prince George’s County are used 
3. Add more filters to the program so that users can input their preferences
