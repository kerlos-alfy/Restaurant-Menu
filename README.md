شكرًا للتوضيح! إليك الإصدار المُحدث من ملف `README.md` مع الإشارة إلى أن الملفات بصيغة `jsx` وإضافة ملف `Footer`:

```markdown
# Restaurant Menu App

A React-based application for displaying and filtering a restaurant's menu. The app allows users to filter menu items by category or search for a specific dish. It features smooth animations using **Framer Motion** and a responsive design powered by **React Bootstrap**.

## Features

- **Category Filter**: Filter menu items by category (e.g., "الكل" for all categories).
- **Search Filter**: Search for specific dishes by their title.
- **Smooth Animations**: Framer Motion adds engaging animations for a modern user experience.
- **Responsive Design**: The app is optimized for all screen sizes with **React Bootstrap**.

## Technologies Used

- **React**: For building the user interface.
- **Framer Motion**: For smooth and customizable animations.
- **React Bootstrap**: For responsive and mobile-friendly UI components.
- **CSS**: For custom styling.

## Installation

Follow these steps to set up and run the app locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/kerlos-alfy/Restaurant-Menu.git
   ```

2. Navigate to the project directory:
   ```bash
   cd Restaurant-Menu
   ```

3. Install the required dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

The app will be available at [http://localhost:5173](http://localhost:5173).

## File Structure

```
/src
  /components
    NavBar.jsx         - Navigation bar component with a search form
    Header.jsx         - Header component displaying the app title
    Category.jsx       - Category filter buttons
    ItemsList.jsx      - Displays filtered menu items
    Footer.jsx         - Footer component with additional information or links
  /data
    items.js           - Contains the list of menu items with categories and titles
  App.css              - Application-specific styles
  App.jsx              - Main application file
```

## How to Use

1. **Filter by Category**: 
   - Click any category button (e.g., "الكل") to filter menu items by that category.
   
2. **Search by Title**: 
   - Use the search bar in the navigation bar to find a specific dish by its title.

3. **Responsive Design**:
   - The app is fully responsive and adapts to different screen sizes seamlessly.

## Demo

Currently, the app runs locally. To access it, follow the [Installation](#installation) steps and visit [http://localhost:5173](http://localhost:5173) after starting the server.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
