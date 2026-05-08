

async function github() {
    try {
        const response = await fetch("https://api.github.com/users")
        if(!response.ok){
            throw new Error("Data is not persent")
        }
        const data = await response.json()
        // console.log(users)

        for (let user of data) {
            const card = document.getElementById("card")
            const div = document.createElement("div")
            div.classList.add("user")
            const image = document.createElement("img")
            image.src = user.avatar_url
            const userName = document.createElement("h2")
            userName.textContent = user.login;
            const anchor = document.createElement("a")
            anchor.href = user.html_url
            anchor.textContent = "Visit Profile"
            div.append(image, userName, anchor)
            card.append(div)
        }
    }
    catch(error) {
        alert(error)
    }
}



github()


