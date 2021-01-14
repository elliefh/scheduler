// Function gets current date and hour from Moment.js
function getDate() {
    var date = moment().format('MMMM Do YYYY');
    console.log("Today's date is " + date);
    // Print current date 
    $("#currentDay").text(date);
}

// Function creates the Work Day Planner, which includes 1) a section displaying the hour, 2) a text area to input to-do items, and 3) a save button 
function createPlanner() {
    var container = $('.container');
    // for loop creates a row for each time block between 9am-5pm
    for (let i = 9; i < 18; i++) {
        var row = $('<div>');
        row.attr('class','row');
        
        // 1) section displaying the hour
        var workHour = $('<div>');
        workHour.attr('class', 'hour col-2 d-flex justify-content-center align-items-center');
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

        // 2) text area to input to-do items
        var workPlan = $('<textarea>');
        workPlan.attr('class', 'workPlan col-8');
        workPlan.attr('id', i);

        // 3) button to save user input 
        var saveButton = $('<button>');
        saveButton.attr('class', 'saveBtn col-2 d-flex justify-content-center align-items-center');
        var saveIcon = $('<i>');
        saveIcon.attr('class', 'fas fa-save');
        saveIcon.addClass(i.toString());
    
        // append created elements to the correct parent 
        container.append(row);
        row.append(workHour, workPlan, saveButton);
        saveButton.append(saveIcon);
    }    
}

// Function assigns a color for each hour block based on past, present and future
function colorCode() {
    var hour = moment().format('HH');
    console.log("The current hour is " + hour);

    for (let i = 9; i < 18; i++) {
        var j = i.toString();
        if (i<hour) {
            $('#'+j).addClass('past');
            console.log("hour " + i + " is in the past!");
        }
        else if (i>hour) {
            $('#'+j).addClass('future');
            console.log("hour " + i + " is in the future!");
        }
        else if (i=hour) {
            $('#'+j).addClass('present');
            console.log("hour " + i + " is in the present!");
        }
    } 
}

// Function saves new inputs and updates local storage 
function saveInput(event) {
    event.preventDefault();

    console.log("Input updated for hour " + $(this).parent().prev().attr('id') + " with input: " + $(this).parent().prev().val());

    var newInput = $(this).parent().prev().val();
    var inputHour = $(this).parent().prev().attr('id');
    localStorage.setItem("to-do-" + inputHour, newInput);
}

// Function displays to-do items from local storage
function displayToDo() {
    for (let i = 9; i < 18; i++) {
        var getText = localStorage.getItem("to-do-" + i);
        if (getText === null) {
            $('#'+i).text("");        
        } 
        else {
            $('#'+i).text(getText);        
        }
    }
} 

// Call Functions and Event Listener
getDate();
createPlanner();
colorCode();
displayToDo();
$('.container').on("click", "i", saveInput);


