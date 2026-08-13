document.addEventListener("DOMContentLoaded", function () {

    const helpForm = document.getElementById("helpForm");
    const successMessage = document.getElementById("successMessage");

    if (helpForm) {
        helpForm.addEventListener("submit", function (event) {

            // Stop page from refreshing
            event.preventDefault();

            // Show success message
            if (successMessage) {
                successMessage.style.display = "block";

                // Scroll to success message
                successMessage.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });
            }

            // Clear form
            helpForm.reset();
        });
    }

});


function closeSuccess() {
    const successMessage = document.getElementById("successMessage");

    if (successMessage) {
        successMessage.style.display = "none";
    }
}