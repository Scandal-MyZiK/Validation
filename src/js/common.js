document.addEventListener("DOMContentLoaded", () => {
  function validation(form) {
    function removeError(input) {
      const parent = input.parentNode;
      if (input.classList.contains("error")) {
        parent.querySelector(".error-label").remove();
        input.classList.remove("error");
      }
    }

    function createError(input, text) {
      const parent = input.parentNode;
      const errorLabel = document.createElement("label");
      errorLabel.classList.add("error-label");
      errorLabel.textContent = text;
      input.classList.add("error");
      parent.append(errorLabel);
    }
    let result = true;
    const allInputs = form.querySelectorAll("input");

    for (const input of allInputs) {
      removeError(input);
      if (input.value == "") {
        console.log("Ошибка поля");
        createError(input, "Поле не заполнено!");
        result = false;
      }
    }
    return result;
  }

  document
    .getElementById("add-from")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      if (validation(this) == true) {
        alert("Форма проверена успешно!");
      }
    });
});
