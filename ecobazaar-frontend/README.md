# 🌿 EcoBazzar Frontend - User Guide

<div align="center">

**The part of EcoBazzar you see and use**

*A simple guide for everyone*

[What is this?](#-what-is-this) • [Getting Started](#-getting-started) • [How to use](#-how-to-use) • [Common Questions](#-common-questions)

---

</div>

---

## 📖 What is This?

This is the **Frontend** of EcoBazzar - the part of the website you see and interact with!

Think of it like the **front of a store**:
- Where you browse products
- Where you see pictures and prices
- Where you click "Add to Cart"
- Where you see your orders

The "backend" (different part of EcoBazzar) handles the invisible stuff like storing data and processing payments.

---

## 🚀 Getting Started

### For Users (Shoppers)

You don't need to install anything! Just:

1. Open your web browser (Chrome, Firefox, Safari, etc.)
2. Go to the EcoBazzar website
3. Start shopping! 🛒

### For Developers (Who want to run this locally)

If you're a developer helping improve EcoBazzar:

#### Step 1: Install Tools

You need these programs on your computer:

| Tool | What it does | How to get it |
|------|--------------|---------------|
| **Node.js** | Runs JavaScript on your computer | Download from [nodejs.org](https://nodejs.org) |
| **Angular CLI** | Builds and runs the website | Run: `npm install -g @angular/cli` |
| **Git** | Downloads the code | Download from [git-scm.com](https://git-scm.com) |

#### Step 2: Download the Code

```bash
# Open your terminal/command prompt
git clone https://github.com/your-repo/ecobazaar-frontend.git
cd ecobazaar-frontend
```

#### Step 3: Install Dependencies

```bash
npm install
```

This downloads all the extra pieces needed to run EcoBazzar.

#### Step 4: Start the Website

```bash
ng serve
```

Then open your browser to: **http://localhost:4200**

---

## 🖥️ How to Use This Guide

This section helps developers understand the frontend structure:

### 📁 Project Folders

```
ecobazaar-frontend/
├── src/                          # Source code (the actual website)
│   ├── app/
│   │   ├── pages/               # Different pages of the website
│   │   │   ├── home/            # Homepage
│   │   │   ├── login/           # Login page
│   │   │   ├── register/        # Sign up page
│   │   │   ├── dashboard/       # User dashboard
│   │   │   ├── products/        # Product browsing
│   │   │   ├── cart/            # Shopping cart
│   │   │   ├── seller-dashboard/ # Seller area
│   │   │   └── admin/           # Admin area
│   │   │
│   │   ├── components/          # Reusable parts
│   │   │   ├── navbar/          # Top navigation bar
│   │   │   └── footer/          # Bottom section
│   │   │
│   │   ├── services/            # Communication with backend
│   │   │   ├── auth.service.ts  # Login/logout
│   │   │   ├── product.ts       # Product info
│   │   │   ├── cart.ts          # Shopping cart
│   │   │   └── report.service.ts # Reports & stats
│   │   │
│   │   ├── guards/              # Protection (who can access what)
│   │   │   ├── auth.guard.ts    # Must be logged in
│   │   │   └── role.guard.ts    # Must have correct role
│   │   │
│   │   └── models/              # Data shapes (like forms)
│   │       └── product.ts       # What a product looks like
│   │
│   ├── environments/            # Settings for different environments
│   └── styles.scss              # Global styling
│
├── package.json                 # Lists all dependencies
├── angular.json                 # Angular configuration
└── proxy.conf.json              # Development proxy setup
```

### 🎯 Key Pages

| Page | File | Who Can Access | What It Does |
|------|------|----------------|--------------|
| Home | `home/home.ts` | Everyone | Welcome page |
| Login | `login/login.ts` | Everyone | Sign in |
| Register | `register/register.ts` | Everyone | Create account |
| Dashboard | `dashboard/dashboard.ts` | Users | View stats & badges |
| Products | `product-list/product-list.ts` | Users | Browse products |
| Product Detail | `product-detail/product-detail.ts` | Users | See product info |
| Cart | `cart/cart.ts` | Users | Manage cart |
| Seller Dashboard | `seller-dashboard/seller-dashboard.ts` | Sellers | View seller stats |
| Add/Edit Product | `seller-product/seller-product.ts` | Sellers | Add products |
| Admin Panel | `admin/admin.ts` | Admins | Manage platform |

### 🔐 Authentication Flow

```
1. User clicks "Login"
2. Enter email & password
3. Backend verifies and sends back a "token"
4. Token saved in browser storage
5. Token sent with every request
6. User can access protected pages
```

### 🛡️ Route Protection

The frontend has guards that check:
- **Are you logged in?** (AuthGuard)
- **Do you have permission?** (RoleGuard)

Example:
```
- /dashboard    → Needs USER role
- /seller/dashboard → Needs SELLER role
- /admin        → Needs ADMIN role
```

### 📊 Services Explained

**Services** are like helpers that talk to the backend:

| Service | Purpose |
|---------|---------|
| `auth.service.ts` | Handles login, logout, registration |
| `product.ts` | Gets product information |
| `cart.ts` | Manages shopping cart |
| `order.service.ts` | Places orders |
| `report.service.ts` | Gets reports and statistics |
| `cloudinary.ts` | Uploads product images |

---

## 🛠️ Common Tasks for Developers

### How to...

#### Add a new page:
```bash
ng generate component pages/new-page
```

#### Add a new service:
```bash
ng generate service services/new-service
```

#### Add a new API endpoint call:
1. Open the relevant service file
2. Add a new method like:
   ```typescript
   getSomething(): Observable<any> {
     return this.http.get(`${this.baseUrl}/something`);
   }
   ```

#### Change styling:
Edit `src/styles.scss` for global styles
Or edit the component's `.scss` file for page-specific styles

#### Test changes:
```bash
ng test          # Run unit tests
ng e2e           # Run end-to-end tests
```

#### Build for production:
```bash
ng build --configuration production
```

---

## ❓ Common Questions

### Q: What is Angular?
**A**: Angular is a framework for building websites. It uses TypeScript (a type of JavaScript).

### Q: What is TypeScript?
**A**: TypeScript is a programming language that makes JavaScript easier to write and debug.

### Q: What is RxJS?
**A**: RxJS helps handle asynchronous operations, like waiting for data from the server.

### Q: What are "Observables"?
**A**: Observables are like streams of data - you can subscribe to them to get values as they come in.

### Q: What is Chart.js?
**A**: Chart.js is a library for drawing charts and graphs.

---

## 📞 Need Help?

If you're a developer working on this project:

| Issue | Solution |
|-------|----------|
| Dependencies won't install | Run `npm install` again |
| Angular doesn't start | Check if port 4200 is free |
| API calls failing | Make sure backend is running |
| Charts not showing | Check browser console for errors |

---

## 🔧 Configuration Files

### package.json
Contains the list of dependencies (packages) the project needs.

### angular.json
Configuration for Angular CLI - tells Angular how to build the project.

### proxy.conf.json
During development, redirects API calls to the backend server.

### tsconfig.json
TypeScript configuration - how to compile the code.

---

## 📚 Learning Resources

Want to learn more about these technologies?

| Topic | Resource |
|-------|----------|
| Angular | [angular.dev](https://angular.dev) |
| TypeScript | [typescriptlang.org](https://www.typescriptlang.org) |
| RxJS | [rxjs.dev](https://rxjs.dev) |
| Chart.js | [chartjs.org](https://www.chartjs.org) |

---

## 🎉 Summary

EcoBazzar Frontend is built with:
- ✅ **Angular 20** - For building the user interface
- ✅ **TypeScript** - For writing code
- ✅ **Chart.js** - For displaying charts
- ✅ **RxJS** - For handling data
- ✅ **HTTP Interceptors** - For adding auth tokens
- ✅ **Route Guards** - For security

The frontend connects to the backend API to:
- 🔐 Authenticate users
- 📦 Get product information
- 🛒 Manage shopping cart
- 📊 Display reports and statistics

---

<div align="center">

**Thank you for helping make EcoBazzar better!**

🌿 Made with 💚 for our planet 🌍

**EcoBazzar Frontend** © 2024

---

*For the main user guide, see the main README.md file*
</div>

---

## 📋 Quick Reference for Developers

| Command | Description |
|---------|-------------|
| `npm install` | Install dependencies |
| `ng serve` | Start development server |
| `ng build` | Build for production |
| `ng test` | Run unit tests |
| `ng e2e` | Run end-to-end tests |
| `ng generate component pages/name` | Create new page |
| `ng generate service services/name` | Create new service |


