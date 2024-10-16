let addToy = false;
let BASE_URL = 'http://localhost:3000/toys'
const toyContainer = document.getElementById("toy-collection")

function listenForLikeClick(likeButton, toy, likeCountPar) {
  likeButton.addEventListener('click', () => {
    toy.likes++
    likeCountPar.textContent = `${toy.likes} Likes`
  })
}

function renderToy(toy) {
  const card = document.createElement('div')
  card.className = 'card'
  
  // security issues with user submitted data from form
  // card.innerHTML = `
  //   <h2>${toy.name}</h2>
  //   <img src=${toy.image} class="toy-avatar" />
  //   <p>${toy.likes} Likes</p>
  //   <button class="like-btn" id=${toy.id}>Like ❤️</button>
  // `
  const nameHeading = document.createElement('h2')
  nameHeading.textContent = toy.name
  
  const image = document.createElement('img')
  image.src = toy.image
  image.className = "toy-avatar"
  
  const par = document.createElement('p')
  par.textContent = `${toy.likes} Likes`
  
  const button = document.createElement('button')
  button.textContent = "Like ❤️"
  button.className = "like-btn"
  button.id = toy.id
  
  card.append(nameHeading, image, par, button)
  toyContainer.append(card)

  listenForLikeClick(button, toy, par)
}


function displayToys(toys) {
  toys.forEach(renderToy)
  // toys.forEach((oneToy) => renderToy(oneToy))
}

function getToys() {
  fetch(BASE_URL)
  .then((resp) => resp.json())
  .then(displayToys)
  // .then((toysArr) => displayToys(toysArr))
}

function listenForNewToy() {
  const toyForm = document.querySelector('form.add-toy-form')
  toyForm.addEventListener('submit', (e) => {
    e.preventDefault()
    // get the info in the form inputs
    // create a new toy object
    // render that toy object using renderToy function
    const toy = {
      name: e.target.name.value,
      image: e.target.image.value,
      likes: 0,
      id: Math.floor(Math.random() * 10000) + 9
    }
    renderToy(toy)
    e.target.reset()
  })
}

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
  getToys()
  listenForNewToy()
});