import { User } from "./user.js";
import {checkout} from "./cart.js";


const headerArea = document.getElementById("header_area");



headerArea.innerHTML =
    `
      <ul>
        <li class="welcome">Welcome <b class="username" id="user_name">User</b></li>

        <li>
          <ul>

            <li class="hidden" id="btn_1_wrap"><button class="btn menu-btn" id="btn_1"></button></li>
            <li class="hidden" id="btn_2_wrap"><button class="btn menu-btn" id="btn_2"></button></li>
            <li class="hidden" id="btn_3_wrap"><button class="btn menu-btn" id="btn_3"></button></li>

            <li><button class="btn menu-btn logout-btn" id="logout_btn">Logout</button></li>
          </ul>
        </li>
      </ul>`;


  //   `<header>
  //   <ul class="flex-box">
  //     <li>Welcome <b id="user_name">User</b></li>
  //     <li>
  //       <ul class="flex-box">
  //         <li class="hidden" id="dashboard_btn_wrap"><button class="btn" id="dashboard_btn"> Go To Dashboard</button></li>
  //         <li class="hidden" id="add_btn_wrap"><button class="btn" id="add_btn">AddProduct</button></li>
  //         <li class="hidden" id="cart_btn_wrap"><button class="btn" id="cart_btn">Cart</button></li>
  //         <li class="hidden" id="checkout_btn_wrap"><button class="btn" id="checkout_btn">Checkout</button></li>
          
          
  //         <li><button class="btn logout" id="logout_btn">Logout</button></li>
  //       </ul>
  //     </li>
  //   </ul>
  // </header>`;

if (!User.isLogged()) {
    alert("You're not loggedin");
    window.location.href = "/";
    } else {

    const pageBtnMap = {};

    pageBtnMap["/dashboard.html"] = [{
      name: "Add Product",
      loc: "/add_product.html",
      admin: true
    },{
      name: "Cart",
      loc: "/cart.html",
    }];

    pageBtnMap["/add_product.html"] = [{
      name: "Dashboard",
      loc: "/dashboard.html",
    },{
      name: "Cart",
      loc: "/cart.html"
    }];

    pageBtnMap["/cart.html"] = [{
      name: "Dashboard",
      loc: "/dashboard.html"
    },{
      name: "Add Product",
      loc: "/add_product.html",
      admin: true
    },{
      name: "Checkout",
      loc: "/cart.html",
      func: checkout
    }];


    const page = window.location.pathname;

    const btns = pageBtnMap[page];
    for(let i = 0; i < btns.length; i ++){
      const btn = btns[i];
      if(btn.admin && !User.isAdmin()) continue;
      const btnWrapElem = document.getElementById("btn_"+(i+1)+"_wrap");
      btnWrapElem.classList.remove("hidden");

      const btnElem = document.getElementById("btn_"+(i+1));
      btnElem.textContent = btn.name;
      btnElem.onclick = btn.func ? btn.func : function(){
        window.location.href = btn.loc;
      };
  }
    /** ---------------------------------------------------- */
    const userNameElem = document.getElementById("user_name");
    const logoutBtnElem = document.getElementById("logout_btn");

    const user = User.getCurrentUser();


/** --------------------------------------------------------------------------------------------- */    
    // const page = window.location.pathname;
    // if (user.role === User.roles.customer) {
    // /* getting ids' */
    //   const dashboardBtnWrap = document.getElementById("dashboard_btn_wrap");
    //   const dashboardBtnElem = document.getElementById("dashboard_btn");
    
    //   const addBtnWrap = document.getElementById("add_btn_wrap");
    //   const addBtnElem = document.getElementById("add_btn");
  
    //   const cartBtnWrap = document.getElementById("cart_btn_wrap");
    //   const cartBtnElem = document.getElementById("cart_btn");
  
    //   const checkoutBtnWrap = document.getElementById("checkout_btn_wrap");
    //   const checkoutBtnElem = document.getElementById("checkout_btn");

    //   /** btn to hide on pages */
    //   if (page === "/dashboard.html") {
    //       cartBtnWrap.classList.remove("hidden");
        
    //   } else if (page === "/add_product.html") {
    //       dashboardBtnWrap.classList.remove("hidden");
    //       cartBtnWrap.classList.remove("hidden");
        
    //   } else if (page === "/cart.html") {
    //       dashboardBtnWrap.classList.remove("hidden");
    //       checkoutBtnWrap.classList.remove("hidden");
    //   }

  
    //   /* functions to do on btns */
    //   dashboardBtnElem.onclick = function (eve) {
    //     eve.preventDefault();
    //     window.location.href = "/dashboard.html";
    //   }
  
    //   addBtnElem.onclick = function () {
    //     window.location.href = "/add_product.html";
    //   }
  
    //   cartBtnElem.onclick = function () {
    //     window.location.href = "/cart.html";
    //   }
  
    //   checkoutBtnElem.onclick = function () {
    //     window.location.href = "/cart.html";
    //   }
  
    
    // }else if (user.role === User.roles.admin) {
    // /* getting ids' */
    //   const dashboardBtnWrap = document.getElementById("dashboard_btn_wrap");
    //   const dashboardBtnElem = document.getElementById("dashboard_btn");
    
    //   const addBtnWrap = document.getElementById("add_btn_wrap");
    //   const addBtnElem = document.getElementById("add_btn");
  
    //   const cartBtnWrap = document.getElementById("cart_btn_wrap");
    //   const cartBtnElem = document.getElementById("cart_btn");
  
    //   const checkoutBtnWrap = document.getElementById("checkout_btn_wrap");
    //   const checkoutBtnElem = document.getElementById("checkout_btn");

 
    //   /** btn to hide on pages */
    //   if (page === "/dashboard.html") {
    //       addBtnWrap.classList.remove("hidden");
    //       cartBtnWrap.classList.remove("hidden");
        
    //   } else if (page === "/add_product.html") {
    //       dashboardBtnWrap.classList.remove("hidden");
    //       cartBtnWrap.classList.remove("hidden");
        
    //   } else if (page === "/cart.html") {
    //       dashboardBtnWrap.classList.remove("hidden");
    //       addBtnWrap.classList.remove("hidden");
    //       checkoutBtnWrap.classList.remove("hidden");
    //   }

  
    //   /* functions to do on btns */
    //   dashboardBtnElem.onclick = function (eve) {
    //     eve.preventDefault();
    //     window.location.href = "/dashboard.html";
    //   }
  
    //   addBtnElem.onclick = function () {
    //     window.location.href = "/add_product.html";
    //   }
  
    //   cartBtnElem.onclick = function () {
    //     window.location.href = "/cart.html";
    //   }
  
    //   checkoutBtnElem.onclick = function () {
    //     window.location.href = "/cart.html";
    //   }

    // }
    /** ----------------------------------------------------------------------------------------------------------- */
    userNameElem.textContent = user.name;

  
    logoutBtnElem.onclick = function (eve) {
        eve.preventDefault(); // just habit
        User.removeCurrentUser();
        window.location.href = "/";
    }
}
