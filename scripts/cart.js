
let cartValues = JSON.parse(localStorage.getItem("cart")) || [];
loadCart(cartValues)

document.querySelector(".countItem").innerHTML = cartValues.length;

function loadCart(items){
    let totalPrice = 0;
    let totadis = 0;

    let all = document.querySelector('.all');
    all.innerHTML = null;
    items.forEach((ele, i) => {
        
        totalPrice+=  ele.price;
// < -- -- Fetch Total --- -- -- >
        var str = ele.sprice;
        var matches = str.match(/(\d+)/);
// < -- -- Fetch Total --- -- -- >


// < -- -- Get Index --- -- -- >
        let index = i;
// < -- -- Get Index --- -- -- >


// < -- -- Fetch Discount --- -- -- >
        var str2 = ele.sprice;
        var matches2 = str2.match(/(\d+)/);
        totadis+=  Number(matches2[0])
// < -- -- Fetch Discount --- -- -- >


        let item = document.createElement('div');
        item.setAttribute('class','item')

        let details = document.createElement('div');
        details.setAttribute('class','details');

        let data = document.createElement('div');
        data.setAttribute('class','data');

        let h4 = document.createElement('h4');
        h4.innerText = ele.brand_description;

        let h2 = document.createElement('h2')
        h2.innerText = `₹ ${ele.price}`;
        let p = document.createElement('p')
        let dis = matches[0] - ele.price;
        p.innerText = `You saved ₹ ${dis} `;

        let select1 = document.createElement('select');
        let qty = [1,2,3,4]
        for(let i = 0; i<= qty.length-1; i++) {
            let op = document.createElement('option')
            // if(i == 0){
            //     op.setAttribute('selected',true)
            //     op.setAttribute('disabled',true)
            //     op.setAttribute('value','')
            // }
                op.setAttribute('value', qty[i])
                op.innerText = qty[i];
                select1.append(op)
        }

        let select2 = document.createElement('select');
        let size = ['S','M','L']
        for(let i = 0; i<= size.length-1; i++) {
            let op = document.createElement('option');
            // if(i == 0){
            //     op.setAttribute('selected',true)
            //     op.setAttribute('disabled',true)
            //     op.setAttribute('value','')
            // }
            op.setAttribute('value', size[i])
            op.innerText = size[i];
            select2.append(op)
        }

        let imgbx = document.createElement('div')
        imgbx.setAttribute('class','imgbx')
        let img = document.createElement('img')
        img.src = ele.image;

        let btnBx = document.createElement('div')
        btnBx.setAttribute('class','btnBx')

        let button1 = document.createElement('button')
        button1.innerText = 'Remove';

        button1.addEventListener('click',(ele)=> {
            removeCart(ele,index)
        })
        
        let button2 = document.createElement('button')
        button2.innerText = 'Move To wishlist';
// appending
        btnBx.append(button1,button2)
        imgbx.append(img)
        data.append(h4,h2,p,select1,select2)
        details.append(data,imgbx)
        
        item.append(details,btnBx)
        all.append(item)
    })

    let appendTotal = document.querySelector('#totalprice');
    appendTotal.innerText = `₹ ${totalPrice}`

    let mainTotal = document.querySelector('#mainTotal');
    mainTotal.innerText = `₹ ${totalPrice}`

    let subT = document.querySelector('#subT');
    subT.innerText = `₹ ${totalPrice}`
    
    // mainTotal

    let totalDis = document.querySelector('#discount');
    totalDis.innerText = `₹ ${totadis}`;

}



// let cartValues = JSON.parse(localStorage.getItem("cart")) || [];

function removeCart(item,ind){
    cartValues.splice(ind,1)
    console.log(cartValues)
    window.location.reload()
    localStorage.setItem("cart",JSON.stringify(cartValues))

}


document.querySelector('.place_order').addEventListener("click", function(){
    window.location.href = 'place_order.html'
})