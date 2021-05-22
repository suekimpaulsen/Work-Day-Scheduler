$(document).ready(function() {
    //display current day
    $("#currentDay").html(moment().format("dddd, MMMM Do YYYY"))

    //moment time block
    function timeTrack() {
        $(".time-block").each(function() {
            var currentTime = moment().hour();
            var blockTime = parseInt($(this).attr("id").split("hour")[1]);

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
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
        localStorage.setItem(time, text);
        console.log(localStorage)
    })
    $("#hour9 .description").val(localStorage.getItem("hour9"))
    $("#hour10 .description").val(localStorage.getItem("hour10"))
    $("#hour11 .description").val(localStorage.getItem("hour11"))
    $("#hour12 .description").val(localStorage.getItem("hour12"))
    $("#hour13 .description").val(localStorage.getItem("hour13"))
    $("#hour14 .description").val(localStorage.getItem("hour14"))
    $("#hour15 .description").val(localStorage.getItem("hour15"))
    $("#hour16 .description").val(localStorage.getItem("hour16"))
    $("#hour17 .description").val(localStorage.getItem("hour17"))

    //clear button
    $(".clearBtn").click (function() {
        localStorage.clear();
    })
});
