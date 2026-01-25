# AADONA - Frontend Application

A modern React-based web application for AADONA, featuring comprehensive form management with full backend integration for data persistence.

## 🚀 Tech Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Backend**: Express.js with MongoDB
- **State Management**: React Hooks (useState, useEffect)
- **HTTP Client**: Fetch API

## ✨ Features

### 📋 Form Management System
All forms are fully integrated with backend API endpoints and save data to MongoDB database:

1. **Contact Form** (`/contact-us`)
   - General inquiries and contact submissions
   - Endpoint: `POST /api/forms/contact`

2. **Partner Registration** (`/become-partner`)
   - Partner application with company details, revenue, and verticals
   - Endpoint: `POST /api/forms/become-partner`

3. **Job Applications** (`/careers/apply`)
   - Complete job application form with resume upload
   - Endpoint: `POST /api/forms/apply-now`

4. **Project Locking** (`/project-locking`)
   - Project inventory locking requests
   - Endpoint: `POST /api/forms/project-locking`

5. **Training Requests** (`/request-training`)
   - Training session registration with participant details
   - Endpoint: `POST /api/forms/request-training`

6. **Demo Requests** (`/request-demo`)
   - Product demonstration scheduling
   - Endpoint: `POST /api/forms/request-demo`

7. **Product Support** (`/support/product-support`)
   - Technical support ticket creation
   - Endpoint: `POST /api/forms/product-support`

8. **DOA Requests** (`/support/request-doa`)
   - Dead-on-arrival product return requests
   - Endpoint: `POST /api/forms/request-doa`

9. **Warranty Registration** (`/support/warranty-registration`)
   - Product warranty registration with invoice upload
   - Endpoint: `POST /api/forms/warranty-registration`

10. **Tech Squad** (`/support/tech-squad`)
    - On-site/remote engineering support requests
    - Endpoint: `POST /api/forms/tech-squad`

11. **Whistle Blower** (`/about/whistle-blower`)
    - Confidential reporting system with report number generation
    - Endpoint: `POST /api/forms/whistle-blower`

### 🎨 UI Features

- Responsive design with Tailwind CSS
- Form validation with error handling
- Success/error message notifications
- Loading states during submission
- File upload support (invoices, resumes)
- Country selection dropdowns
- Date pickers
- Multi-select checkboxes
- Dynamic form state management

### 🔒 Error Handling

- Complete try-catch blocks for all API calls
- Network error notifications
- Server error handling with user-friendly messages
- Form validation before submission
- File size validation (15MB limit)

### 📱 Pages & Components

- Home page with hero section
- Product catalog and details
- About us and company information
- Leadership team profiles
- Media center
- Career opportunities
- Support tools and calculators
- Customer testimonials
- Partners section

## 🛠️ Installation & Setup

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Environment Setup**
   - Ensure backend server is running on `http://localhost:5000`
   - MongoDB should be connected to `aadona_db` database

3. **Start Development Server**
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:5173`

4. **Build for Production**
   ```bash
   npm run build
   ```

5. **Preview Production Build**
   ```bash
   npm run preview
   ```

## 🔌 Backend Integration

All forms connect to Express.js backend with the following configuration:

- **Base URL**: `http://localhost:5000`
- **API Prefix**: `/api/forms/`
- **Content Type**: `application/json`
- **Method**: `POST`

### Database Collections

Each form saves data to its respective MongoDB collection:
- `contacts`
- `becomepartners`
- `applynows`
- `projectlockings`
- `requesttrainings`
- `requestdemos`
- `productsupports`
- `requestdoas`
- `warrantyregistrations`
- `techsquads`
- `whistleblowers`

## 📦 Project Structure

```
client/
├── public/              # Static assets
├── src/
│   ├── assets/          # Images and media files
│   ├── Components/      # Reusable components
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── Chatbot.jsx
│   │   └── ...
│   ├── pages/           # Page components
│   │   ├── About/       # About section pages
│   │   ├── active/      # Active products
│   │   ├── Partners/    # Partner pages
│   │   ├── passive/     # Passive solutions
│   │   └── support/     # Support pages
│   ├── App.jsx          # Main app component
│   └── main.jsx         # Entry point
├── index.html
├── package.json
└── vite.config.js
```

## 🌐 Deployment

The application is configured for Netlify deployment:
- Build command: `npm run build`
- Publish directory: `dist`
- Redirects configured for SPA routing

## 🧪 Development

- **Hot Module Replacement (HMR)** enabled
- **ESLint** configured for code quality
- **Fast Refresh** with Vite
- React DevTools compatible

## 📄 License

Proprietary - AADONA

## 🤝 Contributing

For internal development only. Contact the development team for access.

---

Built with ❤️ for AADONA
