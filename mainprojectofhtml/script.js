// Function to fetch products from JSON file
function fetchProducts(category) {
    fetch('public/data/products1.json')
      .then(response => response.json())
      .then(data => {
        const products = data[category];
        const productList = document.getElementById('product-list');
        productList.innerHTML = '';
  
        products.forEach(product => {
          const productElement = document.createElement('div');
          productElement.classList.add('col-md-4', 'mb-4');
          productElement.innerHTML = `
            <div class="card">
              <img src="public/images/${product.image}" class="card-img-top" alt="${product.name}" data-toggle="modal" data-target="#productModal" data-name="${product.name}" data-price="${product.price}" data-details="${product.details}">
              <div class="card-body">
                <h5 class="card-title">${product.name}</h5>
                <p class="card-text">Price: ${product.price}</p>
              </div>
            </div>
          `;
          productList.appendChild(productElement);
        });
      })
      .catch(error => console.error('Error fetching products:', error));
  }
  
  // Event listeners for category clicks
  document.getElementById('dry-fruits').addEventListener('click', function() {
    fetchProducts('dry_fruits');
  });
  
  document.getElementById('flowers').addEventListener('click', function() {
    fetchProducts('flowers');
  });
  
  // Event listener for product image click to show details in modal
  $(document).on('click', '.card-img-top', function() {
    const productName = $(this).data('name');
    const productPrice = $(this).data('price');
    const productDetails = $(this).data('details');
  
    $('#productModal .modal-title').text(productName);
    $('#productModal .modal-body').html(`
      <p><strong>Price:</strong> ${productPrice}</p>
      <p><strong>Details:</strong> ${productDetails}</p>
    `);
  });
  
  