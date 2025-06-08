# Skip Selector Redesign

This project fetches skip bin data and lets users browse, select, and view details of skips. The goal of this redesign is to keep all original functionality but deliver a fresh, modern, responsive UI with clean, maintainable Next code and improved UX.

---

## Features

- Fetch skip data from API and handle loading/errors gracefully.
- Display multiple skip cards in a responsive grid layout.
- Show skeleton loaders during data fetching.
- Select a skip to view detailed info in an overlay modal.
- Smooth UI transitions and hover effects.
- Mobile-first design with full desktop support.

---

## What Was Improved

### Code Quality

- `Simplified and modular Next components.`
- `Proper use of hooks and state management.`
- `Clear separation of concerns between UI components and data fetching.`
- `Use of semantic HTML and accessible interactive elements.`

### Responsiveness & Layout

- Mobile-first grid that adapts seamlessly to all screen sizes.
- Touch-friendly buttons and larger hit areas on mobile.
- Scrollable modal with backdrop blur for selected skip details.
- Consistent spacing, font sizes, and colors for readability.

### UI/UX Enhancements

- Cleaner card design with consistent shadows, borders, and hover states.
- Improved loading skeletons matching card sizes.
- Meaningful button labels and feedback.
- Clear "Back" button in detail modal.
- Highlighted key info (price, size, hire days) with visual hierarchy.
- Color-coded status indicators (road-legal, heavy waste allowed).

---

## How To Run

1. Clone the repo
2. Run `npm install` or `yarn` to install dependencies
3. Run the development server with `npm run dev` or `yarn dev`
4. Open http://localhost:3000 on mobile or desktop browsers

---

## Technology Stack

- React 18+ with hooks
- Next.js (Image optimization & routing)
- Axios for API calls
- react-loading-skeleton for loading placeholders
- react-toastify for notifications
- Tailwind CSS for styling and responsive design

---

## Author

Mohamed Sarda

> This redesign is focused on making the app look fresh and clean while keeping all features intact and improving user experience on all devices.
