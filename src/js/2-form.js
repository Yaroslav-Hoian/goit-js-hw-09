let formData = {
    email: "",
    message: ""
}

const form = document.querySelector(".feedback-form");
const localStorageKey = "feedback-form-state";

const savedData = localStorage.getItem(localStorageKey);

if (savedData) {
    formData = JSON.parse(savedData);
    form.email.value = formData.email || "";
    form.message.value = formData.message || "";
}

form.addEventListener("input", (ev) => {
    formData[ev.target.name] = ev.target.value.trim();
    localStorage.setItem(localStorageKey, JSON.stringify(formData));
});

form.addEventListener("submit", (ev) => {
    ev.preventDefault();

    if (ev.target.email.value === "" || ev.target.message.value === "") {
        return alert('Fill in all fields')
    };

    console.log(formData);
    localStorage.removeItem(localStorageKey);

    formData = {
        email: "",
        message: ""
    }

    form.reset();
});