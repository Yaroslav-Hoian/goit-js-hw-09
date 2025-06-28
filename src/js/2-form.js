const form = document.querySelector(".feedback-form");
const localStorageKey = "feedback-form-state";
const email = form.elements.email;
const message = form.elements.message;

const savedData = JSON.parse(localStorage.getItem(localStorageKey)) || {};
const formData = {
    email: savedData.email ?? "",
    message: savedData.message ?? ""
}

try {
    email.value = formData.email;
    message.value = formData.message;
} catch (error) {
    console.log(error.name);
    console.log(error.message);
}

form.addEventListener("input", (ev) => {
    formData[ev.target.name] = ev.target.value.trim();
    localStorage.setItem(localStorageKey, JSON.stringify(formData));
});

form.addEventListener("submit", (ev) => {
    ev.preventDefault();

    const emailValue = email.value.trim();
    const messageValue = message.value.trim();
    if (emailValue === "" || messageValue === "") {
        return alert('Fill in all fields')
    };

    const submitData = {
        email: emailValue,
        message: messageValue
    }

    console.log(submitData);
    localStorage.removeItem(localStorageKey);
    form.reset();
});