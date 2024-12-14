const btns = document.querySelectorAll(".toggle-btn");

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.classList.contains("active")) {
      btns.forEach((b) => b.classList.remove("active"));
    } else {
      btns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
    }
  });
});
