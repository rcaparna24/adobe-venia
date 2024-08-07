// Global variables for load more and filters
let currentPage = 1;
const productsPerPage = 10;
let allProducts = [];
let filteredAndSortedProducts = [];
let selectedCategories = new Set();
let currentSortBy = 'none';
let currentSearchQuery = '';
let isPriceAscending = true; // mobile sort

//add active class in the header nav - white bar at the bottom
const navLink = document.getElementsByClassName('header__nav-link');
for (let i = 0; i < navLink.length; i++) {
  navLink[i].addEventListener('click', function (e) {
    Array.from(navLink).forEach((e) =>
      e.classList.remove('header__nav-link--active')
    );
    navLink[i].classList.toggle('header__nav-link--active');
  });
}

//mobile view nav
const hamburger = document.getElementById('header__nav__menu-toggle ');
hamburger.addEventListener('click', function () {
  const menu = document.getElementById('header__nav-links');
  menu.classList.toggle('hiddenmenu');
});

// Show shimmer effect
const showShimmer = () => {
  const productContainer = document.getElementById('content__products');
  productContainer.innerHTML = ''; // Clear existing content

  for (let i = 0; i < productsPerPage; i++) {
    const shimmerDiv = document.createElement('div');
    shimmerDiv.classList.add('product-list', 'shimmer');
    productContainer.appendChild(shimmerDiv);
    console.log('Shimmer div created and appended');
  }
};

// Hide shimmer effect
const hideShimmer = () => {
  const shimmerElements = document.querySelectorAll('.product-list.shimmer');
  shimmerElements.forEach((el) => el.remove());
};

// Fetching products from external URL, filtering based on selected categories and search query, and sorting product price
const getProducts = async () => {
  showShimmer(); // Show shimmer effect while loading
  const productAPI = 'https://fakestoreapi.com/products';
  try {
    const response = await fetch(productAPI);
    if (!response.ok) throw new Error(`HTTP Error ${response.status}`);
    allProducts = await response.json();

    // Apply filters and sorting
    applyFiltersAndSorting();

    // Reset pagination and display the first set of 10 products
    currentPage = 1;
    displayProducts();
  } catch (error) {
    console.error('Error fetching products: ', error);
  } finally {
    hideShimmer(); // Hide shimmer effect after loading
  }
};

// Apply filters and sorting based on the current state
const applyFiltersAndSorting = () => {
  // Filter products based on selected categories
  const filteredProducts = selectedCategories.size
    ? allProducts.filter((product) =>
        selectedCategories.has(product.category.toLowerCase())
      )
    : allProducts;

  // Filter products based on search query
  const searchQueryLower = currentSearchQuery.toLowerCase();
  filteredAndSortedProducts = filteredProducts.filter((product) =>
    product.title.toLowerCase().includes(searchQueryLower)
  );

  // Sort products based on selected sort option
  if (currentSortBy === 'price-asc') {
    filteredAndSortedProducts.sort((a, b) => a.price - b.price);
  } else if (currentSortBy === 'price-desc') {
    filteredAndSortedProducts.sort((a, b) => b.price - a.price);
  } else if (currentSortBy === 'category') {
    filteredAndSortedProducts.sort((a, b) =>
      a.category.localeCompare(b.category)
    );
  } else if (currentSortBy === 'price') {
    filteredAndSortedProducts.sort((a, b) =>
      isPriceAscending ? a.price - b.price : b.price - a.price
    );
  }
};

// Function to handle sorting toggle in mobile
const toggleSortOrder = () => {
  isPriceAscending = !isPriceAscending; // Toggle the boolean
  const sortButton = document.getElementById('utilities__sort-button');

  // Update button text based on sort order
  sortButton.textContent = isPriceAscending ? 'Ascending' : 'Descending';

  applyFiltersAndSorting();
  currentPage = 1; // Reset pagination
  displayProducts();
};

// Event listener for the sort button
document
  .getElementById('utilities__sort-button')
  .addEventListener('click', () => {
    currentSortBy = 'price'; // Set sort criteria to price
    toggleSortOrder();
  });

