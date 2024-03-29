# PeopleAPI

NodeJS API that is made to handle information about people. Uses the Express web framework and mongoose to comunicate with a MongoDB database.  <br />

database.config.js    -> file that holds the URL to the MongoDB database that is hosted on MongoDB cloud  <br />
person.route.js       -> file where all the routes of the API are defined using ExpressJS   <br />
person.model.js       -> file where we define the person model (object)  <br />
person.controller.js  -> the actual controller that holds the logic to what each of the route is actually doing (CRUD)  <br />
server.js             -> the entry point of our API application ]  <br />
 <br />
Endpoints  <br />
Get All People - GET - http://localhost:3000/api/people <br />
 <br /> 
Get Single Person - GET - http://localhost:3000/api/person/{id}   <br /> 
 <br /> 
Save New Person - POST - http://localhost:3000/api/person  <br /> 
Sample body request: <br />
<sub>
  {  
	&nbsp;"name": "Dimitar", 
      	&nbsp;"surname": "Gjosev",   
      	&nbsp;"age": "24",    
      	&nbsp;"isEmployed": true, 
	&nbsp;"location": "Skopje" <br />
  }
</sub>
  
Update Person's location & employment - PUT - http://localhost:3000/api/person/{id} <br />
Sample body request: <br />
<sub>
  {
         &nbsp; "location": "Los Angeles"
  }
</sub>
<br />
<br />

Delete Person by ID - DELETE - http://localhost:3000/api/person/{id}





![People API](https://user-images.githubusercontent.com/47220300/195833657-6129648b-4edb-4a39-a6c8-4eb738b26cde.png)
<br />

Branches:	<br />
main			-> main branch is currently deployed on Heroku 	<br />
jwt_authorization	-> this branch works with JWT Authorization it uses additional libraries for JWT and has an additional middleware.js that holds the functions for user authentication and authorization. If we want to call the above mentioned endpoints we need to fetch the token from the Authorization Server -> https://github.com/dmircheski/authorizationServer


