import { viewDetails } from "./details";

export function displaySearchResults(movies) {
    const resultsContainer = document.getElementById('results-container');
    resultsContainer.innerHTML = ''; // clear previous results before displaying new ones

    movies.forEach(movie => {
        const movieElement = document.createElement('div');
        movieElement.classList.add('result-item');
        movieElement.innerHTML = `
        <img src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" alt="${movie.title}" />
        <h3>${movie.title}</h3>
        <p>${movie.release_date}</p>
        <button class='details-button' data-id ='${movie.id}'>View Details</button>
    `;
        resultsContainer.appendChild(movieElement);
    });

    //Button listener
    document.querySelectorAll('.details-button').forEach(button => {
        button.addEventListener('click', (event) => {
            const movieId = event.target.getAttribute('data-id');
            if (movieId) {
                viewDetails(movieId);
            } else {
                console.error('Error, movieId is null or undefined!');
            }
        });
    });
}