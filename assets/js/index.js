const buttonTrailer = document.querySelector('.button-trailer');
const botaoFecharModal = document.querySelector(".closed-modal");
const video = document.getElementById("video");
const modal = document.querySelector(".modal");
const linkDoVideo = video.src;

buttonTrailer.addEventListener ("click", () => {
    modal.classList.add("open");
    video.setAttribute("src", linkDoVideo);
});

botaoFecharModal.addEventListener("click", () => {
    modal.classList.remove("open");
    video.setAttribute("src", "");
});

