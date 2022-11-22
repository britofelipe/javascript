var addButton = document.querySelector("#adicionar-paciente");

addButton.addEventListener("click", function (event) {

    event.preventDefault(); // So as the page do not reload

    // Creating form variable
    var form = document.querySelector("#form-adiciona");

    // Creating patient object
    var patient = generatePatientFromForm(form);

    // Creating Tr from Patient

    var errors = validatePatient(patient);

    if (errors.length > 0) {
        showErrorMessages(errors);
        return;
    }

    // Adding this Tr to the table
    addPatientInTable(patient);

    form.reset();

    var errorMessages = document.querySelector("#error-messages")
    errorMessages.innerHTML = "";

    console.log("Patient added");

})

function addPatientInTable(patient) {
    var patientTr = createTr(patient);
    var table = document.querySelector("#patients-table")
    table.appendChild(patientTr);
}

function addPatientInTablePortuguese(patient) {
    var patientTr = createTrPortuguese(patient);
    var table = document.querySelector("#patients-table")
    table.appendChild(patientTr);
}

function generatePatientFromForm(form) {
    var patient = {
        name: form.nome.value,
        weight: form.peso.value,
        height: form.altura.value,
        fat: form.gordura.value,
        bmi: calculateBmi(form.peso.value, form.altura.value)
    }

    return patient;
}

function createTr(patient) {
    var patientTr = document.createElement("tr");

    patientTr.appendChild(createTd(patient.name, "info-nome"));
    patientTr.appendChild(createTd(patient.weight, "info-peso"));
    patientTr.appendChild(createTd(patient.height, "info-altura"));
    patientTr.appendChild(createTd(patient.fat, "info-gordura"));
    patientTr.appendChild(createTd(patient.bmi, "info-imc"));

    return patientTr;
}

function createTrPortuguese(patient) {
    var patientTr = document.createElement("tr");

    patientTr.appendChild(createTd(patient.nome, "info-nome"));
    patientTr.appendChild(createTd(patient.peso, "info-peso"));
    patientTr.appendChild(createTd(patient.altura, "info-altura"));
    patientTr.appendChild(createTd(patient.gordura, "info-gordura"));
    patientTr.appendChild(createTd(patient.imc, "info-imc"));

    return patientTr;
}

function createTd(element, elementClass) {
    var td = document.createElement("td");
    td.textContent = element;
    td.classList.add(elementClass);

    return td;
}

function validatePatient(patient) {
    var errorMessage = [];
    if (patient.name.length == 0)
        errorMessage.push("Name field cannot be blank")

    if (!validateWeight(patient.weight) || patient.weight.length == 0)
        errorMessage.push("Invalid Weight");

    if (!validateHeight(patient.height) || patient.height.length == 0)
        errorMessage.push("Invalid Height");

    if (patient.fat.length == 0)
        errorMessage.push("Fat field cannot be blank")

    return errorMessage;
}

function showErrorMessages(errors) {
    var ul = document.querySelector("#error-messages")
    ul.innerHTML = ""; // Empties the ul so as the messages do not accumulate

    errors.forEach(function (error) {
        var li = document.createElement("li");
        li.textContent = error;
        ul.appendChild(li);
    });
}