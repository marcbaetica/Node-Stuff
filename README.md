====================================================================

MODULES:

====================================================================
--------------------------------------------------------------------
====================================================================


Http Server: (run as node helloHTTP.js in CLI)
-returns "Hello World!" on http://localhost:8080


====================================================================


Express HTTP Server:
-uses the express framework on node and returns "Hello World!" on http://localhost:8080


====================================================================


Student Info Get App: (run as node app.js in CLI)
-retrieves profile information from the teamtreehouse API
-parses the JSON data
-prints it out on the screen
-handles 3 types of errors
-implements event handlers for streams
-organized code in multiple modules
-can take multiple usernames


====================================================================


Web App With ExpressJS: (run as node helloHTTP.js in CLI)
-used express builder and modified to returns standard page using one available route on http://localhost:3000


====================================================================


Mongoose: (node/express app that connects to MongoDB via Mongoose - there are two versions separated in distinct folders)


!!!NOTE: Assumptions: the MongoDB namespace (db.collection) in use is test.restaurants. The data for the 'restaurants' collection was previously imported from one of MongoDB's getting started tutorials. You can follow the quick and simple steps at http://docs.mongodb.org/getting-started/shell/import-data/



Verson 1: Express + Mongoose + CLI_followup_instructions

When a GET request is made, the express server queries the local database for a document. This document is then returned to the client in JSON format. Multiple CLI prompts are used to keep the user in check as requests are being handled.

To run on port 8000:
-> $node serverDB-Connection.js
OR to set desired process.env.PORT variable by replacing #### with a number:
-> $PORT=#### node serverDB-Connection.js



Version 2: Node + Mongoose

This application simply connects to the MongoDB "test" database, sends a POST request for a restaurant called "We-Feedin'-You" and after successful completion it queries the database to to print the document for the "We-Feedin'-You" restaurant in the CLI. This app also uses the 'is-json' npm package to check if the document is in JSON format. If not, conversion is done prior to returning it to the user.

Instructions: make sure run.sh script is executable (chmod 700) and then run it as '$./run.sh'. This will do two things:

1 - run '$npm install' so the postinstall POST script is called up from package.json and the document is written in the database

2 - for READ from database -> runs database connection through port 27017 (standard for MongoDB setups) by executing: '$node server.js'. Alternatively you can modify the script to set the desired process.env.PORT variable by replacing #### with a number: '$PORT=#### node server.js'


====================================================================


Express Send File:

Uses the express framework to send a webpage running with AngularJS.

To run -> '$node server.js'
OR '$PORT=#### node server.js' for a custom http port


====================================================================


Router Use:

Different use case implementations for the Express 4.x.x router.

This server app has two routers: one to provide basic routing to desired URLs and one for exposure of an internal login API (via GET and POST methods).

Next steps: separating the two routers into modules


====================================================================


MongoDB Connection Mongoose+Node+Express: (work in progress)
-node app that connects to MongoDB via Mongoose

Basic mongodb functionality (Inserting json file as db documnet + CRUD operations) through the mongodb node driver.


Prerequisite:
- npm install mongodb
- have a mongod instance running


Database name: test
Port: 27017 (standard set in /etc/mongod.conf)

- inserting file to db is done on collection test.restaurants (DONE)
- CREATE operations are done on collection test.restaurants2 (DONE)
- READ operations are done on collection test.restaurants (DONE)
- UPDATE operations are done on collection test.restaurants
- DELETE  operations are done on collection test.restaurants


====================================================================


Body Parser:

This is a working implementation of extracting parsed information from the body of a url-encoded POST message which is sent back by the server within its response.
Parsed parameters in use: 'id' and 'token'
Parameters type: both of them were tested as type 'Text'
Start with '$node server.js' or '$PORT=#### node server.js' if you wish to use a port of your choosing.


====================================================================


ZipCode Weather Forecast: (work in progress)
-gets today's forecast based on the ZipCode
-usage: node forecast.io 9020
-to use: Forecast.io (has an API that can be used to get today's forecast)


====================================================================


designPatterns:

This is just a set of references for personal use.


====================================================================

Sublime Setup:

- Go to:
Tools -> Build System -> New Build System

- Insert:
{
    "cmd": ["node", "$file", "$file_base_name"],
    "working_dir": "${project_path:${folder}}",
    "selector": "*.js"
}

- Save as Node.sublime-build

- Switch to Tools -> Build System -> Node

- To compile and run script type Crtl+b
