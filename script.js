const link = document.getElementById("link");
const submitBtn = document.getElementById("submit");

function changeUrl(){
    const videoLink = document.getElementById("link").value;
    const newLink = videoLink.replace("/shorts/", "/watch?v=");
    window.location.replace(newLink);
};

submitBtn.addEventListener("click", changeUrl);