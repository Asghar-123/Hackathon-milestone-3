document.addEventListener("DOMContentLoaded", function () {
    var _a;
    function validateForm() {
        var form = document.getElementById("resumeForm");
        if (!form.checkValidity()) {
            alert("Please fill in all the required fields.");
            return false;
        }
        return true;
    }
    function generateResume() {
        var firstName = document.getElementById("FirstName").value;
        var lastName = document.getElementById("LastName").value;
        var email = document.getElementById("Email").value;
        var phone = document.getElementById("Phone").value;
        var address = document.getElementById("Address").value;
        var skills = document.getElementById("Skills").value;
        var education = document.getElementById("Education").value;
        var experience = document.getElementById("Experience").value;
        // Populate resume output
        document.getElementById("displayFirstName").innerText = firstName;
        document.getElementById("displayLastName").innerText = lastName;
        document.getElementById("displayEmail").innerText = email;
        document.getElementById("displayPhone").innerText = phone;
        document.getElementById("displayAddress").innerText = address;
        document.getElementById("displaySkills").innerText = skills;
        document.getElementById("displayEducation").innerText = education;
        document.getElementById("displayExperience").innerText = experience;
    }
    (_a = document.getElementById("resumeForm")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form submission
        if (validateForm()) {
            generateResume();
        }
    });
});
