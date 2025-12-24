let revealBtn = document.getElementById("reveal-btn");
let hiddenContent = document.getElementById("hidden-content");

revealBtn.addEventListener("click", function () {

    // Toggle visibility
    hiddenContent.classList.toggle("hidden");

    // Change button text based on state
    if (hiddenContent.classList.contains("hidden")) {
        revealBtn.textContent = "Reveal More";
    } else {
        revealBtn.textContent = "Reveal Less";
    }
});
