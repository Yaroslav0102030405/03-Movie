import React from "react";

export default function server( url, settings = {}) {
    const defaultPath = 'https://api.themoviedb.org/3/movie'; //popular';
    const imagePath = 'https://image.tmdb.org/t/p/w500/';
    const API_KEY = 'dca6039011122855ab691a23bc74a542';
    const language = 'uk'
    const _url = `${defaultPath}/${url}?api_key=${API_KEY}&language=${language}&page=1`;

    return fetch(_url).then(res => {
        return res.json();
    })
}