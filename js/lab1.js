// lab1.js

function reverseString(str) {
    return str.split("").reverse().join("");
}

function listSkills(){
    // add a ']' at the end of line 9 after 'Volunteering'.
    let skills = ['Web Development','Gardening','Drumming','Volunteering'];
    let output = "<h2>Bruce's Skills<h2>";
    output += '<ul>';
    for (let i = 0; i < skills.length; i++) {
        output += '<li>' + skills[i] + '</li>';
    }
    output += '</ul>';
    document.getElementById('skills').innerHTML = '<p>' + output + '</p>';
}

function getStarted(){
    // add a '=' sign in bewteen firstName and 'Bruce' and ';' after 'Bruce'.
    let firstName = 'Bruce';
    let lastName = 'Elgort';
    // add a ';' sign at the end of the string after 'Clark College'
    let collegeName = 'Clark College';
    let city = 'Vancouver, Washington';
    let gpa = 3.2;
    // add '$' in front of {lastName}, {city}, {gpa}.
    let output = `${firstName} ${lastName} is currently attending ${collegeName}, located in ${city} and has a grade point average of ${gpa}`;

    // change the quotation marks surrounding </p> to single quotes '' instead of two different ones
    document.getElementById('place1').innerHTML = '<p>' + output + '</p>';
    // add a '+' in bewteen reverseString and output 
    document.getElementById('place2').innerHTML = '<p>' + reverseString + (output) + '</p>';
}

window.onload = function(){
    getStarted();
    listSkills();
}