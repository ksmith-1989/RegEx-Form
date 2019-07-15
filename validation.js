const inputs = document.querySelectorAll("input");

const patterns = {
  telephone: /^\d{10}$/
};

function validate(field, regex) {
  console.log(regex.test(field.value));
}

inputs.forEach(input => {
  input.addEventListenser("keyup", e => {
    validate(e.target, patterns["e.target.attributes.name.value"]);
  });
});
