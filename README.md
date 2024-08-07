# Getting Started
Prerequisites:
A modern web browser (e.g., Chrome, Firefox, Safari)

# Instructions
Clone the Repository:
git clone <repository-url> and then 
cd adobe-venia

# Open the Project:
Open products.html in your preferred web browser.

# Running Locally
No additional setup is required. Simply open products.html in your browser to view the website.
# Project Structure
The project is organized into three main files:

-- products.html: Contains the structure and content of the website.
-- styles.css: Contains the styling rules for the website.
-- script.js: Contains the JavaScript functionality for dynamic behavior.

1.HTML (products.html)
This file includes the core structure of the Venia website:

Key Sections:
Header includes the site title, navigation menu, and cart icon.
Banner displays promotional content or featured items.
Utilities contains search input, sorting options, and breadcrumb navigation.
Content displays product filters, product listings, and a "Load More" button.
Footer includes company information, social media links, and additional policies.
Modal provides additional filter options on mobile devices.
# Features:
Responsive navigation menu with a hamburger toggle for mobile views.
Dynamic loading of products with a shimmer effect while data is being fetched.
Filtering and sorting capabilities based on user input.

2.CSS (styles.css)
This file contains the styling rules that ensure the website looks appealing and functions well across various devices.

Key Styles:
Header has Ffixed positioning with styling for navigation links and cart icon.
Banner has syling for a promotional area with text and background image.
Utilities has styles for search input, sorting options, and breadcrumb navigation.
Content has layout and styling for product listings and filtering options.
Footer has styling for footer sections, social media links, and additional links.
Modal has styles for the filter modal used in mobile view.

# Responsive Design:
Media queries are used to adjust the layout for different screen sizes, especially for mobile devices.

3.JavaScript (script.js)
This file handles the dynamic functionalities of the website, including product fetching, filtering, sorting, and pagination.

Key Functions:
navLink Event Listener adds an active class to navigation links when clicked.
Hamburger Menu Toggle shows or hides the navigation menu on mobile devices.
Shimmer Effect displays a loading placeholder while fetching products.
Fetch Products retrieves product data from an external API and applies filters and sorting.
Apply Filters and Sorting filters and sorts products based on user input.
Display Products updates the product list and handles pagination.
Load More Button loads additional products when clicked.
# Event Listeners:
1. Sort Button: Toggles sorting order and updates product display.
2. Load More Button: Loads more products as the user scrolls or clicks "Load More."
3. Category Checkboxes: Updates the product list based on selected categories.

