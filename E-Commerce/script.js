const bars = document.getElementById("bar");
const navBars = document.getElementById("navbar");
const closeNavBar = document.getElementById("close");

const ordering = document.querySelector(".ordering");
const product_card = document.querySelectorAll(".pro-sect1");

const ordering_image = document.querySelector(".product-image");
const pop_up = document.querySelector(".pop-up");

const pop_up_des = document.querySelector(".product-description");

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
  console.log(product_card.length);
  for (i = 0; i < product_card.length; i++) {
    let card_clicked = product_card[i];
    product_card[i].addEventListener("click", (event) => {
      let card_image = card_clicked.querySelector("img");
      let card_image_url = card_image.getAttribute("src");
      let pop_image = ordering.querySelector(".product-image");
      let pop_title = ordering.querySelector(".product-title");
      let cardTitle = card_clicked.querySelector("h5").innerHTML;
      let card_description = card_clicked.querySelector(".pro-des");
      console.log(card_description);
      let card_des_text = card_description.innerHTML;
      pop_up_des.innerHTML = card_des_text;
      // product = product-description.innerHTML;
      // console.log(product);
      pop_title.innerHTML = cardTitle;
      pop_image.style.backgroundImage = `url("${card_image_url}")`;
      pop_up.style.display = "block";
      ordering.style.display = "block";
      console.log("click");
    });
  }
};

pop_up.addEventListener("click", (eve) => {
  if (eve.target.classList.contains("pop-up")) {
    pop_up.style.display = "none";
  }
});
