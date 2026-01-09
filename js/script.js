const inputName = document.querySelector("#insert_name");

const selectClass = document.querySelector("#class_select");

const submittButton = document.querySelector("#submit_button");

const form = document.querySelector("form")

const outputDiv = document.querySelector("#char-output")

function charBuilder(event) {
  event.preventDefault();

  const formName = inputName.value;
  const classPicked = selectClass.value;

  outputDiv.innerHTML = `
  <div class="game-resume">
    <h3>Your Hero has been created!</h3>
    <p>Name: ${formName}</p>
    <p>Class: ${classPicked}</p>
    <p>Status: Level 1 - Ready to start!</p>
  </div>
`;

  form.reset()
}

submittButton.addEventListener('click', charBuilder);
