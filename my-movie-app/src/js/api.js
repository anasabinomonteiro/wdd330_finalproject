const API_KEY = '55d6f7a56945cb0906b10816ff8b13d1';
const BASE_URL = 'https://api.themoviedb.org/3';

//function to search for movies/series by title
export async function fetchMovies(query) {
    const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`);
    const data = await response.json();
    return data.results;
}

//Function for search movie/series details by Id
export async function fetchMovieDetails(movieId) {
    const response = await fetch(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`);
    const data = await response.json();
    return data; // return the movie details
}

// Search popular movies
export const fetchPopularMovies = async () => {
    try {
        const url = `${BASE_URL}/movie/popular?api_key=${API_KEY}`;
        const response = await fetch(url);

        //Check if response ok
        if(!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data.results;
    }catch (error) {
        console.error('Error fetching popular movies', error);
        throw error;
    }
};