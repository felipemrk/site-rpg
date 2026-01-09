const inputName = document.querySelector("#insert_name");

const selectClass = document.querySelector("#class_select");

const submittButton = document.querySelector("#submit_button");

const form = document.querySelector("form")

function charBuilder(event) {
  event.preventDefault();

  const formName = inputName.value;
  const classPicked = selectClass.value;

  alert("Hero: " + formName + " | Class: " + classPicked + " has been created");

  form.reset()
}

submittButton.addEventListener('click', charBuilder);
