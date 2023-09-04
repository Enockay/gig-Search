const img1 = document.querySelector(".default");
let para1 = document.querySelector(".para1");
let input = document.querySelector(".searchGig");
const img2 = document.querySelector(".gig");
const button = document.querySelector("button");

(function defaultGig(){
fetch('https://api.giphy.com/v1/gifs/translate?key=130FcRNv0JjdaqV2JYgRJsPZjSeeuogj&s=dogs',{mode:"cors"})
.then((response)=>{
    return response.json();
}).then((response)=>{
    img1.src = response.data.images.original.url;
    para1.textContent = `successfully fetched DOG gig wait for display now`
    para1.style.color = "green"
}).catch((error)=>{
    para1.style.color = "red"
    para1.textContent(`${error} failed to fetch api url`)
})
})()   ;


button.addEventListener("click",fetchImg);

async function fetchImg(){
    let gig = await input.value 
    try{
     let response = await fetch(`https://api.giphy.com/v1/gifs/translate?key=130FcRNv0JjdaqV2JYgRJsPZjSeeuogj&s=${gig}`,{mode:"cors"});
     let result = await response.json();
     img2.src = result.data.images.original.url;
     console.log(result.data.images.original.url);
     alert('successfully fetched wait for display it will take some seconds')
    } catch(error){
     alert(`${error} caught an error`)
    }
 }
 

