"use strict";

console.log("Extension loading...");
const jQuery = require("jquery");
const $ = jQuery;
const GmailFactory = require("gmail-js");
const gmail = new GmailFactory.Gmail($);
window.gmail = gmail;

gmail.observe.on("load", () => {
    const userEmail = gmail.get.user_email();
    console.log("Hello, " + userEmail + ". This is your extension talking!");

    // Fires when a user sends an email
    gmail.observe.after("send_message", function(url, body, data, response, xhr) {

        console.log('email_data: ', data);
        console.log('email_data.body.text(): ', $(data.body).text());
        /* POST to Mark API describing the email for cs-interactions */

    });

    // Fires when a new email hits the user's inbox
    gmail.observe.after("new_email", function(url, body, data, response, xhr) {
        console.log('email_data', $(data.body).text());
        /* POST to Mark API describing the email for cs-interactions */

    });
});