// Update the register function in the script
function register() {
    // Show the registration form
    document.getElementById('register-form').classList.toggle('hidden');
}

//Reqistration javascript
document.addEventListener("DOMContentLoaded", function() {
    const fileInput = document.getElementById("qualifications");
    const form = document.querySelector(".registration-form");

    form.addEventListener("submit", function(event) {
        const file = fileInput.files[0];

        if (file && file.size > 5 * 1024 * 1024) { // 5MB file size limit
            alert("File size must not exceed 5MB.");
            event.preventDefault();
        }
    });
});
