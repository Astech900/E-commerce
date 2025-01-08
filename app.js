let displayQoute = document.getElementById("quote");
let displayAuthor= document.getElementById("author");
let getNewQuotes = document.getElementById("new-qoutes");


getNewQuotes.addEventListener("click",()=>{
    
    getQuotes()
    
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
    
}


