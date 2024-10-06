let index = 0;

const sliderContainer = document.querySelector(".slider-container");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");
const totalCourses = document.querySelectorAll(".course-card").length;
const courseWidth = 100 / totalCourses;

nextBtn.addEventListener("click", () => {
  if (index < totalCourses - 1) {
    index++;
  } else {
    index = 0; // Reset ke awal jika di akhir
  }
  sliderContainer.style.transform = `translateX(-${index * courseWidth}%)`;
});

prevBtn.addEventListener("click", () => {
  if (index > 0) {
    index--;
  } else {
    index = totalCourses - 1; // Kembali ke akhir jika di awal
  }
  sliderContainer.style.transform = `translateX(-${index * courseWidth}%)`;
});
