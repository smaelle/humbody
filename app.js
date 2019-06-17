var titlebody = "";
var textbody = "";
var bodyVar = "";

var modal = document.getElementsByClassName("container-modal")[0]

function openModal(body) {
    bodyVar = body;
    titlebody = document.getElementById("title-epaule"+body).innerHTML;
    textbody = document.getElementById("text-epaule"+body).innerHTML;
    document.getElementById("title-modal").innerHTML = titlebody;
    document.getElementById("text-modal").innerHTML = textbody;
    modal.style.display = "block";
    console.log(textbody)
}

function closeModal() {
    modal.style.display = "none";
}

window.addEventListener("click", function(e) {
    if(e.target === modal) {
        closeModal();
    }
})
