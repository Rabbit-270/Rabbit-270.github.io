document.querySelector("#first-more-info").addEventListener("click", function(event){
    if ( document.querySelector("#first-answer").style.display ==="block") {
        document.querySelector("#first-more-info").setAttribute("class", "fa-solid fa-plus show-answer");
        document.querySelector("#first-answer").style.display = "none";
        return;
    }
    document.querySelector("#first-more-info").setAttribute("class", "fa-solid fa-minus show-answer");
    document.querySelector("#first-answer").style.display = "block";
});
document.querySelector("#second-more-info").addEventListener("click", function(event){
    if ( document.querySelector("#second-answer").style.display ==="block") {
        document.querySelector("#second-more-info").setAttribute("class", "fa-solid fa-plus show-answer");
        document.querySelector("#second-answer").style.display = "none";
        return;
    }
    document.querySelector("#second-more-info").setAttribute("class", "fa-solid fa-minus show-answer");
    document.querySelector("#second-answer").style.display = "block";
});
document.querySelector("#third-more-info").addEventListener("click", function(event){
    if ( document.querySelector("#third-answer").style.display ==="block") {
        document.querySelector("#third-more-info").setAttribute("class", "fa-solid fa-plus show-answer");
        document.querySelector("#third-answer").style.display = "none";
        return;
    }
    document.querySelector("#third-more-info").setAttribute("class", "fa-solid fa-minus show-answer");
    document.querySelector("#third-answer").style.display = "block";
});
document.querySelector("#fourth-more-info").addEventListener("click", function(event){
    if ( document.querySelector("#fourth-answer").style.display ==="block") {
        document.querySelector("#fourth-more-info").setAttribute("class", "fa-solid fa-plus show-answer");
        document.querySelector("#fourth-answer").style.display = "none";
        return;
    }
    document.querySelector("#fourth-more-info").setAttribute("class", "fa-solid fa-minus show-answer");
    document.querySelector("#fourth-answer").style.display = "block";
});
document.querySelector("#fifth-more-info").addEventListener("click", function(event){
    if ( document.querySelector("#fifth-answer").style.display ==="block") {
        document.querySelector("#fifth-more-info").setAttribute("class", "fa-solid fa-plus show-answer");
        document.querySelector("#fifth-answer").style.display = "none";
        return;
    }
    document.querySelector("#fifth-more-info").setAttribute("class", "fa-solid fa-minus show-answer");
    document.querySelector("#fifth-answer").style.display = "block";
});