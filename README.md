# Bombay Blokes Technical Assignment

This project is a React-based website developed as part of the technical assignment for the React developer position at Bombay Blokes. It demonstrates various React concepts and best practices through four main tasks.

## Technologies Used

- React.js
- Next.js 14
- Tailwind CSS
- Shadcn UI

## Setup

To run this project locally:

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Run the development server:
   ```
   npm run dev
   ```
4. Open `http://localhost:3000` in your browser

## Task Overview

### Task 1: Responsive Header Component

- Created a functional component for the header
- Implemented responsive design using Tailwind CSS
- Used Flexbox for layout
- Implemented a mobile drawer menu with animation

#### Approach:

#### Functional Component

- Created a Navbar functional component for a modern React approach using hooks and function-based components.

#### Responsive Design

- **Tailwind CSS:** Utilized Tailwind CSS for styling to build a responsive layout efficiently.
- **Flexbox Layout:** Applied Flexbox for a flexible and adaptive layout that adjusts based on screen size.

#### Navigation Links

- **Desktop Navigation:** Displayed navigation links with dynamic styling based on the current route using usePathname. The "Work" link features a dropdown menu that appears on hover.

- **Dropdown Menu:** Implemented a dropdown menu under the "Work" link with Tailwind's hover and transition utilities for a smooth interaction.

#### Mobile Navigation

- **Mobile Menu:** Rendered a separate MobileNav component for smaller screens to handle the mobile drawer menu functionality.

#### Button Component

- **Contact Button:** Included a Button component visible on larger screens for a call-to-action, styled to match the theme with Tailwind CSS.

### Task 2: Dynamic Form Component

- Developed a form with dynamic field addition
- Managed form state using React hooks
- Implemented form validation with error messages
- Displayed submitted data in JSON format

#### Approach:

#### Form State Management

- **useForm Hook:** Used the `useForm` hook from `react-hook-form` to manage form state and handle validation efficiently. This approach leverages built-in methods and simplifies form handling, reducing the need for boilerplate code.

#### Dynamic Field Addition

- **useFieldArray Hook:** Implemented the `useFieldArray` hook from `react-hook-form` to enable dynamic addition and removal of fields. This feature allows users to add multiple fields as needed, enhancing the flexibility of the form.

#### Validation

- **Zod Integration:** Integrated Zod with `react-hook-form` using `zodResolver` to enforce schema-based validation. Custom validation messages are set for each field to provide clear and user-friendly feedback to users.

#### Reusable Components

- **DRY Principle:** Created reusable components like `FormField`, `FormControl` and `FormMessage` to maintain a clean and maintainable codebase. These components encapsulate common form functionalities and help adhere to the DRY (Don’t Repeat Yourself) principle.

#### Display Submitted Data

- **JSON Display:** Used `JSON.stringify` to display the submitted form data in JSON format below the form.

### Task 3: Themed Button Component with Context API

- Created a reusable button component
- Implemented theme management using Context API
- Added a theme toggle functionality

#### Approach:

#### Theme Context Creation

- **`ThemeProvider` Component:** Created a `ThemeProvider` component to manage and provide the theme state (`light` or `dark`) across the application using React’s Context API. It initializes the theme from `localStorage` and updates the `document` class based on the current theme.
- **State Management:** Used the `useState` hook to handle theme state and `useEffect` to synchronize the theme with `localStorage` and apply theme-specific CSS classes.

#### Theme Management

- **Context API:** Implemented `createContext` to create a `themeContext` that provides the current theme and a `toggleTheme` function. This context is used to manage global theme state and facilitate theme switching.
- **Toggle Function:** Added a `toggleTheme` function to switch between `light` and `dark` themes.

#### Theme Toggle Button

- **`ToggleTheme` Component:** Developed a `ToggleTheme` button component that uses the `themeContext` to toggle the theme. The button displays an icon and text that change based on the active theme (`IoMdMoon` for dark mode and `IoMdSunny` for light mode).

### Task 4: API Fetch with Error Handling

- Integrated with https://fakestoreapi.com/
- Implemented a search bar functionality
- Added filtering and sorting options

#### Approach:

#### Data Fetching

- **API Integration:** Used the `fetch` API to retrieve data from the Fake Store API.
  - **Products:** Fetched the list of products from `https://fakestoreapi.com/products`.
  - **Categories:** Fetched product categories from `https://fakestoreapi.com/products/categories`.

#### Components

- **`FakeStore` Component:**
  - **Data Fetching:** Retrieves product and category data from the API.
  - **Error Handling:** Displays a technical error message if data fetching fails.
  - **Rendering:** Passes the fetched data to the `ProductList` component.

- **`ProductList` Component:**
  - **State Management:** Manages state for products, selected category, search input and sort order using React’s `useState` hook.
  - **Filtering:** Filters products based on search input and selected category.
  - **Sorting:** Sorts products by price in ascending or descending order.
  - **Rendering:**
    - **Search Bar:** Allows users to search products by title.
    - **Category Filter:** Provides a dropdown to filter products by category.
    - **Sort Button:** Toggles sorting order between low-to-high and high-to-low prices.
    - **Product Display:** Displays filtered and sorted products in a grid layout. Shows product details including title, category, price, description and image.


## Conclusion
Thank you for reviewing my technical assignment. I look forward to discussing the project in more detail and exploring how I can contribute to Bombay Blokes.
