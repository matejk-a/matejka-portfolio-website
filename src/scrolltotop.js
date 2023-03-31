window.addEventListener("scroll", function() {
  var scrollPosition = window.scrollY;
  var scrollButton = document.getElementById("scroll-to-top");
  if (scrollPosition > 1200) {
    scrollButton.classList.add("show");
  } else {
    scrollButton.classList.remove("show");
  }
});

document.getElementById("scroll-to-top").addEventListener("click", function(e) {
  e.preventDefault();
  var portfolioSection = document.getElementById("portfolio");
  portfolioSection.scrollIntoView({ behavior: "smooth" });
});
