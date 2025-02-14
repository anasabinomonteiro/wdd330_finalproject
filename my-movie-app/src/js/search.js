import { fetchMovies } from './api.js';
import { displaySearchResults } from './ui.js';

const searchForm = document.getElementById('search-form');
if (searchForm) {
  searchForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const searchInput = document.getElementById('search-input');
    if (!searchInput) return;

    const query = searchInput.value.trim();
    if (!query) return;

    const movies = await fetchMovies(query);
    displaySearchResults(movies);
  });
}

// Register the search history whenever a user views the details of a movie
export function saveSearchHistory(movieId) {
  let searchHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];;

  //Verify if the movieId is already in the searchHistory
  if (!searchHistory.includes(movieId)) {
    searchHistory.push(movieId);

    // Limit the search history to 5 items
    if (searchHistory.length > 5) {
      searchHistory.shift(); //Remove oldest item
    }

    localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
  }
}