const jokeUrl = 'https://icanhazdadjoke.com/';
const jokeField = document.getElementById('joke');
const jokeBtn = document.getElementById('button');

const getJoke = async (e) => {
    e.preventDefault();
    const joke = await fetch(jokeUrl, {
        headers: { Accept: 'application/json' },
    });
    const jokeData = await joke.json();
    jokeField.innerHTML = jokeData.joke;
};

jokeBtn.addEventListener('click', getJoke);

//document.addEventListener('DOMContentLoaded', getJoke); - to load a random joke on page load
