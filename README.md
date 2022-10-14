# PeopleAPI

NodeJS API that is made to handle information about people. Uses the Express web framework and mongoose to comunicate with a MongoDB database.

database.config.js    -> file that holds the URL to the MongoDB database that is hosted on MongoDB cloud
person.route.js       -> file where all the routes of the API are defined using ExpressJS 
person.model.js       -> file where we define the person model (object)
person.controller.js  -> the actual controller that holds the logic to what each of the route is actually doing (CRUD)
server.js             -> the entry point of our API application ]

Endpoints
Get All People - GET - http://localhost:3000/api/people

Get Single Person - GET - http://localhost:3000/api/person/{id}

Save New Person - POST - http://localhost:3000/api/person
Sample body request:
  {
	    "name": "Dimitar",
      "surname": "Gjosev",
      "age": "24",
      "isEmployed": true,
	    "location": "Skopje"
  }
  
  
Update Person's location & employment - PUT - http://localhost:3000/api/person/{id}
Sample body request:
  {
         "location": "Los Angeles"
  }

Delete Person by ID - DELETE - http://localhost:3000/api/person/{id}





![People API](https://user-images.githubusercontent.com/47220300/195833657-6129648b-4edb-4a39-a6c8-4eb738b26cde.png)

