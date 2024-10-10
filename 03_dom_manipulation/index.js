console.log('hello from index.js', document.getElementById("header"))

// ✅ What is the DOM?

	// Chrome Dev Tools

// ✅ Creating / Reading DOM Elements

    // .createElement() => creates one DOM element
	const newParagraph = document.createElement('p')
	newParagraph.textContent = "this is a paragraph"
	// const newHeading = document.createElement('h1')
	// console.log(newHeading)
	// .querySelector() => returns the first matching DOM element
	const header = document.querySelector('div#header')
	// .querySelectorAll() => returns an array of matching DOM elements
	const staticDivs = document.querySelectorAll('div')
	console.log(staticDivs)
	// .getElementById() => returns the DOM element with matching Id
	const headerById = document.getElementById('header')
	// .getElementsByClassName() => returns an array of DOM elements with matching Class
	const listItems = document.getElementsByClassName('list-items')
	// .getElementsByTagName() => when is this especially useful?
    const liveDivs = document.getElementsByTagName('div')
	console.log(liveDivs)
// ✅ Updating / Deleting DOM Elements
	// .append
	header.append(newParagraph)
	
	// first find the element on the DOM
	const pokeContainerDiv = document.getElementById('poke-container')
	// create an new element
	const newDiv = document.createElement('div')
	newDiv.innerHTML = `
		<h3>Pokemon name</h3>
		<p>info about pokemon</p>
	`
	// add the new element as a child to the found DOM element
	pokeContainerDiv.append(newDiv)
	
	const h1 = document.querySelectorAll('h1')[1]
	h1.innerText = 'Gotta catch them all'
	// .remove()
	
	newDiv.remove()

// ✅ .innerHTML vs. .innerText vs. .textContent

  	// .innerHTML => if you want to insert HTML within a DOM element

	// .innerText => if you only want to insert text, shows only human-readable elements

	// .textContent => if you only want to insert text, shows formatting of elements

// -------------------------------------------

console.log("------------------------");
console.log("⬇️ Break Out Activites ⬇️");
console.log("🚨 Comment Out Lecture Code Above Before Starting 🚨");
console.log("💡 Use console.log() To Check Answers 💡");
console.log("------------------------");

// 🚧 Break Out Activity 1: Creating / Reading / Updating DOM Elements

  // 🚨 Comment out any conflicting code above before proceeding.

		// array of pokemon objects
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

		// container to store DOM element with ID of "poke-container" => <div id="poke-container"></div>
const pokeContainer = document.getElementById("poke-container");

  // 1️⃣ Given "pokemon" and "pokeContainer" above, create a function (renderPokemon) that:

	//  ✔️ Accepts a single "pokemon" object
 
 	//  ✔️ Creates a "div" element to contain information about each Pokemon and stores the "div" in a variable (pokeCard)
		//	Assign pokeCard a unique ID with the Pokemon's "id" prepended by "poke-" (i.e., "poke-1" for Bulbasaur)
		//	Assign pokeCard a className of "poke-card"
	
	//  ✔️ Creates an "img" element for each Pokemon and stores the "img" in a variable (pokeImg)
		//	Assign pokeImg a source (src) linking to the Pokemon's image
		// 	Assign pokeImg a unique alt with the Pokemon's name followed by " image" (i.e., "bulbasaur image")
	
	//	✔️ Creates an "h3" element for each Pokemon and stores the element in a variable (pokeName)
		// 	Use textContent to fill in the heading with the Pokemon's name

	//	✔️ Appends all variables to "pokeCard" before appending "pokeCard" to "pokeContainer"
		// 	Use append() as necessary

// function renderPokemon(pokemon) {
// 	const pokeCard = document.createElement('div')
// 	pokeCard.id = `poke-${pokemon.id}`
// 	pokeCard.className = 'poke-card'

// 	const pokeImg = document.createElement('img')
// 	pokeImg.src = pokemon.img
// 	pokeImg.alt = `${pokemon.name} image`

// 	const pokeName = document.createElement('h3')
// 	pokeName.textContent = pokemon.name
	
// 	pokeCard.append(pokeImg, pokeName)
// 	pokeContainer.append(pokeCard)
// }

	// 	💡 Use Chrome Dev Tools to view changes being made to the DOM

	// 	💡 Take a look at "styles.css" to see how the DOM Elements we're building out correspond to CSS class and ID selectors.

	// 	✨ BONUS: Try to reduce redudancy (DRY Principle) in your code through the use of JS functions and variables.

	// ✅ Check Answer: 
// function init() {
// 	pokemon.forEach(renderPokemon);
// }

// init();

// 🚧 Break Out Activity 2: Creating / Reading / Updating Elements

  // 🚨 Comment out any conflicting code above before proceeding.

  // 1️⃣ Add the following capabilities to renderPokemon:

	//  ✔️ Creates an "h3" element for each Pokemon and stores the element in a variable (pokeLikes)
		// 	Use textContent to fill in the heading with "Likes: "
	
	//  ✔️ Creates an "h5" element for each Pokemon and stores the element in a variable (likesNum)
		// 	Assign likesNum a className of "likes-num"
		// 	Use textContent to fill in the heading with the Pokemon's number of likes

	//  ✔️ Creates a "button" element for each Pokemon and stores the element in a variable (likesBttn)
		// 	Assign likesBttn a className of "likes-bttn"
		// 	Use textContent to fill in the button with a label, "♥"

	//  ✔️ Creates a "button" element for each Pokemon and stores the element in a variable (deleteBttn)
		// 	Assign deleteBttn a className of "delete-bttn"
		// 	Use textContent to fill in the button with a label, "Delete"

	//	✔️ Appends all variables to "pokeCard" before appending "pokeCard" to "pokeContainer"
		// 	Use append() as necessary

	function createNewElement(element, className, text) {
		const newElement = document.createElement(element)
		newElement.className = className
		newElement.textContent = text
		return newElement
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

		// const likesNum = document.createElement('h5')
		// likesNum.className = "likes-num"
		// likesNum.textContent = pokemon.likes
		const likesNum = createNewElement('h5', "likes-num", pokemon.likes)

		// const likesBttn = document.createElement('button')
		// likesBttn.className = "likes-bttn"
		// likesBttn.textContent = "♥"
		const likesBttn = createNewElement('button', "likes-bttn", "♥")

		// const deleteBttn = document.createElement('button')
		// deleteBttn.className = "delete-bttn"
		// deleteBttn.textContent = "Delete"
		const deleteBttn = createNewElement('button', "delete-bttn", "Delete")

		pokeCard.append(pokeImg, pokeName, pokeLikes, likesNum, likesBttn, deleteBttn)
		pokeContainer.append(pokeCard)
	}

	// ✅ Check Answer: 
	function init() {
		pokemon.forEach(renderPokemon);
	}

	init();