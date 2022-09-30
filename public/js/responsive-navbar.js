const primaryNav = document.querySelector("#navigation-bar");
const navButton = document.querySelector("#toggle-navbar");

navButton.addEventListener("click", () => {
    const visibility = primaryNav.getAttribute("data-visible");
    if (visibility === "false") {
        primaryNav.setAttribute("data-visible", true);
    } else primaryNav.setAttribute("data-visible", false);
});
