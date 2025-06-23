# 🎧 Audiophile - Premium Audio Equipment E-commerce

A modern, responsive e-commerce website for premium audio equipment built with Vue 3 and Vite. This project showcases a complete online shopping experience with cart management, checkout process, and order confirmation.

![Audiophile Preview]

## ✨ Features

### 🛍️ **Shopping Experience**
- **Product Browsing**: Browse products by category (Headphones, Speakers, Earphones)
- **Product Details**: Detailed product pages with features, specifications, and gallery
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Interactive Elements**: Hover states and smooth animations throughout

### 🛒 **Shopping Cart**
- **Add/Remove Products**: Add products to cart from product detail pages
- **Quantity Management**: Update quantities with +/- buttons or direct input
- **Cart Persistence**: Cart state saved in localStorage (survives page refresh)
- **Real-time Updates**: Cart badge shows current item count
- **Remove All**: Option to clear entire cart at once

### 💳 **Checkout Process**
- **Complete Form**: Billing details, shipping info, and payment method
- **Form Validation**: Real-time validation with helpful error messages
- **Payment Options**: e-Money and Cash on Delivery
- **Order Summary**: Live calculation of totals including:
  - Product subtotal
  - Fixed shipping cost ($50)
  - VAT calculation (20% of product total)
  - Grand total


To run locally, follow the installation instructions below.

## ��️ Technology Stack

- **Frontend Framework**: Vue 3 (Composition API)
- **Build Tool**: Vite
- **Routing**: Vue Router 4
- **State Management**: Custom reactive store (Pinia-like)
- **Form Validation**: Zod
- **Styling**: CSS3 with responsive design
- **Deployment**: Vercel

## 📦 Installation

### Prerequisites
- Node.js (version 18.0.0 or higher)
- npm or yarn package manager

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/EffahAdode3/Audiophile.git
   cd Audiophile
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 🏗️ Project Structure

```
src/
├── assets/                 # Images and static assets
│   ├── cart/              # Cart-related images
│   ├── checkout/          # Checkout icons
│   ├── home/              # Homepage images (desktop/mobile/tablet)
│   ├── product-*/         # Product-specific images
│   └── shared/            # Shared images and icons
├── components/            # Reusable Vue components
│   ├── CartItem.vue       # Individual cart item component
│   ├── CategoryCard.vue   # Product category card
│   ├── Footer.vue         # Site footer
│   ├── Header.vue         # Navigation header
│   ├── OrderSummary.vue   # Order summary component
│   ├── ProductCard.vue    # Product display card
│   └── Toast.vue          # Notification component
├── data/                  # Static data
│   └── products.json      # Product catalog
├── pages/                 # Page components
│   ├── Cart.vue           # Shopping cart page
│   ├── CategoryPage.vue   # Product category page
│   ├── Checkout.vue       # Checkout process
│   ├── Confirmation.vue   # Order confirmation
│   ├── Home.vue           # Homepage
│   └── ProductDetail.vue  # Product detail page
├── schemas/               # Validation schemas
│   └── checkoutSchema.js  # Checkout form validation
├── store/                 # State management
│   └── cartStore.js       # Shopping cart store
├── utils/                 # Utility functions
│   ├── imageImports.js    # Image import utilities
│   └── imageUtils.js      # Image handling utilities
├── App.vue                # Root component
├── main.js                # Application entry point
└── index.css              # Global styles
```
