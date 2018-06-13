/*
Program Name:   YouTube Information Grabber (Vanilla JS)
File Name:      js-get-youtubeinfo.js
Date Created:   06/13/18
Date Modified:  --
Version:        1.0
Programmer:     Eric Hepperle

Purpose: Grabs (scrapes) and prints to console title, url, and channel name
    using vanilla JavaScript ES6.
    
    This is useful for quickly grabbing enough information to make a link
    to a YouTube video and/or channel.

Usage: Cut and paste into developer console window (F12) of a YouTube
    video post. Vertical newline-separated list of data will output
    to console.

Sample results: 

    Tutorial Info:
    - Title: How to Create Photo Gallery Grid with Modal Window Lightbox
    - URL: https://www.youtube.com/watch?v=IPVQeVlw2_E
    - Channel: LearnWebCode

Requires:
	* Browser opened to a YouTube video.
    
Demonstrates:
    * Vanilla JavaScript
    * JavaScript ES6
    * YouTube Scraping

*/

console.clear();

var vidTitle = document.querySelector('#info-contents #container > h1 > yt-formatted-string.ytd-video-primary-info-renderer').innerText
var vidURL = document.URL;
var channelName = document.querySelector('#owner-container #owner-name a').innerText;

var out = "";
out += "Tutorial Info:\n";
out += "- Title: " + vidTitle + "\n";
out += "- URL: " + vidURL + "\n";
out += "- Channel: " + channelName + "\n";

console.log(out);

/*

NOTES:

    06/13/18 - Created file from scratch.
			 - WORKS! :)

*/