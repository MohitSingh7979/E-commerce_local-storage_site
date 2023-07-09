import { Product } from "./product.js";
import { User } from "./user.js";

if(!User.isLogged()){
  alert("You're not loggedin");
  window.location.href = "/";
}else{
  
  const productsElem = document.getElementById("products");
  
  const productsObj = Product.getProductsFromStorage();
  
  for(const prodId in productsObj){
    const product  = Product.getInfo(prodId);
    
    const li = document.createElement("li");
    li.innerHTML = product.showProduct();
    productsElem.appendChild(li);

    const addCartBtn = document.getElementById(`add_cart_btn_${prodId}`);

    addCartBtn.onclick = function(){
      const user = User.getCurrentUser();
      user.cart.addItem(prodId);
      window.location.href = "/cart.html";
    }
    
    const infoBtn = document.getElementById(`view_desc_btn_${prodId}`);

    infoBtn.onclick = function(){
      product.showDesc();
    }
    
  }
}