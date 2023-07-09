import { Product } from "./product.js";
import { User } from "./user.js";
import { showCartItem } from "./cart.js";

if(!User.isLogged()){
  alert("You're not loggedin");
  window.location.href = "/";
}else{

  
  const cartElem = document.getElementById("cart_items");
  
  const user = User.getCurrentUser();
  // console.log(user.cart);
  const cartItems = user.cart.items;
  
  for(const prodId in cartItems){
    const product  = Product.getInfo(prodId);
    
    const li = document.createElement("li");
    li.innerHTML = showCartItem(product, cartItems[prodId]);
    cartElem.appendChild(li);

    const quantityElem = document.getElementById(`quantity_${prodId}`);

    const decBtn = document.getElementById(`dec_btn_${prodId}`);
    const incBtn = document.getElementById(`inc_btn_${prodId}`);
    
    const delBtn = document.getElementById(`del_btn_${prodId}`);
    const infoBtn = document.getElementById(`view_desc_btn_${prodId}`);

    decBtn.onclick = function(){
      const user = User.getCurrentUser();
      user.cart.decQuantity(prodId);
      
      const quantity = user.cart.items[prodId];
      if(quantity) quantityElem.textContent = quantity;
      else window.location.href = "/cart.html";
    }
    
    incBtn.onclick = function(){
      const user = User.getCurrentUser();
      user.cart.incQuantity(prodId);
      quantityElem.textContent = user.cart.items[prodId];
    }

    delBtn.onclick = function(){
      const user = User.getCurrentUser();
      user.cart.removeItem(prodId);
      window.location.href = "/cart.html";
    }
    
    infoBtn.onclick = function(){
      product.showDesc();
    }
  }

  
}
