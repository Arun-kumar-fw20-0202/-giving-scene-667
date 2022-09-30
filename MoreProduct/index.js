let apii=async ()=>{
    try{
      let res=await fetch(
        `https://api.escuelajs.co/api/v1/products`
      )
      let data=await res.json();
      console.log(data)
      apnd(data)
    }catch(er){
        console.log("error:",er)
    }
}

function apnd(d){
  let con=document.getElementById("con");
  con.innerHTML=null;
  d.forEach((el)=>{
    let div=document.createElement("div");
    let img=document.createElement("img");
    img.src=el.images;
    img.id="photo"
    div.append(img);
    con.append(div);
  })
}


apii()