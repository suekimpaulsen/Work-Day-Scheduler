$(document).ready(function() {
    hour9 = document.createElement('div');
    $(hour9).attr('id', 'hour9')
         .addClass("row time-block")
         .appendTo($(".container"));

    insideHour9 = document.createElement('div');
    $(insideHour9).addClass('col-md-1 hour').text("9AM").appendTo($(hour9));
    
    $(hour9).append('<textarea class="col-md-10 description"></textarea>');
    $(hour9).append('<button class="btn saveBtn col-md-1"><i class="fas fa-save"></i></button>')
    console.log(hour9)

    hour10 = document.createElement('div');
    $(hour10).attr('id', 'hour10')
            .addClass("row time-block")
            .appendTo($(".container"))
    $(hour10).append('<div class="col-md-1 hour">10AM</div>');
    $(hour10).append('<textarea class="col-md-10 description"></textarea>');
    $(hour10).append('<button class="btn saveBtn col-md-1"><i class="fas fa-save"></i></button>')
    console.log(hour10)

    var overlapDiv = '<div class="row time-block">' +
                '<div class="col-md-1 hour"></div>' +
                '<textarea class="col-md-10 description"></textarea>' +
                '<button class="btn saveBtn col-md-1"><i class="fas fa-save"></i></button>' +
                '</div>';
    $(overlapDiv).attr('id', 'hour11').appendTo($('.container'));
    $('#hour11').append(document.createTextNode("11AM"));
    $(overlapDiv).attr('id', 'hour12').appendTo($('.container'));

    // $(".container").append('<div id="hour9" class="row time-block></div>');
    // $(".container").css(".row", ".time-block", ".description", ".saveBtn");
})


