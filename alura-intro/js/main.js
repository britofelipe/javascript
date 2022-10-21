console.log("Loaded from an external file");

/* SEARCHING FOR THE TITLE DATA */

// console.log(document.querySelector("h1"));
// var title = document.querySelector("h1");
// console.log(title);
// console.log(title.textContent);

// title.textContent = "Nutrição Aparecida" // Here, the text has been changed dinamically

// So what if the tag is changed to an h2, instead of h1?
// It's better to use classes

var title = document.querySelector(".title");
title.textContent = "Nutricionist";

/* SEARCHING FOR A SINGLE PATIENT DATA */

var firstPatient = document.querySelector("#first-patient");

var tdWeight = firstPatient.querySelector(".info-weight")
var tdHeight = firstPatient.querySelector(".info-height");
var tdBmi = firstPatient.querySelector(".info-bmi");

var weight = tdWeight.textContent;
var height = tdHeight.textContent;

// console.log(firstPatient); // tr
// console.log(tdWeight); // td weight
// console.log(weight);
// console.log(height);

/* VERIFYING */

var validWeight = true;
var validHeight = true;

if (weight < 0 || weight > 500){
    console.log("Invalid weight");
    validWeight = false;
    tdBmi.textContent = "Invalid weight";
}
if (height < 0 || height > 3){
    console.log("Invalid height")
    validHeight = false;       
    tdBmi.textContent = "Invalid height"; 
}

if(validWeight && validHeight){
    var bmi = weight / (height * height);
    tdBmi.textContent = bmi;
}


