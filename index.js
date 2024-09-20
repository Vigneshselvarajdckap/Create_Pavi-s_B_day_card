let btn = document.querySelector(".click")
let outer = document.querySelector(".outer-cover")
let cel = document.querySelector(".celeb")

let pass = document.querySelector(".password")
let enter = document.querySelector(".enter")
let inVal = document.querySelector(".in-name")
let sec = document.querySelector(".sec")


enter.addEventListener("click",()=>{
    let name = inVal.value.toUpperCase()

    if(name == "VIGNESH"){
        sec.classList.add("blo")
        pass.classList.add("hide")
    }
    else{
        alert("Enter a correct friend name")
        pass.classList.add("blo")
        sec.classList.remove("blo")
    }
})




btn.addEventListener("click",()=>{
    if (btn.innerText == "Click here pavi...") {
        setTimeout(() => {
            cel.style.display = "block";  // Display the element
        }, 500);
        
        // Hide the element after 1 second
        setTimeout(() => {
            cel.style.display = "none";  // Hide the element again
        }, 3000);
        outer.classList.add("ani")
        btn.innerText = "Back...";
    }
    else{
        vali= 0;
        btn.innerText = "Click here pavi...";
        outer.classList.remove("ani")
    }
})
