const boxArr = document.querySelectorAll(".box")

// add onclick event to all boxes
function addOnClickEventToBoxes(){
    boxArr.forEach((elem) => {
        elem.addEventListener("click", () => toggleBoxes(elem))
        elem.addEventListener("click", () => toggleRadioColor(elem))
    })
}


// handle click event onclick
function toggleBoxes(elem) {
    boxArr.forEach((elem) => {
        elem.classList.remove("expanded")
    })
    elem.classList.add("expanded")
}


// handle input radio color 
function toggleRadioColor(elem){
    
    const a = document.querySelector(".radio-selected")
    const b = document.querySelector(".selected")

    if(a && b){
        a.classList.remove("radio-selected")
        b.classList.remove("selected")
    }

    const radio = elem.querySelector(".radio-btn")
    radio.classList.add("radio-selected")
    const selectedRadio = radio.querySelector("#selected")
    selectedRadio.classList.add("selected")
    
   }   

addOnClickEventToBoxes()