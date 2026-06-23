const button = document.getElementById("themeToggle");

// Apply saved theme on page load
if (localStorage.getItem("themeToggle") === "dark") {
    document.body.classList.add("dark-mode");
}


button.addEventListener("click", function () {
    if(document.body.classList.contains)
      document.body.classList.toggle("dark-mode");
    // Save preference
    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
});