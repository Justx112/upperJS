const products = [
    {id: 1, title: 'Notebook', price: 1000},
    {id: 2, title: 'Mouse', price: 100},
    {id: 3, title: 'Keyboard', price: 250},
    {id: 4, title: 'Gamepad', price: 150},
];

// Я так понял под сокращением кода имелось ввиду это:
const getProductHTMLString = (title = "Товар отсутсвует", price = "N/A") => 
              `<div class="product-item">
                <h3>${title}</h3>
                <p>${price}</p>
                <button class="by-btn">Добавить</button>
              </div>`;

const renderProducts = (productList = [{}]) => {
  // Первый вариант самый топорный
  // let resultString = "";
  // productList.forEach(element => {
  //   resultString += getProductHTMLString(element.title, element.price)
  // });
  // document.querySelector('.products').innerHTML = resultString;
  
  // Второй вариант доработанный ваш
  // const list = productList.map((good) => getProductHTMLString(good.title, good.price));
  // document.querySelector('.products').innerHTML = list.join(" ");

  // Третий вариант самый оптимальный по моему, т.к. ничего лишнего не создается
  const target = document.querySelector('.products');
    productList.forEach(element => {
      target.insertAdjacentHTML("afterbegin", getProductHTMLString(element?.title, element?.price))
  });
}

// Все аргументы отсутсвуют
renderProducts();

// Обычная реализация
renderProducts(products);
