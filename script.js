document.addEventListener("DOMContentLoaded", () => {
    const hamburgerIcon = document.querySelector(".hamburger-icon");
    const menuLinks = document.querySelector(".menu-links");

    // Toggle Menu Function
    const toggleMenu = () => {
        menuLinks.classList.toggle("open");
        hamburgerIcon.classList.toggle("open");
    };

    // Add click event to the hamburger icon
    hamburgerIcon.addEventListener("click", toggleMenu);

    // Close menu on link click (for better UX)
    menuLinks.addEventListener("click", (e) => {
        if (e.target.tagName === "A") {
            menuLinks.classList.remove("open");
            hamburgerIcon.classList.remove("open");
        }
    });
});
