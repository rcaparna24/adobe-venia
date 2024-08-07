# adobe-venia


# Project Structure
The project is organized into three main files:

# index.html: Contains the structure and content of the website.
# styles.css: Contains the styling rules for the website.
# script.js: Contains the JavaScript functionality for dynamic behavior.

# HTML (index.html)
This file includes the core structure of the Venia website:

# Key Sections:
Header: Includes the site title, navigation menu, and cart icon.
Banner: Displays promotional content or featured items.
Utilities: Contains search input, sorting options, and breadcrumb navigation.
Content: Displays product filters, product listings, and a "Load More" button.
Footer: Includes company information, social media links, and additional policies.
Modal: Provides additional filter options on mobile devices.
Features:
Responsive navigation menu with a hamburger toggle for mobile views.
Dynamic loading of products with a shimmer effect while data is being fetched.
Filtering and sorting capabilities based on user input.

# CSS (styles.css)
This file contains the styling rules that ensure the website looks appealing and functions well across various devices.

# Key Styles:
Header: Fixed positioning with styling for navigation links and cart icon.
Banner: Styling for a promotional area with text and background image.
Utilities: Styles for search input, sorting options, and breadcrumb navigation.
Content: Layout and styling for product listings and filtering options.
Footer: Styling for footer sections, social media links, and additional links.
Modal: Styles for the filter modal used in mobile view.
Responsive Design:
Media queries are used to adjust the layout for different screen sizes, especially for mobile devices.

# JavaScript (script.js)
This file handles the dynamic functionalities of the website, including product fetching, filtering, sorting, and pagination.

# Key Functions:
navLink Event Listener: Adds an active class to navigation links when clicked.
Hamburger Menu Toggle: Shows or hides the navigation menu on mobile devices.
Shimmer Effect: Displays a loading placeholder while fetching products.
Fetch Products: Retrieves product data from an external API and applies filters and sorting.
Apply Filters and Sorting: Filters and sorts products based on user input.
Display Products: Updates the product list and handles pagination.
Load More Button: Loads additional products when clicked.
Event Listeners:
Sort Button: Toggles sorting order and updates product display.
Load More Button: Loads more products as the user scrolls or clicks "Load More."
Category Checkboxes: Updates the product list based on selected categories.

# Getting Started
# Prerequisites
A modern web browser (e.g., Chrome, Firefox, Safari)
# Instructions
Clone the Repository:
git clone <repository-url>
cd venia

# Open the Project:
Open index.html in your preferred web browser.

# Running Locally
No additional setup is required. Simply open index.html in your browser to view the website.