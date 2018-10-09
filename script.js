
const author = document.getElementById('author');
const quoteText = document.getElementById('text');
const tweet = document.getElementById('tweet-quote');

//gets a list of randomquotes with its author, converts it to json and pushes it into an array called quotes
const endpoint = 'https://gist.githubusercontent.com/dmakk767/9375ff01aff76f1788aead1df9a66338/raw/491f8c2e91b7d3b8f1c8230e32d9c9bc1a1adfa6/Quotes.json%2520'

const quotes = [];

fetch(endpoint)
  .then(blob => blob.json())
  .then(data => quotes.push(...data)); 

//when called, it returns a random element from the quotes array
function rdmQuote() {
  return quotes[Math.floor(Math.random()* quotes.length)]; 
}

//this is the function that takes the random element seperates that object into the quote and the author, places it inside the dom and lets a user tweet it when they click the tweet button
function getQuote() {

  let randomQuote = rdmQuote();

  let currentAuthor = randomQuote.name;
  let currentQuote = randomQuote.quote;
  
  text.innerHTML = currentQuote; 
  author.innerHTML = `~ ${currentAuthor}`; 
  
  let sharedQuote = `${currentQuote} -${currentAuthor}`;

  let tweetUrl = "https://twitter.com/intent/tweet?text=" + sharedQuote; 
  

  tweet.setAttribute("href", tweetUrl); 
  
}

window.onload = function() {
  getQuote();
 
}


