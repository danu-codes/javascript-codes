const button = document.getElementById("theme-switcher-button");
const dropdown = document.getElementById("theme-dropdown");
const messageElement = document.getElementById("theme-message");
const menuItems = dropdown.querySelectorAll("li");

/* Themes Array */
const themes = [
    {
        name: "light",
        message: "Light theme activated. Bright and clean!"
    },
    {
        name: "dark",
        message: "Dark theme activated. Easy on the eyes."
    },
    {
        name: "ocean",
        message: "Ocean theme activated. Calm and refreshing."
    }
];

/* Toggle Dropdown */
button.addEventListener("click", () => {
    const isExpanded = button.getAttribute("aria-expanded") === "true";

    if (isExpanded) {
        dropdown.setAttribute("hidden", "");
        button.setAttribute("aria-expanded", "false");
    } else {
        dropdown.removeAttribute("hidden");
        button.setAttribute("aria-expanded", "true");
    }
});
