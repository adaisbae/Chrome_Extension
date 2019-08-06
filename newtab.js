const quotes = [
'You either die a hero, or you live long enough to see yourself become the villain. - Harvey Dent',
'The night is darkest before the dawn. And I promise you, the dawn is coming. - Harvey Dent',
'It\'s not about what I want. It\'s about what\'s fair! - Harvey Dent',
'You Can\'t. You Can\'t give in. YOU CAN\'T GIVE IN!!! - Harvey Dent',
'I believe that whatever doesn\'t kill you, simply makes you... stranger. - the Joker',
'If you\'re good at something, never do it for free. - the Joker',
'"Why so SERIOUS?! - the Joker',
'This is what happens when an unstoppable force meets an immovable object.- the Joker',
'madness, as you know, is like gravity: all it takes is a little push! - the Joker',
'I\'m not a monster. I\'m just ahead of the curve. - the Joker',
'You know what I\'ve noticed? Nobody panics when things go "according to plan"... even if the plan is horrifying. - the Joker',
'You know the thing about chaos? It\'s fair. - the Joker',
'Some men just want to watch the world burn. - Alfred Pennyworth',
'Accomplice? I\'m gonna tell them the whole thing was your idea! - Bruce Wayne',
'Sometimes…the truth isn\'t good enough. Sometimes people deserve more. Sometimes people deserve to have their faith rewarded. - Batman',
]


function newQuote(){
    let randomNumber = Math.floor(Math.random() * (quotes.length));
    document.querySelector('.display').innerHTML = quotes[randomNumber];
}

//let button = document.querySelector('button')
//button.addEventListener('click', newQuote());

window.addEventListener('load', newQuote());
