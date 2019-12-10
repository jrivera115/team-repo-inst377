# Safety Zone

Many individuals are unaware of the potential health concerns that exist in regards to food served at various food service facilities. Because of this, there have been cases of mass food poisioning for multiple food service facilities, making it important to find a method to inform people of facility inspection results. This way, people will be able to make a decision as to what they want to eat as they consider previous inspection results. In hopes to inform these individuals, our application, Safety Zone, will bring about food safety awareness by generating food places that comply or fail to comply within a certain mile radius of the user's location. The application will begin by asking the user to input a Zip Code or City address. The input will be used to retrieve a collection of sorted data that will reveal food services that are tagged with varying levels of food inspection compliance results.

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
[NPM documentation](https://docs.npmjs.com/)


##### Express 
  1. In your directory, type on cmd/bash:
```
    npm install express –-save
```
  2. To use the POST request install bodyParser. In your directory, type on cmd/bash:
```
    npm install –-save body-parser
```
  
[Express documentation](https://expressjs.com/)
POST installation guide reference: https://codeforgeek.com/handle-get-post-request-express-4/

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
2. [Leaflet](https://leafletjs.com/)
3. List of functions we created on the front end:
    - Function `myList(res)`
        - Creates list of food facilities based on user input
        - Parameters: res (the data)  
        - Outputs list of food facilities and the list will automatically updated once a new search is performed.

    - Function `loadOption(inputs)`
        - Allows user to choose between searching by city name or zip code
        - Parameters: inputs (the value of the user input)
        - Outputs list of food facilities in area searched as well as map, unless nothing was inputted, in which case it outputs “Please  Enter a City or Zipcode”

    - Function `loadData(inputs)`
        - Loads food facilities list corresponding to chosen zip code or city
        - Parameters: inputs (the value of the user input)
        - Outputs list of food facilities with the corresponding zip code or city, as well as result of most recent food inspection and its date

    - Function `loadMap(inputs)`
        - Loads map with markers of inputted city or zip code
        - Parameters: inputs (the value of the user input)
        - Outputs a map with markers corresponding with each facility located in the inputted city or zip code. The marker also shows the address of the facilities when its clicked. If the user inputs another city or zip code, then the container empties the id of the HTM, so the map gets updated accordingly. Also to use mapbox, we needed to get an access token from the map box website.

4. API end points on server.js:

    - `app.get`
        - GET request
        - See [Express API](https://expressjs.com/en/4x/api.html) for detailed information
        - Gets the data from the Prince George's County Maryland Data website

    - `app.post`
        - POST request
        - See [Express API](https://expressjs.com/en/4x/api.html) for detailed information
        - This does not work. Only outputs a json formatted message.

    - `app.put`
        - PUT request
        - See [Express API](https://expressjs.com/en/4x/api.html) for detailed information
        - This does not work. Only outputs a json formatted message.
These end points were tested on Postman. Status: 200 OK.


#### Set of expectations around known bugs and a road-map for future development:
1. Making it more mobile friendly (Currently does not format correctly on mobile devices, although functionality is still present)
2. Potentially increasing the scope of project, as currently only locations in Prince George’s County are used 
3. Add more filters to the program so that users can input their preferences
