let slides = document.querySelectorAll(".slide");
let current = 0;
function showsSlide(index) { slides.forEach(slide => slide.classList.remove("active"));
    slides[index].classList.add("active");
}
document.querySelector(".next").onclick = () => {
    current = (current + 1) % slides.length;
    showsSlide(current);
};
document.querySelector(".prev").onclick = () => {
    current = (current - 1)
% slides.length;
showsSlide(current);
};

