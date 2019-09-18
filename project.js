
function changeText(id) {
    id.innerHTML = "Tack för att ni har lyssnat!";
    id.style.color = "red";
}

const arrayOfHeaders = document.getElementsByTagName("p");
for (const header of arrayOfHeaders) {
    header.style.color = "maroon";

}

function change_pic() {
    var imgObj = document.getElementById("meis_pic");
    if (imgObj.getAttribute("src", 2) == "images/10.jpg") {
        imgObj.src = "images/2.png";
    }
    else { imgObj.src = "images/10.jpg"; }
    imgObj.style.width = "100%";
    imgObj.style.height = "auto";
}


