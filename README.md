# CinemaScape

A simple React app providing users with insights into currently showing movies, featuring a user-friendly search, sorting, genre filtering, and favoriting within an elegant, responsive interface.

## Key Features and Components

### Search Bar

Let's the user search for movies by name from the list of currently showing movies.

### Marquee

An infinitely scrolling marquee displaying the titles of all currently playing films as a fun UI element.

### Filtering and Sorting

A filter component with menus that enable users to sort currently showing movies by ratings, ascending or descending, and to filter by genres and user-selected favorites.

### Currently Showing Movies List

Consists of flippable movie cards.

### Flippable Movie Card

- Front: Displays movie poster and actions to view more info and add the movie to favorites.
- Back: Displays movie information like title, year, rating & overview and call-to-actions of close & buy tickets.

### Accessibility

- All actionable UI are HTML Inputs, Buttons, or Selects ensuring all keyboard shortcuts function as users would expect
- Aria labels have been added for screen readers

## Installing and Running the Application

1. **Installation:**

   - Clone the repository:

   ```
   git clone https://github.com/GarimaB06/CinemaScape.git
   ```

   - Install dependencies:

   ```
   npm install
   ```

2. **Run the Application:**

   ```
   npm start
   ```

3. **Access the Application:**
   Open your browser and navigate to `http://localhost:5173/`.
