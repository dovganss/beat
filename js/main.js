const form = document.querySelector(".form");

const validate = (fields) => {
  let valid = true
  fields.forEach((f) => {
    f.classList.remove("field_error");
    if (f.value.trim() == "") {
      f.classList.add("field_error");
      valid = false
    }
 });

 return valid
};

form.addEventListener("submit", function (e) {
  e.preventDefault ();
  const name = form.elements.name;
  const phone = form.elements.phone;
  const house = form.elements.house;

  const fields = [name, phone, house];

  const isValid = validate(fields);

  if (isValid) {
    console.log("валидация пройдена")
  } else {
    console.log("валидация не пройдена");
  }
});