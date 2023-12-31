let bagItems;
onLoad();

function onLoad(){
let bagItemsStr = localStorage.getItem('bagItems');
bagItems = bagItemsStr ? JSON.parse(bagItemsStr) : [];
displayItemsOnHome();
bagCount();
}

function addToBag(itemID) {
    bagItems.push(itemID);
    localStorage.setItem('bagItems' ,JSON.stringify(bagItems));
    bagCount();
}

function bagCount() {
    let bagCountElement= document.querySelector('.bag-item-count');
    if(bagItems.length>0){
        bagCountElement.style.visibility = 'visible';
        bagCountElement.innerText= bagItems.length;
    }
    else{
        bagCountElement.style.visibility = 'hidden';
    }
}

function displayItemsOnHome() {
let itemsContainerElement = document.querySelector('.items-container');
let innerHtm = '';
if(!itemsContainerElement){
    return;
}
items.forEach(item => {
  innerHtm+= `
  <div class="item-container">
      <img src="${item.image}" class="item-img" alt="Item image">
      <div class="rating">
          ${item.rating.stars}  <span style="color:rgb(84, 177, 122);">★</span>  | ${item.rating.count} 
      </div>
      <div class="company-name">
          ${item.company}
      </div>
      <div class="item-name">
          ${item.item_name}
      </div>
      <div class="price">
          <span class="current-price">Rs. ${item.current_price}</span> 
          <span class="regular-price">Rs. ${item.original_price}</span> 
          <span class="discount-percent">(${item.discount_percentage}% OFF)
          </span> 
      </div>
      <button class="btn-add-bag" onclick="addToBag(${item.id})">Add to bag</button>
  </div>`;
});

itemsContainerElement.innerHTML = innerHtm;
}