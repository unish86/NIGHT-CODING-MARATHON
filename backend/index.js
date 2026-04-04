//! create an express server and check if it's working

import express from "express";
// 1) we are importing express module which we installed using npm i

// 2) call/invoke the function
let app = express(); // object = {listen}

// 4) declare routes -> app.http_method('endpoint', callback)

app.get("/", () => {
  console.log("executing");
});

// 3) assign a port number to our server
app.listen(9001, () => {
  console.log("Server Started.....");
});
// app.listen(PORT_NUMBER, callback)

//! to check if the server is running, in cmd(git bash), goto backend folder and type "npx nodemon index.js"
// open browser -> localhost:PORT_NUMBER and press enter

// https://nodejs.org/en/ (/) =>  this is base url
// https://nodejs.org/en/blog => /blog is one endpoint
// https://nodejs.org/en/download
