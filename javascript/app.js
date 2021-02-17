function akan() {
  var birthDate = document.getElementById("date").nodeValue;
  var gender = document.getElementById("gender").nodeValue;
  toString: birthDate;
  if (!birthDate) {
    alert("You entered an invalid date");
  }
  var centuryYear;
  var birthYear;
  var birthMonth;
  var birthDay;
  var year;
  centuryYear = parseInt(birthDate.slice(0, 2));
  birthYear = parseInt(birthDate.slice(2, 4));
  birthMonth = parseInt(birthDate.slice(5, 7));
  birthDay = parseInt(birthDate.slice(8, 10));
  year = parseInt(birthDate.slice(0, 4));
  if (birthDay <= 0 || birthDay > 31 || birthMonth <= 0 || birthMonth > 12) {
    alert("You entered an invalid date");
  }
  var weekDays;
  var maleNames;
  var femaleNames;
  weekDays=["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  maleNames=["Kwasi", "Kwadwo", "Kwabena", "Kwaku","Yaw", "Kofi", "Kwame"];
  femaleNames=["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
}
