var title = document.querySelector(".title");
title.textContent = "Nutricionist";

/* SEARCHING FOR A SINGLE PATIENT DATA */

var firstPatient = document.querySelector("#first-patient");
// Query selector is only for a single variable

var patients = document.querySelectorAll(".patient"); // This way we pick all the patients

for(var i = 0; i < patients.length; i++){
    var patient = patients[i];

    var tdWeight = patient.querySelector(".info-weight")
    var tdHeight = patient.querySelector(".info-height");
    var tdBmi = patient.querySelector(".info-bmi");

    var weight = tdWeight.textContent;
    var height = tdHeight.textContent;

    /* VERIFYING */

    var validWeight = true;
    var validHeight = true;

    if (weight < 0 || weight > 500){
        console.log("Invalid weight");
        validWeight = false;
        tdBmi.textContent = "Invalid weight";
        // patient.style.color = "red"; // Change the style
        patient.classList.add("invalid-patient");
    }
    if (height < 0 || height > 3){
        console.log("Invalid height")
        validHeight = false;       
        tdBmi.textContent = "Invalid height"; 
        // patient.style.backgroundColor = "lightcoral"; // Change the style
        patient.classList.add("invalid-patient");       
    }
    
    if(validWeight && validHeight){
        var bmi = calculateBmi(weight, height);
        tdBmi.textContent = bmi;
    }
}

function calculateBmi(weight, height){
    var bmi = 0;
    bmi = weight/ (height * height);
    return bmi.toFixed(2);
}