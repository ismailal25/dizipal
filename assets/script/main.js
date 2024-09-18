

const getData = async () => {
    try {
        const response = await fetch('https://api.tvmaze.com/shows');
        const data = await response.json();

        const cardsContainer = document.querySelector('.movie-cards');

        
        cardsContainer.innerHTML = '';

        data.forEach(show => {
            const movieCard = document.createElement('a');
            movieCard.classList.add('card');
            movieCard.href = `detail.html?id=${show.id}`; 

            const imageUrl = show.image ? show.image.medium : './assets/img/default.png';
            const showTitle = show.name || 'Unknown Title';

            movieCard.innerHTML = `
                <img src="${imageUrl}" alt="${showTitle}" />
                <div class="card-content">
                    <h2>${showTitle}</h2>
                </div>
            `;

            cardsContainer.appendChild(movieCard);
        });
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};


document.addEventListener('DOMContentLoaded', getData);
