const loginForm = document.querySelector(".login-form");
loginForm.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const inputEmail = event.target.elements.email;
  const inputPass = event.target.elements.password;

  if (!inputEmail.value.trim() || !inputPass.value.trim()) {
    alert("Заполните все поля!");
  } else {
    const formData = {
      email: inputEmail.value,
      password: inputPass.value,
    };
    console.log(formData);
    loginForm.reset();
  }
}
