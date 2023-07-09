import { User } from "./user.js";

User.initStorage();

const regForm = document.getElementById("reg_form");
const infoElem = document.getElementById("info");

regForm.onsubmit = function(eve) {
  eve.preventDefault();
  
  const formData = new FormData(regForm);
  const name = formData.get("name");
  const email = formData.get("email");
  const password = formData.get("password");
  const password2 = formData.get("password2");
  const role = formData.get("role");

  if (password != password2) alert("password not matched!!");
  else {
    
    const user = new User(email, password, name, role);
    console.log(user);
    if (User.isValidUser(user)) {
      info.innerHTML = `user already existed. Please <a href="/">Login</a>.`;
      info.style.color = "red";
    } else {
      User.addToStorage(user);
      info.innerHTML = `Account created. Please <a href="/">Login</a>.`;
      info.style.color = "green";
      const exitsUserElem = document.getElementById("alreadyExitsUser");
      exitsUserElem.classList.add("hidden");  
    }
    regForm.reset();
  }
}

//"["usrr1", "user2", ]"
//{"email": "user1", "emil2": "afdaf"}
//[] => ""
