var inputField = document.querySelector("#filter-table");

inputField.addEventListener("input", function(){
    // var searchTerms = inputField.value; --> Not necessary
    console.log(this.value);
    var patients = document.querySelectorAll(".patient");

    if(this.value.length > 0){
        patients.forEach(patient => {
            // First we have to search for the TD
            var tdName = patient.querySelector(".info-name")
            var name = tdName.textContent;

            // Creating regular expression
            var expression = new RegExp(this.value, "i") // case insensitive
            
            if(expression.test(name)){
                patient.classList.remove("hide-patient");
                
            } else{
                patient.classList.add("hide-patient");
            }
        });
    } else{
        patients.forEach(patient => {
            patient.classList.remove("hide-patient")
        });
    }
})