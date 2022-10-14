const products = getProducts();
const searchBotton = $('form>button');
// const API_URL = 'http://...';

displayCategories();
displayProducts(products);

$('#categories #category').click(function (e) {
  const id = e.target.dataset.id;
  const products = getProducts(id);
  displayProducts(products);
});

searchBotton.click(searchProducts);

function searchProducts(e) {
  e.preventDefault();
  const input = $('#input')[0];

  console.log(input.value);
  const products = [
    {
      name: 'inka kola',
      price: '$14'
    },
    {
      name: 'cheetos',
      price: '$4'
    }
  ];

  displayProducts(products);
}

function getProducts(categoryId) {
  let products = [];

  if (!categoryId) {
    products = [
      {
        name: 'coca cola',
        price: '$10'
      },
      {
        name: 'papas fritas',
        price: '$4'
      },
      {
        name: 'vodka 1L',
        price: '$20'
      },
      {
        name: 'vino',
        price: '$30'
      }
    ];
  } else {
    products = [
      {
        name: 'papas fritas pequeño',
        price: '$10'
      },
      {
        name: 'mani salado',
        price: '$4'
      },
      {
        name: 'cheesee',
        price: '$20'
      },
      {
        name: 'lays',
        price: '$30'
      }
    ];
  }
  return products;
}

function displayCategories() {
  const categories = [
    {
      id: 1,
      name: 'piscos'
    },
    {
      id: 2,
      name: 'vinos'
    },
    {
      id: 3,
      name: 'snack'
    }
  ];
  // $.getJSON(API_URL + '/categories', (categories) => {
  //   for (const category of categories) {
  //     const item = $('<li></li>');
  //     const link = $(`<a class="dropdown-item" data-id="${category.id}" id="category"></a>`);
  
  //     link.text(category.name);
  //     item.append(link);
  //     $('#categories').append(item);
  //   }
  // });
  for (const category of categories) {
    const item = $('<li></li>');
    const link = $(`<a class="dropdown-item" data-id="${category.id}" id="category"></a>`);

    link.text(category.name);
    item.append(link);
    $('#categories').append(item);
  }
}

function displayProducts(products) {
  $('#products').empty();
  for (const product of products) {
    const productCol = createProductColumn(product.name, product.price);
    $('#products').append(productCol);
  }
}

function createProductColumn(name, price) {
  const col = $('<div class="col"></div>');
  const card = $('<div class="card h-100"></div>');
  const img = $('<img class="card-img-top" alt="...">');
  const cardBody = $('<div class="card-body"></div>');
  const productName = $('<h5 class="card-title"></h5>').text(name);
  const productPrice = $('<p class="card-text"></p>').text(price);

  cardBody.append(productName, productPrice);
  card.append(img, cardBody);

  return (col.append(card));
}
