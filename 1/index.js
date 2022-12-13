
let input = document.querySelector('.fullName');
let result = document.querySelector(".done");
let lastName = document.querySelector("lastName");
let firstName = document.querySelector("firstName");
let middleName = document.querySelector("middleName")

let divide = () => {
    let str = document.querySelector("input").value;
    let text = str.trim();
  let names = text.split(" ");
  let lastName = names[0];
  let firstName = names[1];
  let middleName = names[2];
  let lastNameRight =
    lastName[0].toUpperCase() + lastName.slice(1).toLowerCase();
  let firstNameRight =
    firstName[0].toUpperCase() + firstName.slice(1).toLowerCase();
  let middleNameRight =
  middleName[0].toUpperCase() + middleName.slice(1).toLowerCase();

  document.querySelector(".lastName").innerHTML = "Фамилия: " + lastNameRight;
  document.querySelector(".name").innerHTML = "Имя: " + firstNameRight;
  document.querySelector(".middleName").innerHTML =
    "Отчество: " + middleNameRight;

  document.querySelector("input").value = "";
}
