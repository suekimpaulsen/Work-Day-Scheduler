// $(document).ready(function() {
//     console.log('ready');
// });



//localstorage

// $('#hour9 .description')
// $('#hour10 .description')
// $('#hour11 .description')
// $('#hour12 .description')
// $('#hour13 .description')
// $('#hour14 .description')
// $('#hour15 .description')
// $('#hour16 .description')
// $('#hour17 .description')


//moment
$("#currentDay").html(moment().format("dddd, MMMM Do YYYY"))

//moment time block
var currentTime = moment().hour();
var blockTime = parseInt($(this).attr("id"));

function timeTrack() {
    $(".time-block").each(function() {
        console.log(currentTime);
        console.log(blockTime);
    
        if (blockTime < currentTime) {
            $(this).addClass("past");
            $(this).removeClass("present");
            $(this).removeClass("future");
        }
        else if (blockTime === currentTime) {
            $(this).removeClass("past");
            $(this).addClass("present");
            $(this).removeClass("future");
        }
        else {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
        }
    })
}
timeTrack();

//save button
$(".saveBtn").click (function() {
    console.log('save')
})