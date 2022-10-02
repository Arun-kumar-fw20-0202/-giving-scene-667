
import navbar from './components/navbar.js';
document.getElementById('navbar').innerHTML = navbar();


let wowomensdata = [
    {
      image:
        "https://images.bewakoof.com/t540/one-with-the-universe-boyfriend-t-shirt-483055-1648223195-1.jpg",
      brand_description: "Women's Black One with the Universe Graphic Printed Boyfriend T-shirt",
      price: 599,
      sprice: "₹999",
      member_price: "₹269 For Tribe Member",
    },
    {
      image:
        " https://images.bewakoof.com/t540/oops-boyfriend-t-shirt-483039-1648528775-1.jpg  ",
      brand_description: "Women's Yellow Oops Graphic Printed Boyfriend T-shirt  ",
      price: 400,
      sprice: "₹999",
      member_price: "₹269 For Tribe Member",
    },
  
    {
      image:
        " https://images.bewakoof.com/t540/i-decide-my-vibe-boyfriend-t-shirt-479894-1646639984-1.jpg  ",
      brand_description: " Women's Purple I Decide My Vibe Boyfriend Fit T-shirt ",
      price: 300,
      sprice: "₹999",
      member_price: "₹269 For Tribe Member",
    },
    {
      image:
        " https://images.bewakoof.com/t540/motd-panda-boyfriend-t-shirt-479771-1646211087-1.jpg  ",
      brand_description: " Women's White MOTD Panda T-shirt ",
      price: 500,
      sprice: "₹999",
      member_price: "₹269 For Tribe Member",
    },
    {
      image:
        " https://images.bewakoof.com/t540/nasa-astronaut-boyfriend-t-shirt-481830-1648011725-1.jpg  ",
      brand_description: " Women's Red NASA Astronaut Boyfriend T-shirt ",
      price: 600,
      sprice: "₹999",
      member_price: "₹269 For Tribe Member",
    },
    {
      image:
        " https://images.bewakoof.com/t540/music-escape-boyfriend-t-shirt-483052-1648223085-1.jpg  ",
      brand_description: " Women's White Music Escape Printed Boyfriend T-shirt ",
      price: 880,
      sprice: "₹999",
      member_price: "₹269 For Tribe Member",
    },
    {
      image:
        " https://images.bewakoof.com/t540/nasa-astronaut-boyfriend-t-shirt-481837-1648011703-1.jpg  ",
      brand_description: " Women's Black NASA Astronaut Boyfriend T-shirt ",
      price: 605,
      sprice: "₹999",
      member_price: "₹269 For Tribe Member",
    },
    {
      image:
        " https://images.bewakoof.com/t540/music-escape-boyfriend-t-shirt-483050-1648223129-1.jpg  ",
      brand_description: "Women's Purple Music Escape Printed Boyfriend T-shirt  ",
      price: 700,
      sprice: "₹999",
      member_price: "₹269 For Tribe Member",
    },
  
    {
      image:
        " https://images.bewakoof.com/t540/bugs-bunny-boy-friend-fit-tshirt-441317-1644558359-1.jpg   ",
      brand_description: "Women's White Bugs Bunny Oversized T-shirt  ",
      price: 217,
      sprice: "₹899",
      member_price: "₹269 For Tribe Member",
    },
  
    {
      image:
        " https://images.bewakoof.com/t540/jet-black-round-neck-3-4th-sleeve-t-shirt-105769-1637995851-1.jpg  ",
      brand_description: " Women's Black T-shirt ",
      price: 380,
      sprice: 880,
      member_price: "₹269 For Tribe Member",
    },
    {
      image:
        "https://images.bewakoof.com/t540/jasmin-green-stripe-half-sleeve-t-shirt-473148-1645889994-1.jpg   ",
      brand_description: " Chilled Out Green Stripe T-shirt ",
      price: 100,
      sprice: "₹899",
      member_price: "₹269 For Tribe Member",
    },
    {
      image:
        "  https://images.bewakoof.com/t540/music-bear-boyfriend-t-shirt-white-329746-1637854875-1.jpg ",
      brand_description: " Women's White Music Bear Boyfriend T-shirt ",
      price: 745,
      sprice: "₹749",
      member_price: "₹269 For Tribe Member",
    },
    {
      image:
        " https://images.bewakoof.com/t540/busy-doin-nothing-boyfriend-t-shirt-dl-pineapple-yellow-277532-1637995596-1.jpg  ",
      brand_description: " Busy Doin Nothing Boyfriend T-Shirt (DL) Pineapple Yellow ",
      price: 555,
      sprice: "₹549",
      member_price: "₹269 For Tribe Member",
    },
    {
      image:
        " https://images.bewakoof.com/t540/jasmin-green-boyfriend-t-shirts-459203-1645889869-1.jpg  ",
      brand_description: " Chilled Out Green Boyfriend T-shirt ",
      price: 520,
      sprice: "₹699",
      member_price: "₹269 For Tribe Member",
    },
    {
      image:
        "  https://images.bewakoof.com/t540/normal-is-boring-boy-friend-fit-tshirt-441305-1644558127-1.jpg ",
      brand_description: "Women's Black Polka Print Oversized T-shirt  ",
      price: 789,
      sprice: "₹899",
      member_price: "₹269 For Tribe Member",
    },
    {
      image:
        " https://images.bewakoof.com/t540/white-women-s-puff-sleeve-t-shirt-360889-1635869934-1.jpg  ",
      brand_description: " White Women's Puff Sleeve T-Shirt ",
      price: 666,
      sprice: "₹649",
      member_price: "₹269 For Tribe Member",
    },
    {
      image:
        " https://images.bewakoof.com/t540/meteor-grey-boyfriend-t-shirt-211954-1637996010-1.jpg  ",
      brand_description: " Meteor Grey Boyfriend T-Shirt",
      price: 751,
      sprice: 880,
      member_price: "₹269 For Tribe Member",
    },
    {
      image:
        " https://images.bewakoof.com/t540/black-varsity-half-sleeve-round-neck-t-shirt-405982-1637134388-1.jpg  ",
      brand_description: " Women's Black Varsity Half Sleeve Round Neck T-shirt ",
      price: 880,
      sprice: "₹649",
      member_price: "₹269 For Tribe Member",
    },
    {
      image:
        " https://images.bewakoof.com/t540/mickey-colourful-boy-friend-fit-tshirt-441316-1644558389-1.jpg  ",
      brand_description: " Women's White Mickey AOP Oversized T-shirt ",
      price: 980,
      sprice: "₹899",
      member_price: "₹269 For Tribe Member",
    },
    {
      image:
        "  https://images.bewakoof.com/t540/bold-red-boyfriend-plus-size-boyfriend-t-shirt-326632-1637995844-1.jpg ",
      brand_description: " Bold Red Boyfriend Plus Size Boyfriend T-Shirt ",
      price: "₹449",
      sprice: "₹749",
      member_price: "₹269 For Tribe Member",
    },
  
    {
      image:
        " https://images.bewakoof.com/t540/bachelor-button-jasmin-green-stripe-short-top-463927-1643558328-1.jpg  ",
      brand_description: " Upbeat Blue Stripe Short Top ",
      price: 840,
      sprice: "₹899",
      member_price: "₹269 For Tribe Member",
    },
    {
      image:
        " https://images.bewakoof.com/t540/climbing-pocket-panda-boyfriend-t-shirt-231686-1640346487-1.jpg  ",
      brand_description: " Climbing Pocket Panda Boyfriend T-Shirt   ",
      price: 880,
      sprice: "₹549",
      member_price: "₹269 For Tribe Member",
    },
    {
      image:
        " https://images.bewakoof.com/t540/magenta-solid-v-neck-top-442909-1645435129-1.JPG  ",
      brand_description: " Magenta Solid V-neck Top   ",
      price: 980,
      sprice: "₹899",
      member_price: "₹269 For Tribe Member",
    },
    {
      image:
        " https://images.bewakoof.com/t540/happy-today-half-sleeve-t-shirts-women-s-half-sleeve-printed-t-shirt-313948-1610098291.jpg  ",
      brand_description: "  Happy Today Half Sleeve T-Shirt  ",
      price: 100,
      sprice: "₹699",
      member_price: "₹269 For Tribe Member",
    },
  
    {
      image:
        " https://images.bewakoof.com/t540/stay-classy-minnie-dl-473316-1645260749-1.jpg  ",
      brand_description: " Women's Yellow Stay Classy Minnie (DL) Slim Fit T-shirt   ",
      price: 751,
      sprice: "₹999",
      member_price: "₹269 For Tribe Member",
    },
  
    {
      image:
        " https://images.bewakoof.com/t540/pocket-jerry-half-sleeve-t-shirt-tjl-242006-1637843402-1.jpg  ",
      brand_description: "  Women's Red Pocket Jerry Slim Fit T-shirt  ",
      price: 100,
      sprice: "₹549",
      member_price: "₹269 For Tribe Member",
    },
    {
      image:
        " https://images.bewakoof.com/t540/peanuts-yellow-475620-1646117337-1.jpg  ",
      brand_description: "  Women's Blue Typography T-shirt  ",
      price: 751,
      sprice: "₹999",
      member_price: "₹269 For Tribe Member",
    },
    {
      image:
        " https://images.bewakoof.com/t540/ceylon-yellow-plus-size-pocket-t-shirt-417956-1646129517-1.jpg  ",
      brand_description: " Women's Ceylon Yellow Color Block Relaxed Fit Plus Size T-shirt   ",
      price: 458,
      sprice: "₹1049",
      member_price: "₹269 For Tribe Member",
    },
    {
      image:
        " https://images.bewakoof.com/t540/enjoy-cola-classic-461287-1645165932-1.jpg  ",
      brand_description: " Enjoy Coca Cola Classic Ringer T-shirt   ",
      price: 980,
      sprice: "₹799",
      member_price: "₹269 For Tribe Member",
    },
    {
      image:
        " https://images.bewakoof.com/t540/inner-peace-468836-1645449088-1.jpg  ",
      brand_description: " Inner Peace Women's Varsity Half Sleeve Round Neck T-shirt",
      price: 470,
      sprice: "₹799",
      member_price: "₹269 For Tribe Member",
    },
    {
      image:
        "  https://images.bewakoof.com/t540/misty-pink-round-neck-3-4th-sleeve-t-shirt-206182-1638211396-1.jpg ",
      brand_description: " Misty Pink Round Neck 3/4th Sleeve T-Shirt   ",
      price: 200,
      sprice: 880,
      member_price: "₹269 For Tribe Member",
    },
    {
      image:
        " https://images.bewakoof.com/t540/bachelor-button-side-cut-t-shirt-463560-1643559958-1.jpg  ",
      brand_description: " Upbeat Blue Side Cut T-shirt  ",
      price: 200,
      sprice: "₹899",
      member_price: "₹269 For Tribe Member",
    },
  
    {
      image:
        " https://images.bewakoof.com/t540/bunny-rabbit-pocket-half-sleeve-t-shirt-248178-1638185592-1.jpg  ",
      brand_description: "  Women's Black Bunny Rabbit Pocket Slim Fit T-shirt ",
      price: 200,
      sprice: 980,
      member_price: "₹269 For Tribe Member",
    },
    {
      image:
        " https://images.bewakoof.com/t540/i-ll-be-there-friends-half-sleeve-t-shirt-459797-1644595792-1.jpg  ",
      brand_description: " I'll Be There Friends Half Sleeve T-shirt  ",
      price: 751,
      sprice: "₹799",
      member_price: "₹269 For Tribe Member",
    },
    {
      image:
        "https://images.bewakoof.com/t540/olive-branch-elbow-sleeve-round-neck-t-shirt-422743-1641390443-1.jpg   ",
      brand_description: " Women's Olive Elbow Sleeve Scoop Neck T-shirt  ",
      price: "₹449",
      sprice: "₹799",
      member_price: "₹269 For Tribe Member",
    },
    {
      image:
        " https://images.bewakoof.com/t540/women-s-white-boyfriend-t-shirt-119167-1647430005-1.jpg  ",
      brand_description: " Women's White Boyfriend T-shirt  ",
      price: 751,
      sprice: 880,
      member_price: "₹269 For Tribe Member",
    },
  
    {
      image:
        "https://images.bewakoof.com/t540/scary-list-boyfriend-t-shirt-483035-1648447161-1.jpg",
      brand_description: "Women's Pink Scary List Typography Boyfriend T-shirt",
      price: 200,
      sprice: "₹999",
      member_price: "₹269 For Tribe Member",
    },
    {
      image:
        "https://images.bewakoof.com/t540/one-with-the-universe-boyfriend-t-shirt-483055-1648223195-1.jpg",
      brand_description: "Women's Black One with the Universe Graphic Printed Boyfriend T-shirt",
      price: 200,
      sprice: "₹999",
      member_price: "₹269 For Tribe Member",
    },
    {
      image:
        " https://images.bewakoof.com/t540/oops-boyfriend-t-shirt-483039-1648528775-1.jpg  ",
      brand_description: "Women's Yellow Oops Graphic Printed Boyfriend T-shirt  ",
      price: 200,
      sprice: "₹999",
      member_price: "₹269 For Tribe Member",
    },
  
    {
      image:
        " https://images.bewakoof.com/t540/i-decide-my-vibe-boyfriend-t-shirt-479894-1646639984-1.jpg  ",
      brand_description: " Women's Purple I Decide My Vibe Boyfriend Fit T-shirt ",
      price: 880,
      sprice: "₹999",
      member_price: "₹269 For Tribe Member",
    },
    {
      image:
        " https://images.bewakoof.com/t540/motd-panda-boyfriend-t-shirt-479771-1646211087-1.jpg  ",
      brand_description: " Women's White MOTD Panda T-shirt ",
      price: 751,
      sprice: "₹999",
      member_price: "₹269 For Tribe Member",
    },
    {
      image:
        " https://images.bewakoof.com/t540/nasa-astronaut-boyfriend-t-shirt-481830-1648011725-1.jpg  ",
      brand_description: " Women's Red NASA Astronaut Boyfriend T-shirt ",
      price: 880,
      sprice: "₹999",
      member_price: "₹269 For Tribe Member",
    },
    {
      image:
        " https://images.bewakoof.com/t540/music-escape-boyfriend-t-shirt-483052-1648223085-1.jpg  ",
      brand_description: " Women's White Music Escape Printed Boyfriend T-shirt ",
      price: 200,
      sprice: "₹999",
      member_price: "₹269 For Tribe Member",
    },
    {
      image:
        " https://images.bewakoof.com/t540/nasa-astronaut-boyfriend-t-shirt-481837-1648011703-1.jpg  ",
      brand_description: " Women's Black NASA Astronaut Boyfriend T-shirt ",
      price: 880,
      sprice: "₹999",
      member_price: "₹269 For Tribe Member",
    },
  
    {
      image:
        " https://images.bewakoof.com/t540/i-decide-my-vibe-boyfriend-t-shirt-479894-1646639984-1.jpg  ",
      brand_description: " Women's Purple I Decide My Vibe Boyfriend Fit T-shirt ",
      price: 880,
      sprice: "₹999",
      member_price: "₹269 For Tribe Member",
    },
    {
      image:
        " https://images.bewakoof.com/t540/motd-panda-boyfriend-t-shirt-479771-1646211087-1.jpg  ",
      brand_description: " Women's White MOTD Panda T-shirt ",
      price: 751,
      sprice: "₹999",
      member_price: "₹269 For Tribe Member",
    },
  ];
  
  localStorage.setItem("wp",JSON.stringify(wowomensdata));
  let data=JSON.parse(localStorage.getItem("wp"));
  
  function apnd(data){
      let con=document.querySelector(".products") || document.getElementById("wd");
      con.innerHTML=null;
      con.id="wd";
  
      data.forEach(function(el){
          let box=document.createElement("div");
          box.setAttribute("class","productbox")

          box.addEventListener('click', ()=> {
            clickedPro(el);
          })

          let img=document.createElement('img');
          img.src=el.image;
  
          let brand=document.createElement("p");
          brand.textContent=el.brand_description;
          brand.style.color="grey"
          brand.style.fontWeight="smaller"
  
          let price=document.createElement("h3");
          price.id="pricetext"
          price.textContent=el.price;
  
          let mp=document.createElement("p");
          mp.textContent=el.member_price;
          mp.style.fontWeight="bold";
          mp.style.fontSize="smaller"
          let sprice=document.createElement("p");
          sprice.style.textDecoration="line-througn"
          sprice.textContent=el.sprice
          box.append(img,brand,price,sprice,mp);
          con.append(box);
          // div.addEventListener("click",function(){
          //     redirect(el);
          // });
          // function redirect(el){
          //     localStorage.setItem("item",JSON.stringify(el));
          //     window.location.href="index.html"
          // }
      })
  }
  // apnd()
  let myPro=new Promise(function(resolve,reject){
      setTimeout(function(){
          let data=wowomensdata;
          if(data!=null){
              resolve(data);
          }
          else{
              reject("issue from server")
          }
      },1000)
  });
  
  async function main(){
      try{
          let res=await myPro;
          apnd(res);
      }catch(e){
          console.log(e)
      }
  }
  main()

  document.getElementById('lowTohight').addEventListener("click", ()=> {
    // alert("working")
    let data=JSON.parse(localStorage.getItem("wp"));
        data.sort((a,b)=>a.price-b.price);
        apnd(data)
        console.log(data)
  })
  document.getElementById('highTolow').addEventListener("click", ()=> {
    // alert("working")
    let data=JSON.parse(localStorage.getItem("wp"));
    
      data=data.sort((a,b)=>b.price-a.price);
      apnd(data);
      console.log(data)
  })



  function clickedPro(ele){
    localStorage.setItem("clickedItem", JSON.stringify(ele));
    window.location.href = 'add_cart/cart.html';
  }




  document.getElementById("searchFm").addEventListener("submit", (e)=> {
    e.preventDefault();
    
    // 
  let search=document.getElementById("search_product_by_name");
  localStorage.setItem("wp",JSON.stringify(wowomensdata));
  let data=JSON.parse(localStorage.getItem("wp"));
  
  function apnd(data){
      let con=document.querySelector(".products") || document.getElementById("wd");
      con.innerHTML=null;
      con.id="wd";
  
      data.forEach(function(el){
          let box=document.createElement("div");
         box.setAttribute("class","productbox")
          let img=document.createElement('img');
          img.src=el.image;
  
          let brand=document.createElement("p");
          brand.textContent=el.brand_description;
          brand.style.color="grey"
          brand.style.fontWeight="smaller"
  
          let price=document.createElement("h3");
          price.id="pricetext"
          price.textContent=el.price;
  
          let mp=document.createElement("p");
          mp.textContent=el.member_price;
          mp.style.fontWeight="bold";
          mp.style.fontSize="smaller"
          let sprice=document.createElement("p");
          sprice.style.textDecoration="line-througn"
          sprice.textContent=el.sprice
          box.append(img,brand,price,sprice,mp);
          con.append(box);
          
      })
  }

    search.addEventListener("input",function(){
      let fil=wowomensdata.filter(function(el){
          return el.brand_description.toLocaleLowerCase()
          .includes(search.value.toLocaleLowerCase());
      });
      apnd(fil);
    });
})