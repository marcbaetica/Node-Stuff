There are two versions separated in distinct folders.
!!!NOTE: Assumptions: the MongoDB namespace (db.collection) in use is test.restaurants. The data for the 'restaurants' collection was previously imported from one of MongoDB's getting started tutorials. You can follow the quick and simple steps at http://docs.mongodb.org/getting-started/shell/import-data/



Verson 1: Express + Mongoose + CLI_followup_instructions

When a GET request is made, the express server queries the local database for a document. This document is then returned to the client in JSON format. Multiple CLI prompts are used to keep the user in check as requests are being handled.

To run on port 8000:
-> $node serverDB-Connection.js
OR to set desired process.env.PORT variable by replacing #### with a number:
-> $PORT=#### node serverDB-Connection.js



Version 2: Node + Mongoose

This application simply connects to the MongoDB "test" database, sends a POST request for a restaurant called "We-Feedin'-You" and after successful completion it queries the database to to print the document for the "We-Feedin'-You" restaurant in the CLI.

To run database connection through port 27017 (standard for MongoDB):
-> $node server.js
OR to set desired process.env.PORT variable by replacing #### with a number:
-> $PORT=#### node server.js
