import { User } from "./user.js";

User.initStorage();

if(!User.isLogged()){
  // it means user is not logged in
  const signinForm = document.querySelector("#signin_form");
  
  signinForm.onsubmit = function(eve){
    eve.preventDefault();
    // eve.target
    const fd = new FormData(signinForm);
    const email = fd.get("email");
    const password = fd.get("password");

    const user = new User(email, password);
    
    if(User.isValidUser(user, true)){
      const user = User.getInfo(email);
      User.setCurrentUser(user); // to signin user
      window.location.href = "/dashboard.html"; // to open dashboard
    }
  }
}else{
  // means user logged in, and cart section will be shown
  window.location.href = "/dashboard.html";
}