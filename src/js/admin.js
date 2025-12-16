const url = "http://localhost:3000/movies"
const response = await fetch(url)
const movies = await response.json()

const submit = document.querySelector("#submit")
const form = document.querySelector("#form")
const formInputs = document.querySelectorAll("input")

submit.addEventListener('click', (event) => {
    event.preventDefault()

    let formData = new FormData(form)
    let data = Object.fromEntries(formData)
    console.log(data)
    data.cast.split(", ")

    if (data.directors.includes(", ") === true) {
        data.directors = data.directors.split(", ")
    }
    if (data.cast.includes(", ") === true) {
        data.cast = data.cast.split(", ")
    }
    if (data.genres.includes(", ") === true) {
        data.genres = data.genres.split(", ")
    }
    if (data.contentRating.includes(", ") === true) {
        data.contentRating = data.contentRating.split(", ")
    }
    data.id = movies.length + 1
    data.slug = data.title.toLowerCase().replaceAll(" ", "-")
    let jsonData = JSON.stringify(data)

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': "application/json"
        },
        body: jsonData
    })

    formInputs.forEach(input => {

        if (input.type != "submit") {
            input.value = ""
        }

    });

})