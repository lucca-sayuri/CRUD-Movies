// extract slug from url
const params = new URLSearchParams(window.location.search)
const slug = params.get("slug")
console.log(slug)

// fetch movie
const url = `http://localhost:3000/movies/?slug=${slug}`
const response = await fetch(url)
const movies = await response.json()
const movie = movies[0]
console.log(movie)

// render movie
const template = document.querySelector("#movie-template")

const clone = template.content.cloneNode(true)

// basic fields
clone.querySelector('.movie-cover').src = movie.cover
clone.querySelector('.movie-cover').alt = movie.title
clone.querySelector('.movie-title').textContent = movie.title
clone.querySelector('.movie-original-title').textContent = movie.originalTitle
clone.querySelector('.movie-synopsis').textContent = movie.synopsis
clone.querySelector('.movie-duration').textContent = movie.duration

if (Array.isArray(movie.cast) === true) {
    clone.querySelector('.movie-cast').textContent = movie.cast.join(", ", ", ")
} else {
    clone.querySelector('.movie-cast').textContent = movie.cast
}

if (Array.isArray(movie.directors) === true) {
    clone.querySelector('.movie-directors').textContent = movie.directors.join(", ", ", ")
} else {
    clone.querySelector('.movie-directors').textContent = movie.directors
}

if (Array.isArray(movie.genres) === true) {
    clone.querySelector(".movie-genres").textContent = movie.genres.join(", ", ", ")
} else {
    clone.querySelector(".movie-genres").textContent = movie.genres
}

if (Array.isArray(movie.contentRating) === true) {
    clone.querySelector(".movie-content-rating").textContent = movie.contentRating.join(", ", ", ")
} else {
    clone.querySelector(".movie-content-rating").textContent = movie.contentRating
}
// trailer
clone.querySelector('.movie-trailer').src = movie.trailer

// gallery
const gallery = clone.querySelector('.movie-gallery')

if (Object.hasOwn(movie, "gallery")) {
    movie.gallery.forEach((image) => {
    const img = document.createElement('img')
    img.src = image
    img.alt = movie.title
    img.width = 360
    img.className += "rounded shadow-lg"
    gallery.appendChild(img)
})
}

document.querySelector("#movie-container").appendChild(clone)