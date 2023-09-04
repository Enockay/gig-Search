const img = document.querySelector('img')
let para = document.querySelector('p');
let inputValue = document.getElementById("search").value;



   
    let submitButton = document.querySelector('.submit');

    submitButton.addEventListener("click",()=>{
      console.log(inputValue)
      
      para.textContent = `wait for the ${inputValue} gig`
      
    })

async function displayGig(){
    try{
    let response = await fetch('https://api.giphy.com/v1/gifs/translate?key=130FcRNv0JjdaqV2JYgRJsPZjSeeuogj&s=cats',{mode : "cors",})
    let result = await response.json();
    img = result.data.images.original.url;
    para.textContent = `success ${img}`;
}
catch(error){
    console.error(`${error} : failed to assign`);
    para.textContent = `${error}`;
}
}
displayGig();
async function logMovies(){
    const response = await fetch('https://api.giphy.com/v1/gifs/translate?key=130FcRNv0JjdaqV2JYgRJsPZjSeeuogj&s=dogs');
    const movies = await response.json();
    img = data.images.original.url;
    console.log(movies)
}
logMovies();

async function fetchImgUrl(){
    const response = await fetch('https://api.giphy.com/v1/gifs/translate?key=130FcRNv0JjdaqV2JYgRJsPZjSeeuogj&s=dogs',{mode : 'cors'});
    let result = response.json();
    console.log(result);
    console.log(result.data.images.original.url)
}
fetchImgUrl();
