// Node imports use require instead of import as below 
const express = require('express');  // npm i express - then build this out to first render your API
const server = express();
// After hubs array is built add an ID using npm i shortid and the import
const shortid = require('shortid');

// Server Set up 
const PORT = 5000; // <- Making your backend server connected to  localhost 5000 using port
server.listen(PORT, () =>
     console.log(`\n ** API is currently running on http://localhost:${PORT} **\n`)  // make sure you use backlashes with N on the right
     );

// Teaching express to read json 
server.use(express.json()); // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<< ADD THIS TO ASSURE EXPRESS CAN READ!!!!

////////////////////////////////////////////////////////////////////////////////////////////////////////


// Setting up end points
server.get('/', (req, res) => {
    res.status(200).json({ api: "running..."})
})

server.get('/hello', (req, res) => {
    res.status(200).json({ Greet:"Hello V"})
})

server.get('/die', (req, res) => {
    res.status(200).json({ insult:"I hope you get NO SLEEP!!!"})
})

//Advanced endpoint
let hubs = [];   // initialize something you want to build out then do a server.post

server.post('/api/hubs', (req, res) => {
 const hubInfo = req.body    // you can skip const HubInfo and just do hubs.push(req.body) - safety net

 hubInfo.id = shortid.generate(); // id generator is added last ( obviously! )
 hubs.push(hubInfo); 

res.status(201).json(hubInfo);
})

// Assignment goals - finish this project 

server.get('/api/hubs', (req, res) => { //<-  last step!
    res.status(200).json({hubs});
})

let lessons = [];   // initialize something you want to build out then do a server.post

server.post('/api/lessons', (req, res) => {
 const lessonsInfo = req.body    // you can skip const HubInfo and just do hubs.push(req.body) - safety net

 lessonsInfo.id = shortid.generate(); // id generator is added last ( obviously! )
 lessons.push(lessonsInfo); 

res.status(201).json(lessonsInfo);
})

server.get('/api/lessons', (req, res) => { //<-  last step!
    res.status(200).json({lessons});
})