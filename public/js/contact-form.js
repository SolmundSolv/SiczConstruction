const contactForm = document.getElementById("contact-form");
let name = document.getElementById("name");
let email = document.getElementById("email");
let company = document.getElementById("company");
let content = document.getElementById("content");

contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let formData = {
        name: name.value,
        email: email.value,
        company: company.value,
        content: content.value,
    };

    let hxr = new XMLHttpRequest();
    hxr.open("POST", "/send-email");
    hxr.setRequestHeader("content-type", "application/json");
    hxr.onload = function () {
        console.log(hxr);
        console.log(formData);
        if (hxr.responseText == "success") {
            alert("Email sent");
            name.value = "";
            email.value = "";
            company.value = "";
            content.value = "";
        } else {
            alert("Something goes wrong");
        }
    };
    hxr.send(JSON.stringify(formData));
});
