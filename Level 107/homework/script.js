// https://www.codewars.com/kata/58649884a1659ed6cb000072/train/javascript

function updateLight(current) {
    if (current == "green"){
        return "yellow"
    } else if (current == "yellow"){
        return "red"
    } else if (current == "red"){
        return "green"
    }
}

// https://www.codewars.com/kata/59dd3ccdded72fc78b000b25/train/javascript


function whatday(num) { 
    if (num == 1){
        return "Sunday"
    } else if (num == 2){
        return "Monday"
    } else if (num == 3){
        return "Tuesday"
    } else if (num == 4){
        return "Wednesday"
    } else if (num == 5){
        return "Thursday"
    } else if (num == 6){
        return "Friday"
    } else if (num == 7){
        return "Saturday"
    } else{
        return "Wrong, please enter a number between 1 and 7"
    }  
}