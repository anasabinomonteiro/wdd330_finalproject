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