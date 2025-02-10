import { fetchMovieDetails } from "./api.js";

export async function viewDetails(movieId) {
    console.log('Movie Id', movieId)
    if (!movieId) {
        console.error('Error: movieId invalid!');
        return;
    }

    try {
        const details = await fetchMovieDetails(movieId);
        console.log(details); // to see what is returning

        const modalTitle = document.getElementById('modal-title');
        const modalDescription = document.getElementById('modal-description');
        const modalRating = document.getElementById('modal-rating');
        const modalWhereToWatch = document.getElementById('modal-where-to-watch');
        const modalPoster = document.getElementById('modal-poster');
        const modalTrailer = document.getElementById('modal-trailer');
        const modal = document.getElementById('details-modal');

        if (!modalTitle || !modalDescription || !modalRating || !modalWhereToWatch || !modalPoster || !modalTrailer || !modal) {
            console.error('Error: Missing required elements in the modal');
            return;
        }

        // Show details in the modal
        modalTitle.textContent = details.title || 'No title available';
        modalDescription.textContent = details.overview || 'No description available';
        modalRating.textContent = `Rating: ${details.vote_average || 'N/A'}`;
        modalWhereToWatch.textContent = 'Available on: ' + (details.homepage || 'No information available');

        // Show Poster img  
        modalPoster.src = details.poster_path
            ? `https://image.tmdb.org/t/p/w500${details.poster_path}`
            : 'https://via.placeholder.com/200x300?text=No+Image';

        // Show trailer
        if (details.videos?.results.length > 0) {
            modalTrailer.innerHTML = `<iframe src='https://www.youtube.com/embed/${details.videos.results[0].key}' frameborder='0'></iframe>`;
        } else {
            modalTrailer.innerHTML = 'No trailer available';
        }

        // Open Modal   
        modal.style.display = 'flex';

    } catch (error) {
        console.error('Error fetching movie details:', error);
    }
}

// Close modal with click button "❌"
document.addEventListener('DOMContentLoaded', () => {
    const closeButton = document.querySelector('.close-button');
    const modal = document.getElementById('details-modal');

    if (closeButton) {
        closeButton.addEventListener('click', () => {
            modal.style.display = 'none';
        });
    }

    // Close modal with click outside modal
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});
