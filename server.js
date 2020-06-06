'use strict'

/*
 * A simple Node.js program for exporting the current working directory via a webserver listing
 * on a hard code (see portno below) port. To start the webserver run the command:
 *    node webServer.js
 *
 * Note that anyone able to connect to localhost:3001 will be able to fetch any file accessible
 * to the current user in the current directory or any of its children.
 */

/* jshint node: true */

// const React = require("react");
const express = require('express')
const PORT = 3000 // Port number to use

var app = express()

// We have the express static module (http://expressjs.com/en/starter/static-files.html) do all
// the work for us.
app.use(express.static(__dirname))

app.listen(PORT, () => console.log(`Loading from http://localhost:${PORT}`))
