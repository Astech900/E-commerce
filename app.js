let displayQoute = document.getElementById("quote");
let displayAuthor= document.getElementById("author");
let getNewQuotes = document.getElementById("new-qoutes");
let tweetButton = document.getElementById("tweet-btn");


getNewQuotes.addEventListener("click",()=>{
    getQuotes();
})

tweetButton.addEventListener("click",()=>{
    window.open("https://twitter.com/intent/tweet?text=" + displayQoute.innerHTML,"Tweet Window", width="600px", height="300px")
})

let apiUrl = 'https://api.api-ninjas.com/v1/quotes';
let apiKey = 'JdfbjWykkPShxFY7aUVhVw==cGmMnlnP1Tfu16CK';

async function getQuotes() {


    fetch(apiUrl,{
        method:'GET',
        headers:{
            'X-Api-Key': apiKey
        }
    }).then(res=>res.json())
    .then(data=>{
        for(qout of data){
            displayAuthor.innerHTML = qout.author;
            displayQoute.innerHTML = qout.quote;
        }
        
    })
    .catch(err =>{
       displayQoute.innerHTML = `Error Detected, Check your API's`;
    })
    
}


