const inputName = document.querySelector("#insert_name");

const selectClass = document.querySelector("#class_select");

const submittButton = document.querySelector("#submit_button");

function charBuilder(event) {
  event.preventDefault();

  const formName = inputName.value;
  const classPicked = selectClass.value;

  alert("Hero: " + formName + " | Class: " + classPicked + "has been created");
}

submittButton.addEventListener('click', charBuilder);
