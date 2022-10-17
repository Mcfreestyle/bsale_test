/**
 * Draw the cards with information about each product
 * @param {string} name - Product name
 * @param {string} urlImg - Product url
 * @param {number} price - Product price
 * @param {number} discount - Product discount
 * @returns {HTMLDivElement} - HTML element with product data
 */
function createProductColumn(name, urlImg, price, discount) {
  const col = $('<div class="col"></div>');
  const card = $('<div class="card h-100"></div>');
  const img = $(`<img class="h-75" src="${urlImg}" class="card-img-top">`);
  const cardBody = $('<div class="card-body"></div>');
  const productName = $('<p class="card-title"></p>');
  const strongName = $('<strong></strong>').text(name);
  const productPrice = $('<p class="card-text"></p>').text('$' + price);
  let previousPrice = "";

  // Show the discount percentage and previous price, if product has discount
  if (discount !== 0) {
    const discountSpan = $('<span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"></span>');
    const smallPrice = $('<small class="text-muted"></small>');
    const operation = parseInt((price * 100) / (100 - discount));
    const croosedOutPrice = $('<del></del>').text('$' + operation);
    previousPrice = $('<p class="card-text"></p>');

    smallPrice.append(croosedOutPrice);
    previousPrice.append(smallPrice);
    discountSpan.html(discount + '%');
    productPrice.append(discountSpan);
  }

  productName.append(strongName)
  cardBody.append(productName, productPrice);
  if (discount !== 0) {
    cardBody.append(previousPrice);
  }
  card.append(img, cardBody);

  return (col.append(card));
}
