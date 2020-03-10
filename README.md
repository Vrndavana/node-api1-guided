# Lambda Hubs Web API

Guided project for **Node API 1** Module.

In this project we will learn how to create a very simple Web API using `Node.js` and `Express`, and cover the basics of `server-side routing` and using global `middleware`.

The code for the guided project will be written in a single file for simplicity. We'll see ways to structure an API to make it more maintainable in upcoming lectures.

## Prerequisites

- an HTTP client like [Postman](https://www.getpostman.com/downloads/) or [Insomnia](https://insomnia.rest/download/).

## Project Setup

- [ ] **fork** and clone this repository.
- [ ] **CD into the folder** where you cloned **your fork**.
- code .
- npx gitignore node
- npm init -y
- npm i express
- create index.js 
- index.js below 
- const express = require('express');  
   const server = express();    
   const PORT = 5000; // <- Making your backend server connected to  localhost 5000 using port
   server.listen(PORT, () =>
   console.log(`\n ** API is running on http://localhost:${PORT} **\n`)  // make sure you use backlashes with N on the right
    );

- terminal - node index.js <- this is to see if your server is running, the console should say API on httip// if working>

Go to package.json
- Change the script - test - to start and the organ text to nodemon
- "scripts": {
    "start": "nodemon index.js"
  }
- SAVE FIRST - then npm nodemon ( below ) 
- install nodemon to run only on the developers side - npm i -D nodemon 
- npm start ( this will use nodemon ) - Your server on 5000 is now rendered with nodemon for your tool
- POSTMAN - Get - localhost:5000/ - hit send - <Doc> <Body> <pre> Cannot GET / <pre> --- is a good thing. 
- once you have targeted the API on PM and get the Can't Get error you know you are connected properly. 
- ( There is just nothing to get from your server yet when it is a clean server )

Build end point 

- check index.js server.get(s) 

- Luis's hubs endpoint 
-let hubs = [];   // initialize something you want to build out then do a server.post
server.post('/api/hubs', (req, res) => {
 const hubInfo = req.body    // you can skip const HubInfo and just do hubs.push(req.body) - safety net
 hubs.push(hubInfo); 
})

- next he put an id on his hubs data base - he used shortid - shortid isn't require but is a working method

-npm i shortid
// After hubs array is built add an ID using npm i shortid and the import
const shortid = require('shortid');

- create lessons

let lessons = [];   // initialize something you want to build out then do a server.post
server.post('/api/lessons', (req, res) => {
 const lessonsInfo = req.body    // you can skip const HubInfo and just do hubs.push(req.body) - safety net
 lessonsInfo.id = shortid.generate(); // id generator is added last ( obviously! )
 lessons.push(lessonsInfo); 

res.status(201).json(lessonsInfo);
})




## Assignment

Build a RESTful Web API to manage _"Lessons"_ and _"Hubs"_. A _Hub_ is a group chat channel that brings together an instructor and a group of students from the same cohort as they work on a _Lesson_.

An example would be a _Hub_ created to go over the "Introduction to Node and Express" lesson for the _Web 1_ cohort.

A Lesson has:

- a unique `id`.
- a `name`.

A Hub has:

- a unique `id`.
- a `name`.
- a `lessonId` that connects it to the corresponding Lesson.
- a `cohort`.

### Features

The Web API must provide a set of `endpoints` to fulfill the following needs:

- add a new Lesson.
- view a list of existing Lessons.
- view the details of a single Lesson
- update the information of an existing Lesson.
- remove a Lesson.
- add a new Hub.
- view a list of existing Hubs.
- view the details of a single Hub
- update the information of an existing Hub.
- remove a Hub.

Here is a table with the `endpoint` descriptions:

| Action               | URL               | Method | Response         |
| :------------------- | :---------------- | :----- | :--------------- |
| Add a Lesson         | /api/lessons      | POST   | the new Lesson   |
| View list of Lessons | /api/lessons      | GET    | array of Lessons |
| View Lesson details  | /api/lessons/{id} | GET    | a Lesson         |
| Update Lesson        | /api/lessons/{id} | PATCH  | updated Lesson   |
| Remove a Lesson      | /api/lessons/{id} | DELETE | deleted Lesson   |
| Add a Hub            | /api/hubs         | POST   | the new Hub      |
| View list of Hubs    | /api/hubs         | GET    | array of Hubs    |
| View Hub details     | /api/hubs/{id}    | GET    | a Hub            |
| Update Hub           | /api/hubs/{id}    | PATCH  | updated Hub      |
| Remove a Hub         | /api/hubs/{id}    | DELETE | deleted Hub      |
