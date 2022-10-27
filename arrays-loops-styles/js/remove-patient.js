var patients = document.querySelectorAll(".patient");

var table = document.querySelector("table")

// We can use the parent (table) to listen the event

table.addEventListener("dblclick", function(event){
    // var eventTarget = event.target; // Target from the event (TD)
    // var targetParent = eventTarget.parentNode; // Parent from the target (TR)

    event.target.parentNode.classList.add("fadeOut");

    // It has to wait between the two functions
    setTimeout(function(){
        event.target.parentNode.remove();
    }, 350);
    
})