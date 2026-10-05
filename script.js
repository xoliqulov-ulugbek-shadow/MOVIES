import { movies } from './movies.js';

const a1 = document.getElementById('a1');
const inp = document.getElementById('inp');

function formatRuntime(minutes) {
    if (!minutes) return 'N/A';
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours} hr ${mins} min`;
}

function rend(l1) {
    if (!a1) return;

    if (!l1 || l1.length === 0) {
        a1.innerHTML = '<div class="notresult">Ming Afsuski Bunaqa Film Yoq Ekanda. </div>';
        return;
    }

    a1.innerHTML = l1.map(movie => `
       
    <div class="card">
        <img class="img" src="./doom.png" alt="${movie.Title}">
        
        <h3>${movie.Title}</h3>

        <div class="meta-info">
            <span>${movie.imdb_rating}</span>
            <span>${movie.movie_year}</span>
            <span>${formatRuntime(movie.runtime)}</span>
        </div>

        <p class="categories">${Array.isArray(movie.Categories) ? movie.Categories.join(', ') : movie.Categories}</p>
        
        <a href="https://www.youtube.com/watch?v=${movie.ytid}" target="_blank" class="btn-js">More info</a>
    </div>
`).join('');
}

if (inp) {
    inp.addEventListener('input', (e1) => {
        const t1 = e1.target.value.toLowerCase().trim();

        if (!t1) {
            rend(movies);
            return;
        }

        const toza = movies.filter(movie => {
            const title = String(movie.Title || '').toLowerCase();
            const fullTitle = String(movie.fulltitle || '').toLowerCase();
            const categories = String(movie.Categories || '').toLowerCase();

            return title.includes(t1) || fullTitle.includes(t1) || categories.includes(t1);
        });

        rend(toza);
    });
}

rend(movies);