// let product = JSON.parse(localStorage.getItem("clickedPro"));
// console.log(product);

let data = JSON.parse(localStorage.getItem("clickedItem")) || [];

// let image = document.querySelector(".img");
// image.src = data.image;
// document.querySelector(".img").append(image);

// let brnd_name = document.querySelector("h2");
// brnd_name.textContent = product.brand;

// let brand_dscr = document.querySelector("p");
// brand_dscr.textContent = product.brand_description;

// let rate = document.querySelector("h4");
// rate.textContent = product.price;

// let mrp = document.querySelector("h5");
// mrp.textContent = product.striked_off_price;
// mrp.style.textDecoration = "line-through";


let imageDiv = document.querySelector(".img");

let img = document.createElement("img");
img.src = data.image;

imageDiv.append(img);

let j_features = document.querySelector(".j_features");

document.querySelector('.brand_price').innerText = data.price;
let oriPrice = document.querySelector('.ori_price').innerText = data.sprice;
// oriPrice.style.textDecoration = "line-through";

let bName = document.querySelector('.brand_name').innerText = data.brand_description;



let cartPro = JSON.parse(localStorage.getItem("cart")) || []

document.querySelector("#arun").addEventListener("click",()=> {
    cartPro.push(data)
    localStorage.setItem('cart', JSON.stringify(cartPro));
    window.location.href = '../cart.html'
})