# Camera Management Application

A modern, responsive React application for managing and monitoring cameras. Built with React 19, TypeScript, Vite, and Tailwind CSS, this application provides a production-ready interface for camera management with real-time updates, filtering, and pagination.

## Table of Contents

- [Features](#features)
- [Technology Stack](#technology-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Environment Setup](#environment-setup)
- [Running the Application](#running-the-application)
- [Building for Production](#building-for-production)
- [Project Structure](#project-structure)
- [Features Overview](#features-overview)
- [API Integration](#api-integration)


## Features

- **Camera Management**: View, filter, and manage cameras with an intuitive interface
- **Search Functionality**: Real-time search across camera names
- **Advanced Filtering**: Filter cameras by status (Active/Inactive) and location
- **Pagination**: Browse large datasets with customizable items per page (10, 20, 50)
- **Status Management**: Toggle camera status with API integration and real-time feedback
- **Local Deletion**: Remove cameras from view locally (changes revert on page refresh)
- **Responsive Design**: Fully responsive UI that works seamlessly on mobile, tablet, and desktop
- **Toast Notifications**: User-friendly notifications for all actions (success, error, warning, info)
- **Custom Dropdown**: Styled dropdown components with hover effects and keyboard support
- **Custom Scrollbars**: Modern scrollbar styling throughout the application
- **Accessibility**: ARIA labels, keyboard navigation, and semantic HTML

## Technology Stack

- **Frontend Framework**: React 19.2.0 with React DOM
- **Language**: TypeScript 5.9.3 (strict mode)
- **Build Tool**: Vite 7.2.4
- **Styling**: Tailwind CSS 4.1.18
- **State Management**: React Hooks and Context API
- **HTTP Client**: Fetch API with Bearer token authentication

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v16 or higher)
- npm (v8 or higher) or yarn

To check your Node.js version:

```bash
node --version
npm --version
```

## Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd cameraproj
```

2. Install dependencies:

```bash
npm install
```

This will install all required packages listed in package.json.

## Environment Setup

1. Create a `.env` file in the root directory by copying `.env.example`:

```bash
cp .env.example .env
```

2. Configure the environment variables in `.env`:

```dotenv
VITE_API_BASE=https://hiring-assignment.wobot.ai/api/v1
VITE_AUTH_TOKEN=your_authentication_token_here
VITE_API_UPDATE= https://api-app-staging.wobot.ai/app/v1
```

Note: Never commit `.env` files to version control.

## Running the Application

### Development Mode

Start the development server with hot module reloading:

```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or the next available port).

### Build the Application

Create an optimized production build:

```bash
npm run build
```

Output files will be generated in the `dist` directory.

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

### Lint Code

Run ESLint to check for code quality issues:

```bash
npm run lint
```

## Building for Production

### Build Process

```bash
npm run build
```

This command will run TypeScript type checking and create an optimized Vite build in the `dist` directory.

## Project Structure

```
src/
├── components/
│   ├── common/                 # Shared components
│   │   └── CustomDropdown.tsx
│   ├── filters/                # Filter components
│   │   └── CameraFilters.tsx
│   ├── layout/                 # Layout components
│   │   ├── Header.tsx
│   │   └── Layout.tsx
│   ├── pagination/             # Pagination component
│   │   └── PaginationControls.tsx
│   ├── table/                  # Table components
│   │   ├── CameraTable.tsx
│   │   ├── CameraTableBody.tsx
│   │   ├── CameraTableHeader.tsx
│   │   └── CameraTableRow.tsx
│   └── ui/                     # UI components
│       ├── DeleteIcon.tsx
│       ├── DeleteModal.tsx
│       ├── HealthIndicator.tsx
│       ├── StatusIcon.tsx
│       ├── ToastContainer.tsx
│       └── ToastItem.tsx
├── context/
│   └── ToastContext.tsx        # Toast state management
├── hooks/
│   ├── useCameras.ts           # Camera data fetching hook
│   ├── useFilters.ts           # Filter logic hook
│   ├── usePagination.ts        # Pagination state hook
│   └── useToast.ts             # Toast context hook
├── services/
│   └── cameraApi.ts            # API communication service
├── types/
│   ├── index.ts                # Main type definitions
│   └── toast.ts                # Toast-related types
├── App.tsx                     # Root component
├── main.tsx                    # Application entry point
├── index.css                   # Global styles
└── App.css                     # App-specific styles

public/                         # Static assets
└── assets/                     # Images and icons
```

## Features Overview

### Camera Management

- **View Cameras**: Display all available cameras in an organized table format
- **Search**: Real-time search across camera names
- **Filter**: Filter by status (Active/Inactive) and location
- **Pagination**: Navigate through large camera lists with adjustable page size

### Status Management

- **Toggle Status**: Click the status icon to toggle between Active/Inactive
- **API Integration**: Status changes are immediately sent to the backend
- **Real-time Feedback**: Toast notifications confirm success or show errors

### Local Deletion

- **Delete Action**: Remove cameras from the current view
- **No API Call**: Deletion is local only and doesn't affect the backend
- **Restore on Refresh**: Deleted cameras reappear when the page is refreshed
- **Confirmation Modal**: Confirmation dialog before deletion

### User Experience

- **Toast Notifications**: Automatic notifications for:
  - Successful camera status changes
  - Successful camera deletions
  - API errors with descriptive messages
  - Status: Success (green), Error (red), Warning (yellow), Info (blue)

- **Responsive Design**:
  - Mobile: Single-column layout, full-width inputs, stacked pagination
  - Tablet: Multi-column layout with adjusted spacing
  - Desktop: Full layout with optimal spacing and sizing

- **Hover Effects**:
  - Dropdown items highlight with gradient background
  - Icons and buttons show hover state feedback
  - Table rows highlight on hover for better visibility

- **Custom Scrollbars**: Styled scrollbars on dropdowns and table for modern appearance

## API Integration

The application connects to an external camera management API service. Configure the API endpoint and authentication token in your environment variables before running the application.


