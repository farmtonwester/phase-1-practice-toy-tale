let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
});

fetch("http://localhost:3000/toys")
.then(resp => resp.json())
.then(data => data.forEach((toyObj) => {
    const toyDiv = document.createElement('div')
    toyDiv.className = "card"
    const toyCollection = document.getElementById("toy-collection")
    toyCollection.append(toyDiv)

    const toyName = document.createElement('h2')
    toyName.textContent = toyObj.name
    const toyImg = document.createElement('img')
    toyImg.src = toyObj.image
    toyImg.className = "toy-avatar"
    const toyLikes = document.createElement('p')
    toyLikes.textContent = `Likes: ${toyObj.likes}`
    const likeBttn = document.createElement('button')
    likeBttn.className = "like-bttn"
    likeBttn.id = toyObj.id
    likeBttn.textContent = "Like"

    toyDiv.append(toyName, toyImg, toyLikes, likeBttn)
  })
)

function submitForm (newName, newURL) {
  fetch("http://localhost:3000/toys", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
  },
    body: JSON.stringify({
      "name": newName,
      "image": newURL,
      "likes": 0
    })
  })
  .then (resp => resp.json())
  .then (data => createNewToyCard(data))
} 
submitForm()

function createNewToyCard(toyObj) {
  const toyDiv = document.createElement('div')
    toyDiv.className = "card"
    const toyCollection = document.getElementById("toy-collection")
    toyCollection.append(toyDiv)

    const toyName = document.createElement('h2')
    toyName.textContent = toyObj.name
    const toyImg = document.createElement('img')
    toyImg.src = toyObj.image
    toyImg.className = "toy-avatar"
    const toyLikes = document.createElement('p')
    toyLikes.textContent = `Likes: ${toyObj.likes}`
    const likeBttn = document.createElement('button')
    likeBttn.className = "like-bttn"
    likeBttn.id = toyObj.id
    likeBttn.textContent = "Like"

    toyDiv.append(toyName, toyImg, toyLikes, likeBttn)
}
const toyForm = document.getElementsByClassName()