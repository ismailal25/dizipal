

const getShowDetails = async () => {
   
    const urlParams = new URLSearchParams(window.location.search);
    const showId = urlParams.get('id');

    if (!showId) {
        console.error('No show ID found in the URL.');
        return;
    }

    try {
        
        const response = await fetch(`https://api.tvmaze.com/shows/${showId}`);
        const show = await response.json();

        
        document.getElementById('show-image').src = show.image ? show.image.original : './assets/img/default.png';
        document.getElementById('show-title').textContent = show.name;
        document.getElementById('show-description').textContent = show.summary.replace(/<[^>]*>/g, ''); // Remove HTML tags
    } catch (error) {
        console.error('Error fetching show details:', error);
    }
};


document.addEventListener('DOMContentLoaded', getShowDetails);
