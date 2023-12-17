let adjective = prompt('Enter an adjective:')
let noun = prompt('Enter a noun:')
let adverb = prompt('Enter an adverb:')
let verb = prompt('Enter a verb:')
let place = prompt('Enter a place')
let color = prompt('Enter a color')
let articleOfClothing = prompt('Enter a type of clothing')
let emotion = prompt('Enter an emotion')
let activity = prompt('enter an activity')
let hotBeverage = prompt('enter a hot beverage')
let pluralNoun = prompt('Enter a plural noun')
let holiday = prompt('Enter a holiday')


let story = `One chilly <b>${adjective}</b> morning, I woke up to find the world outside covered in a blanket of <b>${noun}</b> snow. Excitedly, I jumped out of bed and put on my coziest <b>${articleOfClothing}</b> before heading outdoors.

As soon as I stepped outside, the cold air hit my face, and I couldn't help but feel a sense of <b>${emotion}</b>. The snowflakes were falling gently from the sky, creating a magical <b>${adjective}</b> atmosphere.

I decided to grab my <b>${noun}</b> and head to the nearest hill for some <b>${activity}</b> fun. As I reached the top, I gazed at the breathtaking landscape of snow-covered trees and houses. It was like a scene from a <b>${holiday}</b> movie.

With a sense of <b>${adjective}</b> anticipation, I positioned myself at the top of the hill, took a deep breath, and <b>${verb}</b> down the slope. The rush of wind against my face and the sound of my <b>${noun}</b> crunching through the snow added to the thrill.

After a few rounds of <b>${activity}</b>, I decided to take a break and build a <b>${noun}</b> in the backyard. I shaped the snow into <b<${adjective}</b> walls and added the finishing touches with some <b>${noun}</b> for decoration.

As the day went on, the snowfall continued, and the world around me became even more enchanting. I couldn't have asked for a more <b>${adjective}</b> and memorable snowy day adventure.

When I finally went back inside, I warmed up with a cup of <b>${hotBeverage}</b> and reflected on the day's <b>${adjective}</b> escapades. It was a perfect reminder of the simple joys that a snowy day can bring.

I hope you enjoy your own snowy day adventure, filled with laughter, warmth, and plenty of <b>${pluralNoun}</b> memories!`

let madLibOutputDiv = document.getElementById('madLibOutput')

madLibOutputDiv.innerHTML = `<p>${story}</p>`