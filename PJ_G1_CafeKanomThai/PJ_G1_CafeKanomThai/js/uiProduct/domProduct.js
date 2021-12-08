import products from "../products.js";

const product = document.querySelector("#p");

let count = 0;
const CountInCart = document.getElementById("count");
CountInCart.textContent = count;

//remove


for(let items of products){
    console.log(items);
    let divEle = document.createElement("div");
    divEle.className = "w-1/1 rounded-lg shadow-xl bg-white ";
    divEle.setAttribute("id",items.name);
    divEle.setAttribute("name",items.thai);
    divEle.setAttribute("pieces",items.pieces)
    let ImgEle = appendImgProduct(items);
    let NameEle = appendNameProduct(items);
    let DetailEle = appendDetailProduct(items);
    
    divEle.appendChild(ImgEle);
    divEle.appendChild(NameEle);
    divEle.appendChild(DetailEle);
    product.appendChild(divEle);
}

function appendImgProduct(item){
    let imgEle = document.createElement("img");
    imgEle.className = "rounded-t-lg h-60 w-full object-cover";
    imgEle.src = item.srcimg;
    imgEle.alt = item.alt;
    return imgEle;
}

function appendNameProduct(item){
    let divProduct = document.createElement("div");
    let headerEle = document.createElement("header");
    headerEle.className = "text-xl font-extrabold p-4"
    headerEle.textContent = item.name;
    let divDetail = document.createElement("div");
    divDetail.className = "px-5";
    let pEle = document.createElement("p");
    pEle.className = "text-gray-500 px-4";
    // pEle.textContent = item.thai; // ไว้ใส่คำอธิบาย

    divDetail.appendChild(pEle);
    divProduct.appendChild(headerEle);
    divProduct.appendChild(divDetail);
    return divProduct;
}

function appendDetailProduct(item){
    let footerDetail = document.createElement("div");
    footerDetail.className = "py-3 px-8 text-gray-500 grid grid-cols-2 gap-6"

    let divPrice = document.createElement("p");
    divPrice.className = "text-teal-500 font-semibold text-lg font-poppins text-left"
    divPrice.textContent = "ราคา : " + item.price + "฿";

    //add pieces
    let divPieces = document.createElement("p");
    divPieces.className = "text-teal-500 font-semibold text-lg font-poppins text-right"
    divPieces.textContent = "pieces : " + item.pieces ;

    let btnEle = document.createElement("button");
    btnEle.className = "py-2 px-4  bg-green-500 rounded-lg text-white font-semibold hover:bg-green-600 ";
    btnEle.textContent = "Add to Cart";

    btnEle.setAttribute("id" , item.tag);
    btnEle.setAttribute("name" , "product");
    btnEle.addEventListener("click" , ()=>{
      alert(`add ${item.name} to cart`);
      count++;
      CountInCart.textContent = count;
    })

function clearCart(){
    cart = [];
}
const clearBtn = document.querySelector('#clearbtn')
    clearBtn.addEventListener ('click', () =>{
        console.log(JSON.stringify(CookieUtil.get('ItemInCart')));
        clearCart()
        CookieUtil.set('ItemInCart', JSON.stringify(cart), Date(9000))
    })

    footerDetail.appendChild(divPrice);
    footerDetail.appendChild(divPieces);
    footerDetail.appendChild(btnEle);
    return footerDetail;


    
    
}