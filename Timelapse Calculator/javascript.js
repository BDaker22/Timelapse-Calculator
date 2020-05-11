// ---Event Duration---
//Get input values
var eventDays = document.getElementById("event-duration-days").Value;
var eventHours = document.getElementById("event-duration-hours").Value;
var eventMinutes = document.getElementById("event-duration-minutes").Value;
console.log(eventDays);

// convert inputs to seconds
var eventDaysToSeconds = eventDays * 86400;
var eventHoursToSeconds = eventHours * 3600;
var eventMinutesToSeconds = eventMinutes * 60;

// calculate total seconds
var eventTotalSeconds =
    eventDaysToSeconds + eventHoursToSeconds + eventMinutesToSeconds;

//---Final Video---
// get input values
var vidHours = document.getElementById("final-video-hours").Value;
var vidMinutes = document.getElementById("final-video-minutes").Value;
var vidSeconds = document.getElementById("final-video-seconds").Value;

// convert inputs to seconds
var vidHoursToSeconds = vidHours * 3600;
var vidMinutesToSeconds = vidMinutes * 60;

// calculate total seconds
var totalVideoTime = vidHoursToSeconds + vidMinutesToSeconds + vidSeconds;

// --- Number of photos ---
// FPS * total Video Seconds = total # of photos
var fps = document.getElementById("fps-textbox").Value;
var numberOfPics = fps * totalVideoTime;

// --- mb to gb ---
var mbPerPhoto = document.getElementById("memory-textbox").Value;
var totalMb = mbPerPhoto * numberOfPics;

//Calculate Gb
if (totalMb > 1000) {
    totalMb = totalMb / 1000;
}

// --- Time between photos ---
var timeBetweenPhotos = eventTotalSeconds / numberOfPics;

// Print Results
function printResults() {
    var seconds = timeBetweenPhotos;
    //alert(seconds);
    var numPhotos = numberOfPics;
    var mb = totalMb;

    var printMe = document.getElementById("print-results");

    var results =
        "To make your timelapse, take a photo every " +
        seconds +
        " seconds. You will need " +
        numPhotos +
        " photos using " +
        mb +
        " of memory.";

    printMe.textContent = results;
}