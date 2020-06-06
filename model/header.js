'use strict'

/*
 * Load the model data of the problem 2 of cs142's project4.
 * We load into the property cs142models.statesModel a function that returns  an array of
 * strings with the names of the states.
 *
 * See README.md for more details
 */

var cs142models

if (!cs142models) {
  cs142models = {}
}

cs142models.headerModel = function () {
  return ['This is a header for CS142 project 4 problem 3.']
}
