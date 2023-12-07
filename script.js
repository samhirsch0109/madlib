let adjective = prompt('Enter an adjective:')
let noun = prompt('Enter a noun:')
let adverb = prompt('Enter an adverb:')
let verb = prompt('Enter a verb:')

let story = `Once upon a time, in a ${adjective} ${noun} ${adverb} ${verb}.`

let madLibOutputDiv = document.getElementById('madLibOutput')

madLibOutputDiv.innerHTML = `<p>${story}</p>`