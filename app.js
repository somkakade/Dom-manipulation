const userInput = document.querySelector("#userInput");
const addBtn = document.querySelector("#addBtn");
const userList = document.querySelector(".userlist");

addBtn.addEventListener("click", function () {
  // create new li in the air
  const newLi = document.createElement("li");
  const licontent = document.createTextNode(userInput.value);
  //   Added licontent in the newLi
  newLi.appendChild(licontent);
  //   Added newLi in the user list
  userList.appendChild(newLi);
});
