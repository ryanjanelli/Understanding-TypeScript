"use strict";
console.log("Sending Data...");
let logged;
function sendAnalytics(data) {
    console.log(data);
    logged = true;
    console.log(logged);
}
sendAnalytics("The data");
