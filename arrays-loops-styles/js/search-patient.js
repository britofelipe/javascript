var button = document.querySelector("#buscar-paciente");

button.addEventListener("click", function () {
    // Responsable for making requisitions
    var xhr = new XMLHttpRequest();

    // GET requisition
    xhr.open("GET", "https://api-pacientes.herokuapp.com/paciente s");

    xhr.addEventListener("load", function () {
        var errorAjax = document.querySelector("#error-ajax");
        console.log(errorAjax)
        if (xhr.status == 200) {
            errorAjax.classList.add("invisible");
            
            var response = xhr.responseText;
            var patients = JSON.parse(response) // Return in JS object
            
            patients.forEach(patient => {
                addPatientInTablePortuguese(patient);
            });
        } else {
            console.log(xhr.status);
            console.log(xhr.response);
            
            errorAjax.classList.remove("invisible");
        }
    })

    xhr.send();
})