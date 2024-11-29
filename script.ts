document.addEventListener("DOMContentLoaded", () => {
    function validateForm(): boolean {
        const form = document.getElementById("resumeForm") as HTMLFormElement;
        if (!form.checkValidity()) {
            alert("Please fill in all the required fields.");
            return false;
        }
        return true;
    }

    function generateResume(): void {
        const firstName = (document.getElementById("FirstName") as HTMLInputElement).value;
        const lastName = (document.getElementById("LastName") as HTMLInputElement).value;
        const email = (document.getElementById("Email") as HTMLInputElement).value;
        const phone = (document.getElementById("Phone") as HTMLInputElement).value;
        const address = (document.getElementById("Address") as HTMLInputElement).value;
        const skills = (document.getElementById("Skills") as HTMLInputElement).value;
        const education = (document.getElementById("Education") as HTMLTextAreaElement).value;
        const experience = (document.getElementById("Experience") as HTMLTextAreaElement).value;

        // Populate resume output
        (document.getElementById("displayFirstName") as HTMLElement).innerText = firstName;
        (document.getElementById("displayLastName") as HTMLElement).innerText = lastName;
        (document.getElementById("displayEmail") as HTMLElement).innerText = email;
        (document.getElementById("displayPhone") as HTMLElement).innerText = phone;
        (document.getElementById("displayAddress") as HTMLElement).innerText = address;
        (document.getElementById("displaySkills") as HTMLElement).innerText = skills;
        (document.getElementById("displayEducation") as HTMLElement).innerText = education;
        (document.getElementById("displayExperience") as HTMLElement).innerText = experience;
    }

    document.getElementById("resumeForm")?.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form submission
        if (validateForm()) {
            generateResume();
        }
    });
});
