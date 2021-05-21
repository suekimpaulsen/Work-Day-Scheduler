// $(document).ready(function() {
//     console.log('ready');
// });


//moment
$("#currentDay").html(moment().format("dddd, MMMM Do YYYY"))

//moment time block
function timeTrack() {
    $(".time-block").each(function() {
        var currentTime = moment().hour();
        var blockTime = parseInt($(this).attr("id").split("hour")[1]);

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



//localstorage

var toDoList = JSON.parse(localStorage.getItem('description'))

// $('#hour9 .description')
// $('#hour10 .description')
// $('#hour11 .description')
// $('#hour12 .description')
// $('#hour13 .description')
// $('#hour14 .description')
// $('#hour15 .description')
// $('#hour16 .description')
// $('#hour17 .description')


//save button
$(".saveBtn").click (function() {
    console.log('save')
})