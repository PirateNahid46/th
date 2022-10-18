function revealTBZ(){
    const hiddenTBZ = document.getElementById("hiddenTBZ");
    const revealTBZ = document.getElementById("revealTBZ");
    if(hiddenTBZ.style.display == "block"){
        hiddenTBZ.style.display = "none";
        revealTBZ.innerHTML = "Read More";

    }else{
        hiddenTBZ.style.display = "block";
        revealTBZ.innerHTML = "See Less";
    }
}
