// Get current date and hour from Moment.js
var date = moment().format('MMMM Do YYYY');
var hour = moment().format('HH');
console.log(date);
console.log(hour);

// Print current date 
$("#currentDay").text(date);

// For Loop creates a row for each working hour between 9am-5pm; the row contains 1) the hour, 2) text area to input to-do items, and 3) button to save the user's inputs 
var container = $('.container');
for (let i = 9; i < 18; i++) {
    var row = $('<div>');
    row.attr('class','row');
    
    var workHour = $('<div>');
    workHour.attr('class', 'hour col-2');
    // If else statements ensure that the working hour is printed in standard (12 hour clock) time
    if (i<12) {
        workHour.text(i+" am");
    } 
    else if (i>12) {
        workHour.text(i-12 + " pm");
    }
    else {
        workHour.text(i+" pm");
    }
    
    var workPlan = $('<textarea>');
    workPlan.attr('class', 'workPlan col-8');
    workPlan.attr('id', i);

    var saveButton = $('<div>');
    saveButton.attr('class', 'saveBtn col-2');

    // append created elements to the correct parent 
    container.append(row);
    row.append(workHour, workPlan, saveButton);
}

// For Loop determines current time, future time, and past time and assigns a color 
for (let i = 9; i < 18; i++) {
    var j = i.toString();
    if (i<hour) {
        $('#'+j).addClass('past');
    }
    else if (i=hour) {
        $('#'+j).addClass('present');
    }
    else {
        $('#'+j).addClass('future');
    }
}

// Add a click event on a parent element that can listen to my save buttons clicks

//


