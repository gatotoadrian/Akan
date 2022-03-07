const submition = document.getElementById("button");

const submitionDate = document.querySelector(".output");

const sex = document.querySelectorAll("#action");

const males = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];

const females = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

const days = ["Sunday", "Monday", "Tueday", "Wednesday", "Thursday", "Friday", "Satruday"];


submition.addEventListener("click", function (terminateAction) {
terminateAction.preventDefault();
const newDate = document.getElementById("date").value;
const setDate = new Date(newDate);
const initialYear = setDate.getFullYear();
const newEntry = setDate.getDay();
for(let choice of gender){
if (choice.value === "male"){
submitionDate.innerHTML = `Here is your Akan name: ${males[newEntry]}`;
}
if (choice.value === "female"){
submitionDate.innerHTML = `Here is your Akan name: ${females[newEntry]}`;
}
}
})