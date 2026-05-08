# Gym Management System - Frontend

React + Vite frontend for the Gym Management System with a modern, responsive UI built with Tailwind CSS.

## 🚀 Quick Start

### Prerequisites
- Node.js v14+
- npm or yarn

### Installation

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Setup environment variables**
   ```bash
   cp .env.example .env
   ```
   Edit `.env` with your backend API URL

3. **Start the development server**
   ```bash
   npm run dev
   ```

The application will start at `http://localhost:5173` (Vite default port).

## 🔧 Environment Variables

Create a `.env` file in the `frontend` directory with the following variables:

```env
# Backend API URL
VITE_API_URL=http://localhost:5000/api
```

### Environment Variables Explanation

| Variable | Description | Example |
|----------|-------------|---------|
| `VITE_API_URL` | Backend API base URL | `http://localhost:5000/api` |

## 📁 Project Structure

```
frontend/
├── src/
│   ├── App.jsx                 # Root React component
│   ├── main.jsx                # Application entry point
│   ├── index.css               # Global styles
│   ├── api/                    # API client setup
│   │   ├── apiClient.js
│   │   ├── authApi.js
│   │   ├── axiosInstance.js
│   │   ├── memberApi.js
│   │   ├── subscriptionApi.js
│   │   └── dashboardApi.js
│   ├── assets/                 # Static assets
│   ├── components/             # Reusable components
│   │   ├── common/
│   │   │   ├── Button.jsx
│   │   │   ├── Card.jsx
│   │   │   ├── Input.jsx
│   │   │   ├── Modal.jsx
│   │   │   └── StatsCard.jsx
│   │   ├── forms/              # Form components
│   │   ├── layout/             # Layout components
│   │   │   ├── Navbar.jsx
│   │   │   └── Sidebar.jsx
│   │   ├── members/
│   │   │   └── MemberForm.jsx
│   │   └── subscription/
│   │       └── SubscriptionForm.jsx
│   ├── context/                # React Context
│   │   └── AuthContext.jsx
│   ├── hooks/                  # Custom hooks
│   ├── layouts/                # Layout wrappers
│   │   └── DashboardLayout.jsx
│   ├── pages/                  # Page components
│   │   ├── auth/
│   │   │   └── LoginPage.jsx
│   │   ├── dashboard/
│   │   │   └── DashboardPage.jsx
│   │   └── members/
│   │       └── MembersPage.jsx
│   ├── routes/                 # Routing setup
│   │   ├── AppRoutes.jsx
│   │   └── ProtectedRoute.jsx
│   └── utils/                  # Utility functions
├── public/                     # Static files
├── index.html                  # HTML template
├── vite.config.js              # Vite configuration
├── eslint.config.js            # ESLint configuration
├── tailwind.config.js          # Tailwind CSS config
├── package.json
└── .env                        # Environment variables (create this)
```

## 🛠️ Available Scripts

- `npm run dev` - Start development server (hot reload enabled)
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint to check code quality

## 📚 Main Features

### Pages

1. **Login Page** (`/`)
   - User authentication
   - Demo credentials display
   - Auto-redirect if already logged in
   - Form validation

2. **Dashboard** (`/dashboard`)
   - Overview statistics
   - Key metrics display
   - Quick access to other features

3. **Members** (`/members`)
   - List all gym members with pagination
   - Create new member
   - Edit member details
   - Delete member with confirmation modal
   - Assign subscriptions to members

### Components

#### Common Components
- `Button.jsx` - Reusable button with loading state
- `Card.jsx` - Card container with styling
- `Input.jsx` - Form input with labels
- `Modal.jsx` - Reusable modal dialog
- `StatsCard.jsx` - Statistics display card

#### Layout Components
- `Navbar.jsx` - Top navigation bar
- `Sidebar.jsx` - Side navigation menu
- `DashboardLayout.jsx` - Main dashboard layout wrapper

#### Feature Components
- `MemberForm.jsx` - Form for creating/editing members
- `SubscriptionForm.jsx` - Form for assigning subscriptions

## 🔐 Authentication

The application uses JWT tokens for authentication:

1. User logs in on the login page
2. Token is stored in `localStorage`
3. Axios instance automatically includes token in API requests
4. Protected routes check for token before allowing access
5. If token is invalid/expired, user is redirected to login

### Protected Routes

Routes wrapped with `<ProtectedRoute>` require valid authentication:
- `/dashboard`
- `/members`

## 🎨 Styling

The application uses:
- **Tailwind CSS** for utility-first styling
- **Lucide React** for icons
- Custom CSS for global styles (`index.css`)

### Color Scheme
- Primary: Slate (grays)
- Accents: Blue, Red, Emerald
- Background: Light (slate-50, slate-100)

## 📡 API Integration

### Axios Instance Setup
- Base URL is set from `VITE_API_URL` environment variable
- JWT token is automatically added to headers
- Error handling with toast notifications

### API Modules

- `authApi.js` - Authentication endpoints
- `memberApi.js` - Member management endpoints
- `subscriptionApi.js` - Subscription endpoints
- `dashboardApi.js` - Dashboard data endpoints

## 🚀 Building for Production

```bash
# Build
npm run build

# This creates an optimized build in the 'dist' folder
# You can preview the build locally:
npm run preview
```

## 📝 Admin Credentials

```
Email: admin@gmail.com
Password: admin123
```

These credentials are displayed on the login page for reference.

## 🔄 State Management

- **Authentication Context** (`AuthContext.jsx`): Manages global auth state (user, login, logout)
- **Local State** (useState): Used for component-level state management
- **localStorage**: Persists tokens and user data

## 🐛 Troubleshooting

### API Connection Error
- Verify backend server is running
- Check `VITE_API_URL` in `.env` is correct
- Ensure CORS is enabled on backend

### Login Issues
- Check demo credentials are correct
- Verify backend authentication endpoint is working
- Check browser console for detailed error messages

### Port Already in Use
- Default Vite port is 5173
- Change port in `vite.config.js` if needed
- Or specify port: `npm run dev -- --port 3000`

### Build Errors
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

## 📚 Technologies Used

- **React 19** - UI library
- **Vite** - Build tool
- **React Router** - Client-side routing
- **Axios** - HTTP client
- **Tailwind CSS** - Styling
- **Lucide React** - Icon library
- **React Hot Toast** - Toast notifications
- **ESLint** - Code linting

## 📄 License

ISC License
