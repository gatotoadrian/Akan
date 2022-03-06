// collect data from HTML
const formData = document.getElementById("submit");
const displayName = document.querySelector(".output"); // displaying akan names on the desired position
const userGender = document.querySelectorAll("#gender");
const daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const maleAkanNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
const femaleAkanNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
formData.addEventListener("click", function (ceaseAction) {
ceaseAction.preventDefault();
const dateInput = document.getElementById("date").value;
const date = new Date(dateInput);
const year = date.getFullYear();
const day = date.getDay();
// console.log(maleAkanNames[day]);
// displayName.innerHTML = `${maleAkanNames[day]}`;
// console.log(typeof userGender);
for(let choice of userGender){
// console.log(choice.value);
if (choice.value === "male"){
// console.log(`${maleAkanNames[day]}`);
displayName.innerHTML = `${maleAkanNames[day]}`;
}
if (choice.value === "female"){
// console.log(`${femaleAkanNames[day]}`);
displayName.innerHTML = `${femaleAkanNames[day]}`;
}
}
})