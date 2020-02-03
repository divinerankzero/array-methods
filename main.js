const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"]

/*
    Use the forEach method to add the name of each planet
    to a section element in your HTML with an id of "planets".
    Use string templates to construct the DOM elements.
*/

const planetEl = document.getElementById("planets")

planets.forEach(planet => {    
    planetEl.innerHTML += `
        <article id=${planet}>
            <h2>${planet}</h2>    
        </article>
    `
})
/*
    Use the map method to create a new array where the
    first letter of each planet is capitalized. Use the
    `toUpperCase()` method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
*/
const planetsUpper = planets.map(planet => {
    const firstLetter = planet.charAt(0);
    return planet.replace(firstLetter, firstLetter.toUpperCase());
})

console.log("Planets with first letter in Uppercase: ", planetsUpper)

/*
    Use the filter method to create a new array that
    contains planets with the letter 'e'. Use the `includes()`
    method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
*/

const planetsE = planets.filter(planet => planet.includes('e'));

console.log("Planets with the letter 'E' in them: ", planetsE)