Title: Safety Zone

Team Members: Jonah Rivera, Nathan Kwon, Muhammad Jansen, Matthew Tung, Ebada Mun, Yineng Xia

Link to app: 

Information Problem: When people decide to go to foodservice facilities to eat food, often they are unaware of potential health concerns regarding the food that is served there. Because of this, there have been cases of mass food poisoning from various food service facilities, as the food they eat has been contaminated at some point. Thus, it is important to find a method to inform people of the results of facility inspections, so that they can make a decision of what to eat while considering previous inspection results and the reasons behind the findings of violations. While customers can search for this information online, it can be somewhat difficult, especially for lesser-known food service facilities, as the information in question is often difficult to access. Because of this, there is a need for a method to quickly lookup past inspections of food service facilities done by the government, and whether or not the foodservice facility has been approved as a safe place to eat.

Identified stakeholders:
The stakeholders in this project will be the general public, as they will be the ones most affected by food service facilities that are found to be in violation. We hope to inform the general public of food safety awareness using our application. 

Targeted Browsers:
Our target browsers are all the major internet browsers. Additionally, we plan to configure Safety Zone so that it works for both computers and mobile devices.

Data:
The dataset we have chosen is the Food Inspection at the Prince George’s County’s Open Portal Data. We will be using the dataset API called SODA which is available on their website.

Technical System Design Rationale:
We will be using Hypertext Markup Language (HTML) to construct the basic structure of the project and CSS to style. The HTML and CSS will tell the browser how to display the content of our project with different dimensions or scales of the page. However, throughout the process of completing the project, our team will use Javascript for interactiveness. We may also use the React and Leaflet library if it is required to improve the functionality of our current project at a certain moment in the future. This will be written in Visual Studio Code (VS Code), a code editor that is redefined and optimized for building and debugging modern web and cloud applications such as GitHub Repository. Additionally, Github will be used to collaborate on the coding aspects. Our targeted devices are personal computers (i.e., laptops, desktop computers) and mobile phones.
For the server-side programming, we will use the Node.js as part of the backend programming. This is the place for us to store our data in a database. To keep our data up-to-date from the Open Data Prince George’s County website, we will be using the SODA API that is available on the website. Even though the data is coming from PG county’s website, we might use MySQL to redesign our database and this is only when it is necessary. 
In conclusion, this project requires HTML, CSS, and JavaScript, to develop the structures of our project’s front-end. Then, VS Code, and GitHub as our medium or software to write, edit, collaborate and store our code. For server-side programming, we will be using SODA API, MySQL, and Node.js. However, all of the technology we stated are subject to change due to the complexity of our project.

Final System Justification:
Safety Zone will help users identify food service facilities nearby, as well as basic information about them (such as prices, type of food, customer reviews, etc). Most importantly, it will also display an updated record of their food inspection results, allowing users to know whether the food service facility they have chosen has been found to be in violation, and if so, if they have taken any actions to address it since. Thus, it will help users make an informed choice about which food service facilities to go to.

Challenges Faced and Impact on Final Design:
During the project, we realized that we misunderstood the deliverables when writing our project proposal, and had mistakenly believed that we needed to create three HTML pages, one for the index, one for the search page, and one for the results page. However, once we looked at the rubric and confirmed with our professor we realized that we didn't have to create separate HTML pages for the search and results, and decided to include both into the index HTML page. We then created additional HTML pages for explaining Safety Zone and how it works (About) and including documentation (Documentation). Additionally, we realized that we would need to include more features if we wanted people to use Safety Zone, as just having it output the results of food inspections is not enough. Because of this, we decided to implement a feature that would display factors such as location, cost, type of food, and other information that would assist users in making a decision on where to eat.

Possible Future Work Directions:

