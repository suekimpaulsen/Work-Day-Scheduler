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

$('#hour9 .description').val(localStorage.getItem('hour9'));
$('#hour10 .description').val(localStorage.getItem('hour10'));
$('#hour11 .description').val(localStorage.getItem('hour11'));
$('#hour12 .description').val(localStorage.getItem('hour12'));
$('#hour13 .description')
$('#hour14 .description')
$('#hour15 .description')
$('#hour16 .description')
$('#hour17 .description')


//save button
$(".saveBtn").click (function() {
    var time = $(this).attr(".description").val();
    var text = $(this).attr(".hour");
    localStorage.setItem("time", time);
    localStorage.setItem("text", text)
    console.log(localStorage)
})

