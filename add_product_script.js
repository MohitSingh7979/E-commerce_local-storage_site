import { User } from "./user.js";
import { Product } from "./product.js";

Product.initStorage();

if(!User.isAdmin()){
  alert("You're not Admin.");
  window.location.href = "/dashboard.html";
}else{

  const addForm = document.getElementById("add_form");
  const infoElem = document.getElementById("info");
  
  addForm.onsubmit = function(eve){
    eve.preventDefault();
    const fd = new FormData(addForm);
    const name = fd.get("name");
    const desc = fd.get("desc");
    const price = fd.get("price");
    const image = fd.get("image");

    const product = new Product(name, desc, price, image);

    Product.addProductToStorage(product);
    addForm.reset();

    infoElem.innerHTML = "Product added.";
    infoElem.style.color = "green";
  }
}