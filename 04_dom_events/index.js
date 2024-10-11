// ✅ Understand Static vs. Dynamic Web Applications

  // Static => Fixed, display the same content for each user
  // Dynamic => Display different content for each user, allow for user interaction

// ✅ Handling Click and Submit Events

    // document.addEventListener('DOMContentLoaded', () => {
    //   addButtonListener()
    // })

function handleClick() {
  console.log('clicked')
  // can manipulate the dom when the click happens
    // create a new element 
    // finding on the DOM where we want to add that new element
    // add new element to the dom
}
     
  // addEventListener(event, callbackFunction);
function addButtonListener() {
  const button = document.querySelector('button')
  button.addEventListener('click', handleClick)
  button.removeEventListener('click', handleClick)
}
    // when would we define callbackFunction as an anonymous function instead
    // of as a function reference?

      // addEventListener("click", () => console.log("Test"));
        // vs. 
      // addEventListener("click", doSomething);
      // need that function somewhere else in your code or
      // pass different arguments other than the event or
      // when you need to add a removeEventListener(needs the function passed to the event listener) 
    
function listenForNewPokemon() {
  const form = document.getElementById("poke-form")
  form.addEventListener('submit', (event) => {
    // prevent the default behavior of the form
    // no more page refresh
    event.preventDefault()
    // get value from name input
    const name = event.target['name-input'].value
    // get what was typed into the image input
    const image = event.target['img-input'].value
    // create pokemon object with id(one greater than last pokemon in pokemon array)
    const poke = {
      id: pokemon[pokemon.length - 1].id + 1,
      name: name,
      img: image,
      likes: 0
    }
    // add the new pokemon to the DOM
    renderPokemon(poke)
  })   
}
      
// ✅ .preventDefault()

  // event.preventDefault => prevents default event behavior (i.e., page reload
  // upon form submission)

// ✅ HTML Forms

  // .reset() => clears all values of HTML form elements

// -------------------------------------------

console.log("------------------------");
console.log("⬇️ Break Out Activites ⬇️");
console.log("🚨 Comment Out Lecture Code Above Before Starting 🚨");
console.log("💡 Use console.log() To Check Answers 💡");
console.log("------------------------");

// 🚧 Break Out Activity 1: Handling Click Events

  // 🚨 Comment out any conflicting code above before proceeding.

		// array of pokemon objects (pokemons)
		const pokemon = [
			{
				id: 1,
				name: "Bulbasaur",
				img: "./images/bulbasaur.png",
				likes: 4,
			},
			{
				id: 2,
				name: "Ivysaur",
				img: "./images/ivysaur.png",
				likes: 21,
			},
			{
				id: 3,
				name: "Venusaur",
				img: "./images/venasaur.png",
				likes: 7,
			},
			{
				id: 4,
				name: "Charmander",
				img: "./images/charmander.png",
				likes: 20,
			},
			{
				id: 5,
				name: "Charmeleon",
				img: "./images/charmeleon.png",
				likes: 11,
			},
		];

    const pokeContainer = document.getElementById("poke-container");
    const pokeForm = document.getElementById("poke-form");
    // pokeForm = DOM element with ID of "poke-form" => <div id="poke-form"></div>

    function createNewElement(element, className, text) {
      const newElement = document.createElement(element)
      newElement.className = className
      newElement.textContent = text
      return newElement
    }
  // 1️⃣ Create a function (addLike) that:

    //  ✔️ Accepts a single Pokemon object (pokemon) and likesNum (h5 displaying number of likes) as parameters

    //  ✔️ Increments the Pokemon's number of likes by +1

    //  ✔️ Updates the textContent of likesNum to reflect the Pokemon's updated number of likes
  
    // 	💡 In renderPokemon(), add an event listener to likeBttn, making sure to specify the event as well as the 
    //  callback function (addLike).

    function addLike(pokemon, likesNum){
      // update the pokemon objects liek property by 1
      pokemon.likes++
      // update the DOM with the new number of likes
      likesNum.textContent = pokemon.likes
    }

  // 2️⃣ Create a function (deletePokemon) that:

    //  ✔️ Accepts a single pokeCard as a parameter

    //  ✔️ Removes the pokeCard from the DOM

    // 	💡 In renderPokemon(), add an event listener to deleteBttn, making sure to specify the event as well as the 
    //  callback function (deletePokemon).
    
  
      function deletePoke(pokeCard){
      //   // ❗ your code here
      }
  
    function renderPokemon(pokemon) {
      const pokeCard = document.createElement('div')
      pokeCard.id = `poke-${pokemon.id}`
      pokeCard.className = 'poke-card'
    
      const pokeImg = document.createElement('img')
      pokeImg.src = pokemon.img
      pokeImg.alt = `${pokemon.name} image`
    
      const pokeName = document.createElement('h3')
      pokeName.textContent = pokemon.name
  
      const pokeLikes = document.createElement('h3')
      pokeLikes.textContent = "Likes: "
  
      const likesNum = createNewElement('h5', "likes-num", pokemon.likes)
      const likesBttn = createNewElement('button', "likes-bttn", "♥")
      const deleteBttn = createNewElement('button', "delete-bttn", "Delete")

      // ❗ add likeBttn event listener ❗
      likesBttn.addEventListener('click', () => addLike(pokemon, likesNum) )
      // ❗ add deleteBttn event listener ❗
  
      pokeCard.append(pokeImg, pokeName, pokeLikes, likesNum, likesBttn, deleteBttn)
      pokeContainer.append(pokeCard)
    }

    // ✅ Check Answer: 
    function init() {
      pokemon.forEach(renderPokemon);
      addButtonListener()
      listenForNewPokemon()
    }
  
    init();


  


// 🚧 Break Out Activity 2: Handling Submit Events

  // 1️⃣ Create a function (createPokemon) that:

    //  ✔️ Accepts a single submit event as a parameter

    //  ✔️ Prevents default form submission behavior (i.e., page refresh)

    //  ✔️ Creates a new Pokemon object and adds it to the "pokemons" Array

      //  Use .querySelector() to select and retrieve the value of '#name-input',
      //  setting it as the "name" for the new Pokemon object 

      //  Use .slice() to pull the final Pokemon's id from "pokemons," incrementing
      //  by one and setting the new value as the "id" for the new Pokemon object

      //  Each new Pokemon object should have an "img" of './images/whos_that_pokemon.png'
      //  as well as 0 "likes" initially

    //  ✔️ Creates a pokeCard for the new Pokemon using renderPokemon()

    //  ✔️ Resets pokeForm using .reset() 

	// 	💡 Use Chrome Dev Tools to view changes being made to the DOM
  
    // function createPokemon(){
    //   // ❗ your code here
    // }

  // ✅ Check Answer: 
  // function init() {
  //   pokemons.forEach(renderPokemon);
  //   pokeForm.addEventListener('submit', createPokemon)
  // }
  
  // init()