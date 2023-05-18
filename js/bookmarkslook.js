const fave = document.getElementById("bookmarkSelection");
const all = document.getElementById("allSelection");

fave.addEventListener("click", function () {
    fave.style.borderBlockColor= "#DC70C1";
    fave.style.borderTopStyle= "solid";
    fave.style.borderBottomStyle= "none";
    fave.style.textDecoration = "underline";
    fave.style.color = "white";
    all.style.borderTopStyle= "none";
    all.style.borderBottomStyle= "solid";
    all.style.textDecoration = "none";
    all.style.color = "#7A7878";
});

all.addEventListener("click", function () {
    all.style.borderBlockColor= "#DC70C1";
    all.style.borderTopStyle= "solid";
    all.style.borderBottomStyle= "none";
    all.style.textDecoration = "underline";
    all.style.color = "white";
    fave.style.borderTopStyle= "none";
    fave.style.borderBottomStyle= "solid";
    fave.style.textDecoration = "none";
    fave.style.color = "#7A7878";
});