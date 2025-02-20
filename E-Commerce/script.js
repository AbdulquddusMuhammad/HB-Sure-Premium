const bars = document.getElementById("bar");
const navBars = document.getElementById("navbar");
const closeNavBar = document.getElementById("close");

const ordering = document.querySelector(".ordering");
const product_card = document.querySelectorAll(".pro-sect1");

const ordering_image = document.querySelector(".product-image");
const pop_up = document.querySelector(".pop-up");

const pop_up_des = document.querySelector(".product-description");

// the destination for the url gotten from d_img_of_prd_to_b_bought
let image_for_buyer = document.querySelector(".image-of-product-to-buy");

let d_img_of_prd_to_b_bought;

//
const closeOrdering = document.querySelector(".ordering .fa-solid.fa-xmark");

// ordering button
const order_now = document.querySelector(".order-button");

// the buyers pop up container
const buyers_pop_container = document.querySelector(".buyers-form-pop-up");

// the buyers pop up form
const buyers_pop_form = document.querySelector(".buyer-form");

//send buyers info or request
const sendbtn = document.querySelector(".send-button");

//////////////////////
let nameOfPro = "";
/////////////////////

///////////////
const nameOnForm = document.querySelector("#name-of-product");
console.log(nameOnForm.value);
////////////

closeOrdering.addEventListener("click", () => {
  console.log("clicked");
  pop_up.style.display = "none";
});

if (bars) {
  bars.addEventListener("click", () => {
    navBars.classList.add("active");
  });
}

if (close) {
  closeNavBar.addEventListener("click", () => {
    navBars.classList.remove("active");
  });
}

// console.log(product_card.length);

// for (i = 0; i < product_card.length; i++) {
//     let card_clicked = product_card[i]
//     product_card[i].addEventListener("click", () => {
//         ordering.style.display = "block"
//         let card_image = card_clicked.querySelector("img")
//         let card_img_src = card_image.getAttribute("src");
//         ordering.querySelector(".product-image").style.backgroundImage = `url("${card_img_src}")`
//     })
// }

window.onload = () => {
  // console.log(product_card.length);
  for (i = 0; i < product_card.length; i++) {
    let card_clicked = product_card[i];
    product_card[i].addEventListener("click", (event) => {
      let card_image = card_clicked.querySelector("img");
      let card_image_url = card_image.getAttribute("src");
      d_img_of_prd_to_b_bought = card_image.getAttribute("src");
      let pop_image = ordering.querySelector(".product-image");
      let pop_title = ordering.querySelector(".product-title");
      let cardTitle = card_clicked.querySelector("h5").innerHTML;
      let card_description = card_clicked.querySelector(".pro-des");
      ////////////////////////////
      nameOfPro = card_clicked.querySelector("h5");
      console.log(nameOfPro.innerHTML);
      ////////////////////////////
      // console.log(card_description);
      let card_des_text = card_description.innerHTML;
      pop_up_des.innerHTML = card_des_text;
      // product = product-description.innerHTML;
      // console.log(product);
      pop_title.innerHTML = cardTitle;
      pop_image.style.backgroundImage = `url("${card_image_url}")`;
      pop_up.style.display = "block";
      ordering.style.display = "block";
    });
  }
};

// product information pop up
pop_up.addEventListener("click", (eve) => {
  if (eve.target.classList.contains("pop-up")) {
    pop_up.style.display = "none";
  }
});

let f_name;
let phone_num;
let quantity;

// gets the buyers forms input
function go() {
  f_name = document.querySelector("#buyers-name").value;
  phone_num = document.querySelector("#buyers-phone-number").value;
  quantity = document.querySelector("#amount-needed").value;

  console.log(f_name);
  console.log(phone_num);
  console.log(quantity);
  console.log(nameOfPro);
}

// pop for users form when order now is clicked
order_now.addEventListener("click", () => {
  nameOnForm.value = nameOfPro.innerHTML;
  pop_up.style.display = "none";
  buyers_pop_container.classList.add("buyers-form-pop-up-available");
  console.log(d_img_of_prd_to_b_bought);
  image_for_buyer.style.backgroundImage = `url("${d_img_of_prd_to_b_bought}")`;

  document.querySelector("#buyers-name").value = "";
  document.querySelector("#buyers-phone-number").value = "";
  document.querySelector("#amount-needed").value = "";
});

// buyer pop container
buyers_pop_container.addEventListener("click", (event) => {
  buyers_pop_container.classList.remove("buyers-form-pop-up-available");
});

// buyer pop up
buyers_pop_form.addEventListener("click", (event) => {
  event.stopPropagation();
});

sendbtn.addEventListener("click", () => {
  go();
});
