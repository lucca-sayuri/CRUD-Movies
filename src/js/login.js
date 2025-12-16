const url = "http://localhost:3000/admins"
const response = await fetch(url)
const admins = await response.json()
console.log(admins)

const submitBtn = document.querySelector(".submit")

submitBtn.addEventListener('click', (event) => {
    event.preventDefault()

    const email = document.querySelector("#email").value
    const password = document.querySelector("#password").value

    admins.forEach(admin => {
        if (email === admin.email && password === admin.password) {
            window.location.href = "../admin/"
        }
    });
})