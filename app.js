//query selectors

let searchEl = document.querySelector("#searchBar");
let submitEl = document.querySelector("#submitBtn");
let gifEl = document.querySelector("#gifDisplay");

//Global Constants

const apiKey = "z9qEJKCAcrrMCA7q77qHJXLDkv111Kra";
const limit = 9;
const rating = "g";
const lang = "en";

async submitEl.addEventListener("submit", (evt) => {
    evt.preventDefault();
})


async function getResults() {
    let response = await fetch(`http://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${gifEl}&lang=${lang}&rating=${rating}&limit=${limit}`)
    let jsonReponse = await response.json();
    //return jsonReponse;

    jsonPresponse.data.forEach(evt) => { displayResulst(evt)}

}



//http://api.giphy.com/v1/gifs/search?api_key=`${expression}`&q=`${expression}`

function displayResults(data) {
    //for each gif in data
    let dataMap = new Map(data);
    let imgLink = dataMap.get("url");

    


    gifEl.innerHTML +=`
        <img src= "${data.images.orginal.url}">

    
    `
}

function handleFormSubmit() {
    //grab value attribute
    getResults(){

    }

}