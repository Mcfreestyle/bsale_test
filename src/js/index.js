const API_URL = 'https://bsale-test-bckend.herokuapp.com/api';

initialLoad();

/**
 * Start first render
 */
async function initialLoad() {
  const products = await getProducts();
  
  await displayCategories();
  displayProducts(products);
  listenEvents();
}

/**
 * Listen events in the loaded document
 */
function listenEvents() {
  const searchBotton = $('form>button');
  
  $('#categories #category').click(async function (e) {
    const id = e.target.dataset.id;
    const products = await getProducts(id);

    $('#selectCategory').html(e.target.text);
    displayProducts(products);
  });
  searchBotton.click(searchProducts);
}

/**
 * Find products that match to input value and display these products
 * @param {*} e - Event
 */
async function searchProducts(e) {
  e.preventDefault();
  const input = $('#input')[0];

  products = await requestAPI(`/products?search=${input.value}`);
  displayProducts(products);
}

/**
 * Get products according the category id passed
 * @param {Number} categoryId - Category id
 * @returns {Array} - All table products or all products of a category
 */
async function getProducts(categoryId) {
  let products = [];

  if (!categoryId) {
    products = await requestAPI('/products');
  } else {
    products = await requestAPI(`/categories/${categoryId}/products`);
  }
  return products;
}

/**
 * Show all categories in a dropdown
 */
async function displayCategories() {
  const categories = await requestAPI('/categories');

  for (const category of categories) {
    const item = $('<li></li>');
    const link = $(`<a class="dropdown-item" data-id="${category.id}" id="category"></a>`);

    link.text(category.name);
    item.append(link);
    $('#categories').append(item);
  }
}

/**
 * Display products in document
 * @param {Array} products - Products data
 */
function displayProducts(products) {
  $('#products').empty();
  for (const product of products) {
    const productCol = createProductColumn(
      product.name,
      product.url_image,
      product.price,
      product.discount
    );
    $('#products').append(productCol);
  }
}
