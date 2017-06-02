
//import _ from 'lodash';
var _  = require('lodash');
var $ = require('jquery');
require('./components/componentsIndex');
require('./components/test');
// var componentRequire = require('./componentExports');
require.context("./components", true, /\.components\.js$/);
var allHtmlFiles = require.context("./components", true, /\.components\.html$/);
//var test = require('../components/testUrl.html');


function component () {
    // document.write(require("./main.js"));

    var element = document.createElement('div');

    /* lodash is required for the next line to work */
    element.innerHTML = _.join(['Hello','webpack', 'add'], ' ');

    return element;
}

$( "#target" ).click(function() {
    //require("./components");
    //console.log(allJsFiles);
    //document.write(require("./components/testUrl.html"));
    alert( "Handler for .click() called." );
    window.location.href = "./src/app/components/testUrl.html";
});

// document.body.appendChild(component());