// Display products for the current page
const displayProducts = () => {
  const productContainer = document.getElementById('content__products');
  const loadMoreButton = document.getElementById('content__load-more');

  // Get products for the current page
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const productsToDisplay = filteredAndSortedProducts.slice(
    startIndex,
    endIndex
  );

  // Append new products to the container
  if (currentPage === 1) {
    productContainer.innerHTML = ''; // Clear existing products when filtering or sorting - view refresh
  }

  //display the total products based on the filter
  totalProducts = document.getElementById('utilities__total-products');
  totalProducts.innerHTML = productsToDisplay.length + ' Results';

  mobileTotalProducts = document.getElementById('modal__content__see__results');
  mobileTotalProducts.innerHTML =
    'SEE ' + productsToDisplay.length + ' RESULTS';

  //actual content part of the page
  productsToDisplay.forEach(({ image, title, price }) => {
    const productDiv = document.createElement('div');
    productDiv.classList.add('content__product-list');
    productDiv.innerHTML = `
      <ul class="content__product-list-groups">
        <li><img src="${image}" alt="${title}" class="content__product-list-img" /></li>
        <li class="content__product-list-groups-item">${title}</li>
        <li class="content__product-list-groups-item">$${price}</li>
        <li class="content__product-list-groups-item"><img src="./assets/icons/favorite.png" /></li>
      </ul>
    `;
    productContainer.appendChild(productDiv);
  });

  // Show or hide the "Load More" button based on the remaining products
  if (endIndex < filteredAndSortedProducts.length) {
    loadMoreButton.style.display = 'block';
  } else {
    loadMoreButton.style.display = 'none';
  }
};

// Handle "Load More" button click
document.getElementById('content__load-more').addEventListener('click', () => {
  currentPage += 1;
  displayProducts();
});

// Handling category checkbox changes
const categories = document.querySelectorAll('.content__filters__categories');
categories.forEach((category) => {
  category.addEventListener('change', (e) => {
    const categoryValue = e.target.value.toLowerCase();

    if (e.target.checked) {
      selectedCategories.add(categoryValue);
    } else {
      selectedCategories.delete(categoryValue);
    }

    // Fetch and display products with updated filters
    applyFiltersAndSorting();
    currentPage = 1; // Reset pagination
    displayProducts();
  });
});

//clear all in mobile

document
  .querySelector('.modal__content__clear__all')
  .addEventListener('click', () => {
    // Deselect all category checkboxes
    const categoryCheckboxes = document.querySelectorAll(
      "#filters input[type='checkbox']"
    );
    categoryCheckboxes.forEach((checkbox) => (checkbox.checked = false));

    // Clear the selected categories set
    selectedCategories.clear();

    // Apply filters and display products
    applyFiltersAndSorting();
    currentPage = 1; // Reset pagination
    displayProducts();
  });

// Handling sort option changes
const sortBySelect = document.getElementById('utilities__sort-select');
sortBySelect.addEventListener('change', () => {
  currentSortBy = sortBySelect.value;
  applyFiltersAndSorting();
  currentPage = 1; // Reset pagination
  displayProducts();
});

// Handling search input changes
const searchInput = document.getElementById('utilities__search-input');
searchInput.addEventListener('input', () => {
  currentSearchQuery = searchInput.value;
  applyFiltersAndSorting();
  currentPage = 1; // Reset pagination
  displayProducts();
});

//modal view in mobile
document
  .getElementById('utilities__open-modal-button')
  .addEventListener('click', function () {
    document.getElementById('side-modal').classList.add('show');
  });

document.getElementById('close-modal').addEventListener('click', function () {
  document.getElementById('side-modal').classList.remove('show');
});
document
  .getElementById('modal__content__see__results')
  .addEventListener('click', function () {
    document.getElementById('side-modal').classList.remove('show');
  });

// Close the modal if clicking outside of it
window.addEventListener('click', function (event) {
  if (event.target === document.getElementById('side-modal')) {
    document.getElementById('side-modal').classList.remove('show');
  }
});

// Initial fetch to display products
getProducts();

// frameworks made me lazy :(

//https://stackblitz.com/edit/stackblitz-starters-rcukb1?description=HTML/CSS/JS%20Starter&file=styles.css&terminalHeight=10&title=Static%20Starter
