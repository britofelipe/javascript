var addButton = document.querySelector("#adicionar-paciente");

addButton.addEventListener("click", function(event){
    
    event.preventDefault(); // So as the page do not reload

    // Creating form variable
    var form = document.querySelector("#form-adiciona");
    
    // Creating patient object
    var patient = generatePatientFromForm(form);

    // Creating Tr from Patient
    var patientTr = createTr(patient);

    // Adding this Tr to the table
    var table = document.querySelector("#patients-table")
    table.appendChild(patientTr);

    console.log("Paciente adicionado");
})

function generatePatientFromForm(form){
    var patient = {
        name: form.nome.value,
        weight: form.peso.value,
        height: form.altura.value,
        fat: form.gordura.value,
        bmi: calculateBmi(form.peso.value, form.altura.value)
    }

    return patient;
}

function createTr(patient){
    var patientTr = document.createElement("tr");

    // bmiTd.textContent = calculateBmi(patient.weight,patient.height);

    patientTr.appendChild(createTd(patient.name, "info-nome"));
    patientTr.appendChild(createTd(patient.weight, "info-peso"));
    patientTr.appendChild(createTd(patient.height, "info-altura"));
    patientTr.appendChild(createTd(patient.fat, "info-gordura"));
    patientTr.appendChild(createTd(patient.bmi, "info-imc"));

    return patientTr;
}

function createTd(element, elementClass){
    var td = document.createElement("td");
    td.textContent = element;
    td.classList.add(elementClass);

    return td;
}