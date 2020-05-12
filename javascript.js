function calculate() {
    var eventDays = document.getElementById("event-duration-days").value;
    var eventHours = document.getElementById("event-duration-hours").value;
    var eventMinutes = document.getElementById("event-duration-minutes").value;

    // convert inputs to seconds
    var eventDaysToSeconds = eventDays * 86400;
    var eventHoursToSeconds = eventHours * 3600;
    var eventMinutesToSeconds = eventMinutes * 60;

    // calculate total seconds
    var eventTotalSeconds =
        eventDaysToSeconds + eventHoursToSeconds + eventMinutesToSeconds;

    //---Final Video---
    // get input values
    var vidHours = document.getElementById("final-video-hours").value;
    var vidMinutes = document.getElementById("final-video-minutes").value;
    var vidSeconds = document.getElementById("final-video-seconds").value;

    // convert inputs to seconds
    var vidHoursToSeconds = vidHours * 3600;
    var vidMinutesToSeconds = vidMinutes * 60;

    // calculate total seconds
    var totalVideoTime = vidHoursToSeconds + vidMinutesToSeconds + vidSeconds;

    // --- Number of photos ---
    // FPS * total Video Seconds = total # of photos
    var fps = document.getElementById("fps-textbox").value;
    var numberOfPics = fps * totalVideoTime;

    // --- mb to gb ---
    var mbPerPhoto = document.getElementById("memory-textbox").value;
    var totalMb = mbPerPhoto * numberOfPics;
    var type;

    //Calculate Gb
    if (totalMb > 1000) {
        totalMb = totalMb / 1000;
        type = "Gb";
    } else {
        type = "Mb";
    }

    // --- Time between photos ---
    var timeBetweenPhotos = eventTotalSeconds / numberOfPics;

    function printResults() {
        var seconds = timeBetweenPhotos;
        var numPhotos = numberOfPics;
        var mb = totalMb;
        var mem = type;

        var printMe = document.getElementById("print-results");

        var results =
            "To make your timelapse, take a photo every " +
            seconds +
            " seconds. You will need " +
            numPhotos +
            " photos using " +
            mb +
            " " +
            mem +
            " of memory.";

        printMe.textContent = results;
    }
    printResults();
}

function reset() {
    document.getElementById("event-duration-days").value = "";
    document.getElementById("event-duration-hours").value = "";
    document.getElementById("event-duration-minutes").value = "";

    document.getElementById("final-video-hours").value = "";
    document.getElementById("final-video-minutes").value = "";
    document.getElementById("final-video-seconds").value = "";

    document.getElementById("fps-textbox").value = "";
    document.getElementById("memory-textbox").value = "";
    document.getElementById("print-results").innerHTML = "";
}