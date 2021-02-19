
class Hola{
  static distancia ( a , b) {
    const dx = a;
    const dy = b;

    return (dx + dy);
  }
}
const num1 = 10;
const num2 = 20;
console.log(Hola.distancia(num1, num2));

function calculadora(a,b,c){
  return(a+b-c);
}
console.log(calculadora(14,18,50));

// Product Constructor
class Product {
    constructor(img, middle, price, id) {
        this.img = img;
        this.name = middle;
        this.price = price;
        this.id = id;
    }
}

// UI Constructor
class UI {
    addProduct(product) {
        const productList = document.getElementById('product-list');
        const element = document.createElement('div');
        element.innerHTML = `
            <div class="card text-center mb-4">
                <div class="card-cart">
                <div class="container">
                  <div class="row">
                    <div class="col-4 col-md-4">
                      <img class="img-cart" src="${product.img}">
                    </div>
                    <div class="col-8 col-md-8 card-text-right-cart">
                    <div class="general-btn-out-cart">
                      <a class="btn-delete" name="delete">X</a>
                    </div>
                    <strong class="item-cart">${product.name}</strong>
                    <strong class="item-cart price-cart">${product.price}</strong>
                    <p style="display:none;">${product.id}</p>
                    </div>
                  </div>
                </div>
                </div>
            </div>
        `;
        productList.appendChild(element);
    }


    deleteProduct(element) {
        if (element.name === 'delete') {
            element.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.remove();
          var idProductCart = element.parentElement.parentElement.getElementsByTagName('p')[0].textContent;
          productsAdded = productsAdded.filter(e => e != idProductCart);
          totalPriceCart-=Number(price.replace("$", ""));
          tagPrice.textContent = totalPriceCart.toFixed(2);
          titleCartIndicator.textContent = contador -= 1;
          if (productsAdded.length == 0) {
            $('.title-cart-price').removeClass("active-tag-price-cart");
            $('.title-cart-empty').removeClass("active-title-cart-empty");
            $('.img-cart-empty').removeClass("active-img-cart-empty");
            $('.title-count-description').removeClass("active-title-count-description");
          }
        }
    }
}

// DOM Events
let productsAdded=[];
var elements = document.getElementsByClassName("btn-shop-cart");
var totalPriceCart =0;
var tagPrice = document.getElementsByClassName("title-cart-price")[0];
var titleCartIndicator = document.getElementsByClassName("title-cart-indicator")[0];
var contador = 0;

var click = function(e) {
  img =  e.target.parentElement.parentElement.getElementsByClassName("img")[0].src,
  name =  e.target.parentElement.getElementsByClassName("middle")[0].textContent,
  price  = e.target.parentElement.getElementsByClassName("price")[0].textContent;
  productId = e.target.parentElement.parentElement.id;

  if(productsAdded.includes(productId)) {
    alert("Se repite el producto");
   }else {
    titleCartIndicator.textContent = contador += 1;
     productsAdded.push(productId);
     $('.title-cart-price').addClass("active-tag-price-cart");
    $('.general-popup-cart').addClass("active");
    $('.title-cart-empty').addClass("active-title-cart-empty");
    $('.img-cart-empty').addClass("active-img-cart-empty");
    $('.title-count-description').addClass("active-title-count-description");
    var container = document.getElementsByClassName("card-cart");
    totalPriceCart +=Number(price.replace("$", ""));
    tagPrice.textContent = totalPriceCart.toFixed(2);
     // Create a new Oject Product
     const product = new Product(img, name, price, productId);
     // Create a new UI
     const ui = new UI();
     // Save Product
     ui.addProduct(product);
     e.preventDefault();
 }
};

for(let i=0;i<elements.length;i++){
        elements[i].addEventListener('click', e => click(e));
    }


document.getElementById('product-list').addEventListener('click', function (e) {
        const ui = new UI();
        ui.deleteProduct(e.target);
        e.preventDefault();
    });

    document.getElementsByClassName("btn-popup-cart-out")[0].addEventListener('click', function(){
      $('.active').removeClass("active");
    });

    document.getElementsByClassName("btn-cart-container-text")[0].addEventListener('click', function(){
      $('.active').removeClass("active");
      $('.general-cart').addClass("general-cart-active");
    });

    document.getElementById("btn-cart-shop-finish").addEventListener('click', function(){
      var container = document.getElementsByClassName("card-cart");
      var lista ="";
      var total =0;
      for(let i=0;i<container.length;i++){
        const item = container[i].getElementsByClassName("item-cart");
        total+=parseInt(item[1].textContent.replace("$", ""));
         for(let i=0;i<item.length;i++){
           lista += item[i].textContent + '  '
         }
      }
      window.open("https://api.whatsapp.com/send?phone=+541170017108&text=Hola! quiero estos productos de milalisados "+lista+"el total es igual a "+total+"pesos");
    });



var btnShop = document.getElementsByClassName("btn-shop");

     var shop = function(e){
      var containerShop = document.getElementsByClassName("card-general");
      var listaShop ="";
      for(let i=0;i<containerShop.length;i++){
           listaShop = e.target.parentElement.getElementsByClassName("title-middle")[0].textContent;
      }
      window.open("https://api.whatsapp.com/send?phone=+541170017108&text=Hola! quiero estos productos de milalisados: "+listaShop);
    };

    for(let i=0;i<btnShop.length;i++){
            btnShop[i].addEventListener('click', e => shop(e));
        }


        
