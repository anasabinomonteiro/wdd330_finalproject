// Import modules and configure events
import './search.js';
import './details.js';
import './favorites.js';
import { displaySearchResults } from './ui.js'; // imported function to show results
import { fetchPopularMovies } from './api.js'; // imported funtion to search for poplar movies

// When the page load, search for and show popular films
document.addEventListener('DOMContentLoaded', async () => {
    try {
        console.log('fetching popular movies...');
        const movies = await fetchPopularMovies();
        displaySearchResults(movies);
    } catch (error) {
        console.error('Error to search popular movies:', error);
    }
});
