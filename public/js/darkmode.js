var themeToggleDarkIcon = document.getElementById("theme-toggle-dark-icon");
var themeToggleLightIcon = document.getElementById("theme-toggle-light-icon");
var navbarToggleLightIcon = document.getElementById("toggle-navbar-light");
var navbarToggleDarkIcon = document.getElementById("toggle-navbar-dark");
// Change the icons inside the button based on previous settings
if (localStorage.getItem("color-theme") === "dark" || (!("color-theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
    themeToggleLightIcon.classList.remove("hidden");
    navbarToggleLightIcon.classList.remove("hidden");
} else {
    navbarToggleDarkIcon.classList.remove("hidden");
    themeToggleDarkIcon.classList.remove("hidden");
}

var themeToggleBtn = document.getElementById("theme-toggle");

themeToggleBtn.addEventListener("click", function () {
    // toggle icons inside button
    navbarToggleDarkIcon.classList.toggle("hidden");
    navbarToggleLightIcon.classList.toggle("hidden");
    themeToggleDarkIcon.classList.toggle("hidden");
    themeToggleLightIcon.classList.toggle("hidden");

    // if set via local storage previously
    if (localStorage.getItem("color-theme")) {
        if (localStorage.getItem("color-theme") === "light") {
            document.documentElement.classList.add("dark");
            localStorage.setItem("color-theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("color-theme", "light");
        }

        // if NOT set via local storage previously
    } else {
        if (document.documentElement.classList.contains("dark")) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("color-theme", "light");
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("color-theme", "dark");
        }
    }
});
