"use strict";
console.log('yo');
var button = document.querySelector('button');
function clickHandler(message) {
    var userName = 'James';
    console.log('Clicked! ' + message);
}
button.addEventListener('click', clickHandler.bind(null, 'hey'));
//# sourceMappingURL=app.js.map