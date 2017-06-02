/**
 * Created by pxv63 on 5/31/2017.
 */

var $ = require('jquery');
var indexUrl = "./src/index.html";
//module.exports= "this is from tes.js";

$( "#home" ).click(function() {
    alert( "Handler for .click() called." );
    window.location.href = "/";
});

// $( "#home" ).click(function() {
//     alert( "Handler for .click() called." );
//     window.location.href = indexUrl;
// });

//module.exports = testRedirection();
