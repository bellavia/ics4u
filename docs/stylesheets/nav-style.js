document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".md-nav__link").forEach(function (link) {
    var text = link.textContent.trim();
    if (text.indexOf("Exercise") === 0 || text.indexOf("- Exercise") === 0) {
      link.classList.add("nav-exercise");
    }
    if (text.indexOf("Assignment") === 0) {
      link.classList.add("nav-assignment");
    }
  });
});
