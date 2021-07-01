const getJokes = async () => {
    const url = 'https://icanhazdadjoke.com/';
    try {
        const response = await fetch(url);
        if (response.ok) {
            const jsonResponse = await response.json();
            console.log(jsonResponse);
            return jsonResponse;
        }
    } catch (error) {
        console.log(error);
    }
};

const postJokes = async () => {
    const url = 'https://icanhazdadjoke.com/';
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                Accept: text / plain,
                Accept: text / html,
            },
        });
        if (response.ok) {
            const jsonResponse = await response.json();
            renderResponse(jsonResponse);
        }
    } catch (error) {
        console.log(error);
    }
};

const jokeField = document.querySelector('#joke');
const btn = document.querySelector('#button');

const getRandomJoke = () => {
    let jokeContent = createJokeHTML(jokes);
    jokeField.append(jokeContent);
};

const createJokeHTML = (jokes) => {
    return `<p>${jokes}</p>`;
};

const displayJoke = (event) => {
    event.preventDefault();
    while (jokeField.firstChild) {
        jokeField.removeChild(jokeField.firstChild);
    }
    postJokes();
};

btn.addEventListener('click', displayJoke);
