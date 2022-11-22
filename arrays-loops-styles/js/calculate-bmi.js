var patients = document.querySelectorAll(".patient"); // This way we pick all the patients

for (var i = 0; i < patients.length; i++) {
    var patient = patients[i];

    var tdWeight = patient.querySelector(".info-weight")
    var tdHeight = patient.querySelector(".info-height");
    var tdBmi = patient.querySelector(".info-bmi");

    var weight = tdWeight.textContent;
    var height = tdHeight.textContent;

    /* VERIFYING */

    var validWeight = validateWeight(weight);

    var validHeight = validateHeight(height);

    if (!validWeight) {
        console.log("Invalid weight");
        validWeight = false;
        tdBmi.textContent = "Invalid weight";
        patient.style.color = "red"; // Change the style
        patient.classList.add("invalid-patient");
    }
    if (!validHeight) { 
        console.log("Invalid height")
        validHeight = false;
        tdBmi.textContent = "Invalid height";
        patient.style.backgroundColor = "lightcoral"; // Change the style
        patient.classList.add("invalid-patient");
    }

    if (validWeight && validHeight) {
        var bmi = calculateBmi(weight, height);
        tdBmi.textContent = bmi;
    }
}

function validateWeight(weight) {
    if (weight < 0 || weight > 500) {
        return false
    }
    return true;
}

function validateHeight(height) {
    if (height < 0 || height > 3) {
        return false
    }
    return true;
}

function calculateBmi(weight, height) {
    var bmi = 0;
    bmi = weight / (height * height);
    return bmi.toFixed(2);
}

