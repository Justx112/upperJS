class ProductList {
  constructor(container = '.products') {
    this.container = document.querySelector(container);
    this.goods = [];
    this.productObjects = [];

    this.fetchGoods();
    this.render();
    this.getSumm();
  }

  fetchGoods() {
    this.goods = [
      { id: 1, title: 'Notebook', price: 20000 },
      { id: 2, title: 'Mouse', price: 1500 },
      { id: 3, title: 'Keyboard', price: 5000 },
      { id: 4, title: 'Gamepad', price: 4500 },
    ];
  }

  render() {
    for (const good of this.goods) {
      const productObject = new ProductItem(good);
      console.log(productObject);
      this.productObjects.push(productObject);

      this.container.insertAdjacentHTML('beforeend', productObject.getHTMLString());
    }
  }

  getSumm() {
    let sum = 0;
    this.goods.forEach(productCost => sum += productCost.price);
    console.log(sum);
  }
}

class ProductItem {
  constructor(product, img = 'https://via.placeholder.com/200x150') {
    this.id = product.id;
    this.title = product.title;
    this.price = product.price;
    this.img = img;
  }

  getHTMLString() {
    return `<div class="product-item" data-id="${this.id}">
                <img src="${this.img}" alt="Some img">
                <div class="desc">
                    <h3>${this.title}</h3>
                    <p>${this.price} \u20bd</p>
                    <button class="buy-btn">Купить</button>
                </div>
            </div>`;
  }
}

document.addEventListener("click", () => console.log(event))

new ProductList();

class bucket {
  constructor() {
    this.bucketResult = [];
  }
  
  findID(id){
    let product = this.bucketResult.find(item => item.id == id);
    return product;
  }

  add(id, cost, title) {
    let product = this.findID(id);

    if (product === undefined){
      let object = {};
      object.id = id;
      object.cost = Number(cost);
      object.title = title;
      object.quality = 1;
      this.bucketResult.push(object);
    }
    else{
      product.quality += 1; 
    }
  }

  increas (id) {
    let product = this.findID(id);
    product.quality += 1;
  }

  reduce (id){
    let product = this.findID(id);
    product.quality -= 1;
  }

  delete(id) {
    let product = this.findID(id);
    let numberOfElement = this.bucketResult.indexOf(product);
    this.bucketResult.splice(numberOfElement, 1);
  }

}
//тестовая переменная для проверки работы класса 
test = new bucket();