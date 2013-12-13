var colors = require("colors");
var _ = require("lodash-node");

global.libs = {}; // global object , placeholder
// global.colors = colors;
// global._ = _;

beforeEach(function(){
	console.log("running test spec helper".blue);
	libs.midi = require('midi');
})
