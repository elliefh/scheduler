// Get current date and hour from Moment.js
var date = moment().format('MMMM Do YYYY');
var hour = moment().format('HH');
// Print current date 
$("#currentDay").text(date);

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
        var saveButton = $('<div>');
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
}

// // Set up local storage and default text assigned to each hour
// for (let i = 9; i < 18; i++) {
//     localStorage.setItem("to-do-" + i, "Fill in your to-do items here!");
// }

// Event Listener updates local storage with User input
// saveButton.addEventListener("click", function() {
//     localStorage.setItem("to-do-"+i, "Oh hello!");
// });

// Display to-do items from local storage
function displayToDo() {
    for (let i = 9; i < 18; i++) {
        var getText = localStorage.getItem("to-do-" + i);
        if (getText === null) {
            $('#'+i).text("Fill in your to-do items here!");        
        } 
        else {
            $('#'+i).text(getText);        
        }
    }
} 

createPlanner();
colorCode();
displayToDo();



// addButton.addEventListener("click", function() {
//   count++;
//   counter.textContent = count;

//   localStorage.setItem("count", count);
// });


