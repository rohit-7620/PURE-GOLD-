## PureGold Cooking Oils Website
Overview
PureGold Cooking Oils is a web application built with React and Vite, designed to showcase and sell premium cooking oils. The website provides a user-friendly interface for browsing products, learning about their benefits, and placing orders.
Project Setup
This project uses a modern JavaScript stack with React for the frontend and Vite as the build tool.
Prerequisites

Node.js (v16 or higher)
npm (v7 or higher)

Installation

Clone the repository:git clone <repository-url>


Navigate to the project directory:cd rohit123


Install dependencies:npm install


Start the development server:npm run dev


Build the project for production:npm run build


Preview the production build:npm run preview


Run linting to check code quality:npm run lint



Dependencies

React: Frontend library for building UI components (^19.1.0).
React-DOM: Handles DOM rendering for React (^19.1.0).
Vite: Fast build tool and development server (^7.0.0).
ESLint: Linting tool for maintaining code quality (^9.29.0).
@vitejs/plugin-react: Vite plugin for React support (^4.5.2).
eslint-plugin-react-hooks: Ensures proper usage of React hooks (^5.2.0).
eslint-plugin-react-refresh: Enables fast refresh in development (^0.4.20).

Website Flow
The website consists of three main pages, each serving a specific purpose in the user journey.
1. Home Page (index.html)

Purpose: Serves as the landing page, introducing users to PureGold Cooking Oils.
Content:
Header: Navigation bar with links to Home, Products, About Us, Contact, and Cart.
Hero Section: Displays a tagline ("Healthy. Pure. Delivered.") and a call-to-action (CTA) button ("Shop Now") to encourage users to explore products.
Why Choose PureGold Oils: Highlights benefits like heart health, immunity boost, natural glow, and organic sourcing.
Featured Oils: Showcases four oils (Extra Virgin Olive Oil, Virgin Coconut Oil, Cold-Pressed Mustard Oil, Sunflower Oil) with brief descriptions.
Footer: Contains copyright information and social media links.


Navigation:
Clicking "Shop Now" directs users to the Products page.
Navigation links allow access to other pages (Products, About Us, Contact, Cart).



2. Products Page (products.html)

Purpose: Displays the catalog of available cooking oils for purchase.
Content:
Header: Same navigation bar as the Home page for consistent user experience.
Product Listings: Lists three oils (Sunflower Oil, Mustard Oil, Groundnut Oil) with descriptions, prices, and "Add to Cart" buttons.
Footer: Same as the Home page.


Navigation:
Users can add oils to their cart (functionality to be implemented in JavaScript).
Navigation links allow access to other pages.
After adding items to the cart and placing an order, users are redirected to the Order Success page (assuming cart functionality).



3. Order Success Page (order-success.html)

Purpose: Confirms successful order placement and provides a post-purchase experience.
Content:
Header: Same navigation bar as other pages.
Success Message: Displays a confirmation message ("Order Placed Successfully!") with a thank-you note and delivery assurance.
CTA: A "Continue Shopping" button redirects users back to the Products page.
Footer: Same as other pages.


Navigation:
The "Continue Shopping" button takes users to the Products page.
Navigation links allow access to other pages.



Features

Responsive Navigation: Consistent navigation bar across all pages for seamless user experience.
Product Showcase: Highlights premium cooking oils with descriptions and prices.
Call-to-Actions: Strategically placed buttons ("Shop Now", "Add to Cart", "Continue Shopping") guide users through the purchase funnel.
Modern Stack: Uses React for dynamic UI components and Vite for fast development and builds.

Future Enhancements

Implement cart functionality using React state management.
Add dynamic routing with React Router for smoother page transitions.
Integrate a backend API for handling orders and payments.
Enhance responsiveness with Tailwind CSS or similar frameworks.
Add user authentication for personalized experiences.

Folder Structure
rohit123/
├── public/
│   ├── index.html        # Home page
│   ├── products.html     # Products page
│   ├── order-success.html # Order success page
├── src/
│   ├── (React components and assets to be added)
├── package.json          # Project configuration
├── vite.config.js        # Vite configuration
├── .eslintrc.js          # ESLint configuration
└── README.md             # This file

Notes

The current HTML files are static. To fully leverage React, convert the HTML content into React components and use a router for navigation.
The cart functionality and order processing logic are not yet implemented and require JavaScript/React integration.
Styling is minimal in the provided HTML. Consider adding a CSS framework like Tailwind CSS for better design.

